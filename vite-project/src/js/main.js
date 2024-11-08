import '../scss/main.scss';
import { info } from './modules/info';
import { hoverAndClick } from './modules/hoverAndClick';
import { checkActiveState } from './modules/checkActiveState';
import { random } from './modules/random';
import { card } from './modules/card';

const app = document.querySelector('#app');
let menu = '';
let content = '';
let title = ['', 'Info', 'Random', 'Miniatures', 'Wedding', 'Peru', 'Björn', 'Abisko']

for (let i = 1; i < 8; i++)  {
  const lowerCaseTitle = title[i].toLowerCase();
  const menuTemplate = `<div class="square square-${i}"> <h3>${title[i]}</h3></div>`;
  const contentTemplate = `<div class="square square-${i} hidden content content-${i}" id="${lowerCaseTitle}"></div>`;

  menu += menuTemplate
  content += contentTemplate
}

app.innerHTML = `
<div id="app-inner" class="wrapper">${menu}
${content}</div>

`;


/**
 * Modules to be run once
 */
info();
random();
hoverAndClick();
card();

/** 
 * Intervall
 */
setInterval ( () => {
  checkActiveState();
}, 100 );