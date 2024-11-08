export function arrowClick() {
  const content = document.getElementsByClassName('content')
  const overlay = document.getElementsByClassName('overlay')
  leftArrowClick(content, overlay);
  rightArrowClick(content, overlay);
}

function leftArrowClick(content) {
  const leftArrow = document.getElementsByClassName('left-arrow');
  for(let i = 0; i < content.length; i++) {
    leftArrow[i].addEventListener('click', () => {
      content[i - 1].classList.add('active');
      content[i - 1].classList.remove('hidden');
      content[i].classList.add('hidden');
      content[i].classList.remove('active');
    });

    if( i === 0) {
      leftArrow[i].classList.add('hidden');
    }
  }
}

function rightArrowClick(content) {
  const rightArrow = document.getElementsByClassName('right-arrow');
    for (let i = 0; i < content.length; i++) {
      rightArrow[i].addEventListener('click', () => {
        content[(i+1)].classList.add('active');
        content[i + 1].classList.remove('hidden');
        content[i].classList.add('hidden')
        content[i].classList.remove('active')
      });
      if (i === rightArrow.length -1) {
        rightArrow[i].classList.add('hidden');
      }
    }
}