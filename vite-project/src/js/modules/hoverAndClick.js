import { arrowClick } from './arrows';

/**
 * Dependencies 
 *  arrows.js - Gives arrow buttons their functionality.
 */

export function hoverAndClick() {
  const squares = document.getElementsByClassName('square');
  const content = document.getElementsByClassName('content');
  const overlay = document.getElementsByClassName('overlay');

  closeContent(content, overlay);
  addArrows(content);
  openSquare(squares, content, overlay);
}

function openSquare(squares, content, overlay) {

  for (let i = 0; i < squares.length; i++) {
    const contentContainer = Array.from(squares[i].classList);

    squares[i].addEventListener('mouseover', () => {
      squares[i].classList.add('focus');
      if (i > 0 && !contentContainer.includes('content')) {
        squares[i - 1].classList.add('focus-sibling');
      }
      if (i < squares.length - 1 && !contentContainer.includes('content')) {
        squares[i + 1].classList.add('focus-sibling');
      }
    });

    squares[i].addEventListener('mouseleave', () => {
      squares[i].classList.remove('focus');
      if (i > 0) {
        squares[i - 1].classList.remove('focus-sibling');
      }
      if (i < squares.length - 1) {
        squares[i + 1].classList.remove('focus-sibling');
      }
    });

    squares[i].addEventListener('click', () => {
      const menu = Array.from(squares[i].classList);
      content[i].classList.toggle('hidden');
      content[i].classList.toggle('active');

      // Make sure not to add overlay while targeting content squares.
      if (!menu.includes('content')) {
        overlay[0].classList.add('hidden');
      }
    });

    content[i].addEventListener('click', () => {
      const overlayList = Array.from(overlay[0].classList);
      console.log('Overlay: ', overlayList);
      content[i].classList.toggle('hidden');
      content[i].classList.toggle('active');
      if(!overlayList.includes('hidden'))
        console.log('hidden')
        overlay[0].classList.add('hidden');
    });
  }
}

function closeContent(content, overlay) {
  overlay[0].addEventListener('click', () => {
    for (let i = 0; i < content.length; i++) {
      const list = Array.from(content[i].classList);
      if (list.includes('active')) {
        content[i].classList.remove('active');
        content[i].classList.add('hidden');
      }
    }
  });
}

function addArrows(content) {
  const leftArrow = `
    <div class="left arrow left-arrow">
      <span>&#8990</span>
    </div>
  `;
  const rightArrow = `
    <div class="right arrow right-arrow">
      <span>&#8991</span>
    </div>
  `;

  for (let i = 0; i < content.length; i++) {
    content[i].innerHTML += leftArrow + rightArrow;
  }
  arrowClick();

}

