import { ColorHome } from './color-home.js';

window.customElements.define('color-home', ColorHome);


let colors = [ "red", "green", "blue" ];

const deleteColor = color => {
  colors = colors.filter(c => c !== color);
  const colorHome = document.querySelector("color-home");
  colorHome.colors = colors;
};

window.addEventListener('DOMContentLoaded', () => {

  const colorHome = document.querySelector("color-home");
  colorHome.colors = colors;
  colorHome.onDeleteColor = deleteColor;

  // setTimeout(() => {
  //   // copying the array, and adding a new item on the end of the copy
  //   colors = [ ...colors, 'yellow' ]; 
  //   // add an item to the end of the array
  //   // colors.push('yellow');
  //   colorHome.colors = colors;
  //   colorHome.colors = colors;
  //   colorHome.colors = colors;
  //   colorHome.colors = colors;
  // }, 2000);

});