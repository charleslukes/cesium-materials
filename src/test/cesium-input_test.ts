/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

 import {CesiumInput} from '../components/cesium-input';

 import {expect, fixture, html, oneEvent} from '@open-wc/testing';
 
 const assert = chai.assert;

 suite('cesium-input', () => {
   test('is defined', () => {
     const el = document.createElement('cesium-input');
     assert.instanceOf(el, CesiumInput);
   });
 
   test('renders with default values', async () => {
     const el: CesiumInput = await fixture(html`<cesium-input></cesium-input>`);
     expect(el.title).to.equal('Name');
     expect(el.id).to.equal('input-text');
     expect(el.type).to.equal('color');
   });

   test('renders with new title and id when updated', async () => {
    const el: CesiumInput = await fixture(html`<cesium-input></cesium-input>`);
    el.title = "Cesium Smart Contracts";
    el.id = "input-cesium-smart-contracts";
    expect(el.title).to.equal('Cesium Smart Contracts');
    expect(el.id).to.equal('input-cesium-smart-contracts');
  });

  test('Event is fired', async () => {
    const el: CesiumInput = await fixture(html`<cesium-input></cesium-input>`);
    const input: any = el.shadowRoot!.querySelector('input');
    setTimeout(() => el.handleInput({target: input}, 'color'));
    const { detail } = await oneEvent(el, 'on-cesium-input');
    expect(detail.type).to.equal('color');
    expect(detail.value).to.equal('#000000');
  });
   
 });