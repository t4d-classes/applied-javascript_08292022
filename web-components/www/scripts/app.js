'use strict';

import { ColorStore } from './color-store.js';

const updateColorHome = (colorStore) => {
  const colorHome = document.querySelector('color-home');

  if (colorHome) {
    colorHome.colors = colorStore.colors;
    colorHome.onDeleteColor = colorStore.deleteColor;
    colorHome.onAddColor = colorStore.addColor;
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const colorStore = new ColorStore([
    { id: 1, name: 'red', hexcode: 'ff0000' },
    { id: 2, name: 'green', hexcode: '00ff00' },
    { id: 3, name: 'blue', hexcode: '0000ff' },
  ]);

  colorStore.subscribe(() => {
    updateColorHome(colorStore);
  });

  updateColorHome(colorStore);
});
