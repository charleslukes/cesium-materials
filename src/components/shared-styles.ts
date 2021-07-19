import {css} from 'lit';

export const sharedStyles = css`
  .input-color-container {
    position: relative;
    overflow: hidden;
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 40px;
    margin-top: 5px;
  }
  .input-color {
    position: absolute;
    right: -15px;
    top: -12px;
    width: 56px;
    height: 56px;
    border: none;
    background-color: transparent;
  }
`;
