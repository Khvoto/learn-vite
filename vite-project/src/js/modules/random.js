import { imageCardCreator } from './imageCardCreator';

export function random() {
  const template = `
    <div id="random-wrapper">
      <h2 clasS="title" >Random bilder</h2>
      <div id="random-images" class="image-wrapper"></div>
    </div>
  `

  const target = document.getElementById('random')

  target.innerHTML += template;

  imageCardCreator('random-images');
}