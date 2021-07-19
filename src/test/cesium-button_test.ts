/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

 import {CesiumButton} from '../components/cesium-button';

 import {expect, fixture, html} from '@open-wc/testing';
 
 const assert = chai.assert;
 
 suite('cesium-button', () => {
   test('is defined', () => {
     const el = document.createElement('cesium-button');
     assert.instanceOf(el, CesiumButton);
   });
 
   test('renders with default values', async () => {
     const el: CesiumButton = await fixture(html`<cesium-button></cesium-button>`);
     expect(el.btnName).to.equal('Delete');
     expect(el.btnBackgrouncColor).to.equal('#FF444C');
   });


   test('renders new name when passed in', async () => {
    const el: CesiumButton = await fixture(html`<cesium-button></cesium-button>`);
    el.btnName = "Submit"
    expect(el.btnName).to.equal('Submit');
  });
   
 });
 