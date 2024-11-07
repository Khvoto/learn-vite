export function arrowClick() {
  const content = document.getElementsByClassName('content')
  const overlay = document.getElementsByClassName('overlay')
  leftArrowClick(content, overlay);
  rightArrowClick(content, overlay);
}

function leftArrowClick(content, overlay) {
  const leftArrow = document.getElementsByClassName('left-arrow');
  for(let i = 0; i < content.length; i++) {
    leftArrow[i].addEventListener('click', () => {
      overlay[0].classList.add('hidden');
      content[i - 1].classList.add('active');
      content[i - 1].classList.remove('hidden');
      const leftContent = Array.from(content[i - 1].classList);
      console.log(leftContent)
      if(leftContent.includes('active')) {
        overlay[0].classList.remove('hidden');
      }
    });

    if( i === 0) {
      leftArrow[i].classList.add('hidden');
    }
  }
}

function rightArrowClick(content, overlay) {
  const rightArrow = document.getElementsByClassName('right-arrow');
    for (let i = 0; i < content.length; i++) {
      rightArrow[i].addEventListener('click', () => {
        content[(i+1)].classList.add('active');
        content[i + 1].classList.remove('hidden');
        const rightContent = Array.from(content[i + 1].classList);
        console.log(rightContent);
        if (rightContent.includes('active')) {
          overlay[0].classList.remove('hidden');
        }

      });
      if (i === rightArrow.length -1) {
        rightArrow[i].classList.add('hidden');
      }
    }
}