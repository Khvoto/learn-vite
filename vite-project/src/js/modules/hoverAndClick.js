export function hoverAndClick() {
  let squares = document.getElementsByClassName("square");
  let content = document.getElementsByClassName("content");
  let overlay = document.getElementsByClassName('overlay');

  console.log(overlay);

  closeContent(content, overlay);
  addArrows(squares, content);
  openSquare(squares, content, overlay);
}

function openSquare(squares, content, overlay) {
  for (let i = 0; i < squares.length; i++) {
    const contentContainer = Array.from(squares[i].classList)

    squares[i].addEventListener("mouseover", () => {
      squares[i].classList.add("focus");
      if (i > 0 && !contentContainer.includes("content")) {
        squares[i - 1].classList.add("focus-sibling");
      }
      if (i < squares.length - 1 && !contentContainer.includes('content')) {
        squares[i + 1].classList.add("focus-sibling");
      }
    });

    squares[i].addEventListener("mouseleave", () => {
      squares[i].classList.remove("focus");
      if (i > 0) {
        squares[i - 1].classList.remove("focus-sibling");
      }
      if (i < squares.length - 1) {
        squares[i + 1].classList.remove("focus-sibling");
      }
    });

    squares[i].addEventListener("click", () => {
      content[i].classList.toggle("hidden");
      content[i].classList.toggle("active");
      overlay[0].classList.toggle('hidden');
    });

    content[i].addEventListener("click", () => {
      content[i].classList.toggle("hidden");
      content[i].classList.toggle("active");
      overlay[0].classList.toggle('hidden')
    });
  }
}

function closeContent(content, overlay) {
  overlay[0].addEventListener('click', () => {
    for(let i = 0; i < content.length; i++) {
      const list = Array.from(content[i].classList);
      if(list.includes('active')) {
        content[i].classList.remove('active');
        content[i].classList.add("hidden");
      }

    }
  });
}

function addArrows(squares, content) {
  const leftArrow = `
    <div class=left arrow>
      <span>&#8990</span>
    </div>
  `;
    const rightArrow = `
    <div class=left arrow>
      <span>&#8991</span>
    </div>
  `;

  for(let i = 0; i < content.length; i++) {
    content[i].innerHTML += leftArrow + rightArrow;
  }
}
