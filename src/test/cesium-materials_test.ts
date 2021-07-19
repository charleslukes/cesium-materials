/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {CesiumMaterials} from '../cesium-materials.js';

import {fixture, html, expect} from '@open-wc/testing';

const assert = chai.assert;

suite('cesium-materials', () => {
  test('is defined', () => {
    const el = document.createElement('cesium-materials');
    assert.instanceOf(el, CesiumMaterials);
  });

  test('renders with default values', async () => {
    const el: CesiumMaterials = await fixture(html`<cesium-materials></cesium-materials>`);
    // should be an empty array 
    expect(el.materials.length).to.equal(0);
  });

  test('add materials', async () => {
    const el: CesiumMaterials = await fixture(html`<cesium-materials></cesium-materials>`);
    el.addMaterial();
    expect(el.materials.length).to.equal(1);
  });

  test('delete materials', async () => {
    const el: CesiumMaterials = await fixture(html`<cesium-materials></cesium-materials>`);
    // adds one material
    el.addMaterial();
    // adds another one
    el.addMaterial();
    // delete one
    el.deleteMaterial();
    expect(el.materials.length).to.equal(1);
  });

  test('show text `No Materials` when materials list is empty', async () => {
    const el: CesiumMaterials = await fixture(html`<cesium-materials></cesium-materials>`);
    const leftPane = el.shadowRoot!.querySelector('.left-pane');
    const leftPaneChild = leftPane?.querySelector('div');
    expect(leftPaneChild?.textContent).to.equal('No Materials');
  });
});
