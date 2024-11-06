export function arrowClick() {
  const content = document.getElementsByClassName('content')
  console.log(content);

  leftArrowClick(content);
  rightArrowClick(content);
}

function leftArrowClick(content) {
  const leftArrow = document.getElementsByClassName('left-arrow');
  console.log(leftArrow);
}

function rightArrowClick(content) {
  const rightArrow = document.getElementsByClassName('right-arrow');
  console.log(rightArrow);
}