import { ColorHome } from './color-home.js';

window.customElements.define('color-home', ColorHome);


let colors = [ "red", "green", "blue" ];

window.addEventListener('DOMContentLoaded', () => {

  const colorHome = document.querySelector("color-home");
  colorHome.colors = colors;

  setTimeout(() => {
    colors = [ ...colors, 'yellow' ];
    colorHome.colors = colors;
  }, 2000);



});