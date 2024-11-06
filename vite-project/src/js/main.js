import '../scss/main.scss';
import { start } from './modules/start';
import { hoverAndClick } from './modules/hoverAndClick';

const app = document.querySelector('#app');
let menu = '';
let content = '';
let title = ['', 'Start', 'About', 'Contact', 'Gallery', 'Peru', 'Name', 'Abisko']

for (let i = 1; i < 8; i++)  {
  const lowerCaseTitle = title[i].toLowerCase();
  const menuTemplate = `<div class="square square-${i}"> <h3>${title[i]}</h3></div>`;
  const contentTemplate = `<div class="square square-${i} hidden content content-${i} ${lowerCaseTitle}"> <h3>${title[i]}</h3></div>`;

  menu += menuTemplate
  content += contentTemplate
}

app.innerHTML = `
<div class="wrapper">${menu}
${content}</div>

`;

start();
hoverAndClick();
