import {LitElement, html, css, nothing} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import {repeat} from 'lit/directives/repeat.js';
import './components/cesium-button';
import './components/cesium-input';
import {sharedStyles} from './components/shared-styles';
import {CesiumMaterialTypes} from './utils/types';
import {classMap} from 'lit/directives/class-map.js';
import {color, volume, cost, name, date} from './utils/constants';
import {CesiumMaterialsService} from './services/cesium-materials-service';

/**
 * Cesium Materials
 */
@customElement('cesium-materials')
export class CesiumMaterials extends LitElement {
  @property({type: Array}) materials: Array<{
    id: string;
    materialsList: CesiumMaterialTypes;
    isActive: boolean;
  }> = [];

  @state() private totalCost = '0.00';

  protected cesiumMaterialsService: CesiumMaterialsService = new CesiumMaterialsService();

  private defaultMaterial: {
    id: string;
    materialsList: CesiumMaterialTypes;
    isActive: boolean;
  } = {
    id: '',
    isActive: false,
    materialsList: [
      {name: 'Name', value: 'New Material', type: 'text', fieldKey: name},
      {name: 'Color', value: '#44D7B6', type: 'color', fieldKey: color},
      {name: 'Volume (m3)', value: '0', type: 'number', fieldKey: volume},
      {
        name: 'Cost (USD per m3) ',
        value: '0.00',
        type: 'number',
        fieldKey: cost,
      },
      {name: 'Delivery Date', value: '', type: 'date', fieldKey: date},
    ],
  };

  static styles = [
    css`
      .materials {
        font-family: 'Noto Sans', sans-serif;
      }
      .header-text {
        font-size: 30px;
        font-weight: 700;
        color: #ffffff;
      }

      .btn-container {
        display: flex;
      }

      cesium-button {
        margin-right: 10px;
      }

      .pane-container {
        margin: 20px 0;
        display: flex;
      }

      .left-pane {
        width: 250px;
        border: 1px solid #565664;
        height: 290px;
        overflow-y: scroll;
        background-color: #17171a;
        margin-right: 20px;
      }

      .right-pane {
        background-color: #17171a;
        border-radius: 5px;
        width: 540px;
        box-sizing: border-box;
        padding: 30px;
      }

      .right-tab-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
      }

      .left-pane-tab {
        padding: 10px;
        background-color: transparent;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #565664;
        cursor: pointer;
      }

      .left-pane-tab-active {
        background-color: #000344;
      }

      .color-container {
        margin-right: 10px;
        height: 24px;
        width: 24px;
        border-radius: 50%;
      }

      .material-info-container {
        color: #ffffff;
        font-size: 14px;
        opacity: 0.7;
      }

      .material-title {
        width: 170px;
        overflow: scroll;
      }

      input[type='text'],
      input[type='text']:focus {
        background: transparent;
        border: none;
        outline-width: 0;
        color: #ffffff;
      }

      .hide-right-pane {
        position: absolute;
        left: -99999px;
      }

      .no-material {
        color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        font-size: 14px;
        font-style: italic;
        opacity: 0.7;
      }

      .total-amount-container {
        color: #ffffff;
        opacity: 0.85;
        width: 200px;
        display: flex;
        justify-content: space-between;
      }
    `,
    sharedStyles,
  ];

  async firstUpdated() {
    const materialData = await this.cesiumMaterialsService.getMaterials();
    if (materialData.isValid) {
      this.materials = materialData.data.map(
        (
          values: Array<{id: string; materialsList: CesiumMaterialTypes}>,
          index: number
        ) => {
          let individualMaterials;
          if (index + 1 === materialData.data.length) {
            individualMaterials = {...values, isActive: true};
          } else {
            individualMaterials = {...values, isActive: false};
          }
          return individualMaterials;
        }
      );
      this.addTotalCost(this.materials);
    }
  }

  renderLeftPane(
    materialsList: CesiumMaterialTypes,
    id: string,
    isActive: boolean
  ) {
    const materialColor = materialsList.find(
      (material) => material.fieldKey.toLowerCase() === 'color'
    );
    const materialName = materialsList.find(
      (material) => material.fieldKey.toLowerCase() === 'name'
    );
    const materialVolume = materialsList.find(
      (material) => material.fieldKey.toLowerCase() === 'volume'
    );

    return html`
      <div
        class="left-pane-tab ${classMap({'left-pane-tab-active': isActive})}"
        @click=${() => this.onClickLeftPane(id)}
      >
        <div
          class="color-container"
          style="background-color: ${materialColor?.value}"
        ></div>
        <div class="material-info-container">
          <div class="material-title">${materialName?.value}</div>
          <div class="material-volume">${materialVolume?.value} m3</div>
        </div>
      </div>
    `;
  }

  renderRightPane(
    materialsList: CesiumMaterialTypes,
    id: string,
    isActive: boolean
  ) {
    return html`
      <div
        class="right-tab-container ${classMap({'hide-right-pane': !isActive})}"
        @on-cesium-input=${(e: CustomEvent) => this.onRightPaneChange(e, id)}
      >
        ${materialsList.map(
          (material, index) => html`
            <cesium-input
              .type=${material.type}
              .fieldKey=${material.fieldKey}
              .title=${material.name}
              .value=${material.value}
              .id="input-${id}-${index}"
            ></cesium-input>
          `
        )})
        }
      </div>
    `;
  }

  updateMaterial(id: string, fieldKey: string, value: string) {
    this.materials = this.materials.map((data) => {
      if (data.id === id) {
        data.materialsList.map((materials) => {
          if (materials.fieldKey === fieldKey) {
            materials.value = value;
          }
          return materials;
        });
      }
      return data;
    });
  }

  onClickLeftPane(id: string) {
    this.materials = this.materials.map((data) => {
      if (data.id === id) {
        data.isActive = true;
      } else {
        data.isActive = false;
      }
      return data;
    });
  }

  onRightPaneChange(e: CustomEvent, id: string) {
    const {detail} = e;
    if (detail.type === name) {
      this.updateMaterial(id, name, detail.value);
    } else if (detail.type === color) {
      this.updateMaterial(id, color, detail.value);
    } else if (detail.type === volume) {
      this.updateMaterial(id, volume, detail.value);
    } else if (detail.type === cost) {
      this.updateMaterial(id, cost, detail.value);
      this.addTotalCost(this.materials);
    }
  }

  addTotalCost(
    materials: Array<{id: string; materialsList: CesiumMaterialTypes}>
  ) {
    const amount = materials.reduce((a, c) => {
      const fieldCost = c.materialsList.find((data) => data.fieldKey === cost);
      return a + parseFloat(fieldCost!.value as string);
    }, 0);

    this.totalCost = `${amount}`;
  }

  addMaterial() {
    this.materials.forEach((value) => {
      value.isActive = false;
    });
    const newMaterial = JSON.parse(
      JSON.stringify({
        ...this.defaultMaterial,
        id: this.makeId(),
        isActive: true,
      })
    );
    this.materials = [...this.materials, newMaterial];
  }

  deleteMaterial() {
    const amount = this.materials.reduce((a, c) => {
      if (c.isActive) {
        const fieldCost = c.materialsList.find(
          (data) => data.fieldKey === cost
        );
        a = parseFloat(this.totalCost) - parseFloat(fieldCost!.value as string);
      }
      return a;
    }, 0);
    this.totalCost = `${amount ? amount : '0.00'}`;

    this.materials = this.materials.filter((data) => !data.isActive);
    if (this.materials.length) {
      this.materials[this.materials.length - 1].isActive = true;
    }
  }

  makeId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  render() {
    return html`
      <div class="materials">
        <p class="header-text">Materials</p>
        <div class="btn-container">
          <cesium-button
            btnName="Add"
            btnIcon="add"
            btnBackgrouncColor="#0075DB"
            @click=${this.addMaterial}
          ></cesium-button>
          <cesium-button
            btnName="Delete"
            btnIcon="del"
            btnBackgrouncColor="${this.materials.length
              ? '#FF444C'
              : '#737373'}"
            @click=${this.deleteMaterial}
          ></cesium-button>
        </div>
        <div class="pane-container">
          <div class="left-pane">
            <!-- When empty -->
            ${this.materials.length === 0
              ? html`<div class="no-material">No Materials</div>`
              : nothing}

            <!-- When with data -->
            ${repeat(
              this.materials,
              (material) => material.id,
              (material) =>
                this.renderLeftPane(
                  material.materialsList,
                  material.id,
                  material.isActive
                )
            )}
          </div>
          <div class="right-pane">
            ${repeat(
              this.materials,
              (material) => material.id,
              (material) =>
                this.renderRightPane(
                  material.materialsList,
                  material.id,
                  material.isActive
                )
            )}
          </div>
        </div>
        <div class="total-amount-container">
          <div>Total Cost:</div>
          <div>$${this.totalCost}</div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cesium-materials': CesiumMaterials;
  }
}
