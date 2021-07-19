import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {InputTypes} from '../utils/types';
import {sharedStyles} from './shared-styles';

 /**
   * Cesium Input
   */
@customElement('cesium-input')
export class CesiumInput extends LitElement {
   /**
   * The text of the input header
   */
  @property({type: String}) title = 'Name';

   /**
   * The id of the input to map label and input .
   */
  @property({type: String}) id = 'input-text';

   /**
   * The type of input.
   */
  @property({type: String}) type: InputTypes = 'color';

   /**
   * The fieldKey of the input, works like an id to properly identify input
   */
  @property({type: String}) fieldKey = 'name';

   /**
   * The value of the input
   */
  @property({type: String}) value: string | number = '0';

  static styles = [
    css`
      label {
        font-weight: 700;
        font-family: 'Noto Sans';
        font-size: 14px;
        color: #fff;
      }
      input {
        margin-top: 4px;
        font-family: 'Noto Sans';
        padding: 0px 10px;
        width: 200px;
        border: none;
        border-radius: 5px;
        background-color: #353640;
        color: #fff;
        height: 32px;
      }

      input[type='date'] {
        position: relative;
      }

      input[type='date']::-webkit-calendar-picker-indicator {
        color: #fff;
        background-image: url('data:image/svg+xml;charset=utf8,%3Csvg fill="%23ffffff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/%3E%3Cpath d="M0 0h24v24H0z" fill="none"/%3E%3C/svg%3E');
        z-index: 1;
      }
    `,
    sharedStyles,
  ];

  handleInput(e: {target: HTMLInputElement}, fieldKey: string) {
    const {value} = e.target;
    if (value) {
       /**
        * Triggers on inputs and emits data in format {type: string, value: string},
        */
      this.dispatchEvent(
        new CustomEvent('on-cesium-input', {
          detail: {type: fieldKey, value: value},
          composed: true,
          bubbles: true,
        })
      );
    }
  }

  render() {
    return html`
      <div>
        <label class="label-${this.type}" for="${this.id}">
          ${this.title}
        </label>
        <div class="input-${this.type}-container">
          <input
            @input=${(e: {target: HTMLInputElement}) =>
              this.handleInput(e, this.fieldKey)}
            class="input-${this.type}"
            id="${this.id}"
            value="${this.value}"
            type="${this.type}"
            min="0"
          />
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cesium-input': CesiumInput;
  }
}
