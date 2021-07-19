import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {add, del} from '../utils/constants';

/**
 * Cesium Button
 */
@customElement('cesium-button')
export class CesiumButton extends LitElement {
   /**
   * The background color of the button.
   */
  @property({type: String}) btnBackgrouncColor = '#FF444C';

   /**
   * The name of the button.
   */
  @property({type: String}) btnName = 'Delete';

   /**
   * The Icon of the button, an enum of `del` and `add`.
   */
  @property({type: String}) btnIcon = del;

  static styles = css`
    button {
      padding: 7px 10px;
      color: #fff;
      border: none;
      border-radius: 20px;
      min-width: 70px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-family: 'Noto Sans';
    }

    svg {
      padding: 0 5px;
      fill: #fff;
      font-weight: 600;
    }

    span {
      font-size: 14px;
    }
  `;

  private renderBtnIcon() {
    switch (this.btnIcon) {
      case add:
        return html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            height="20px"
            viewBox="0 0 24 24"
            width="20px"
            fill="#000000"
          >
            <g><rect fill="none" height="24" width="24" /></g>
            <g>
              <g><path d="M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6V13z" /></g>
            </g>
          </svg>
        `;
      case del:
        return html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 0 24 24"
            width="20px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
            />
          </svg>
        `;
      default:
        return html``;
    }
  }

  render() {
    return html`
      <button style="background-color: ${this.btnBackgrouncColor}">
        ${this.renderBtnIcon()}
        <span style="padding-right: ${this.btnIcon ? '5px;' : '0'}"
          >${this.btnName}</span
        >
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cesium-button': CesiumButton;
  }
}
