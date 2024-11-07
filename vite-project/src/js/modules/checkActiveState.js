export function checkActiveState() {
  const content = document.getElementsByClassName('content');
  const overlay = document.getElementById('overlay');
  let active = [];

  for (let i = 0; i < content.length; i++) {
    const contentList = Array.from(content[i].classList);
    active.push(checker(contentList))
  }

  if (active.includes(true)) {
    overlay.classList.remove('hidden');
  } else {
    overlay.classList.add('hidden');
  }
}

function checker(contentList) {
  return contentList.includes('active');
}
