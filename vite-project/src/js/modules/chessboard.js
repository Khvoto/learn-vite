export class MyLightDom extends HTMLElement {
  constructor() {
    super();
    this.board = document.querySelector('my-light-dom');
  }
  connectedCallback() {
    this.render();
  }

  render() {
    this.boardFunctionality();
    this.clearButton();
    this.fillButton();
  }

  boardFunctionality() {
    const chessboard = this.board.querySelectorAll('tr');
    let rowNmbr = 0;
    // console.log("trans:", this.translator(1));
    chessboard.forEach((tr) => {
      const row = tr;
      let colNmbr = 1;
      // console.log("Row:", tr);
      row.querySelectorAll('td').forEach((square) => {
        // console.log("colNmbr:", colNmbr);
        // console.log(square);
        let colLtr = this.translator(colNmbr);
        const set = colLtr + '' + rowNmbr;
        square.addEventListener('click', () => {
          // console.log("Square:", set);
          if (square.innerHTML == '') {
            square.innerHTML = set;
          } else {
            square.innerHTML = '';
          }
        });
        colNmbr++;
      });
      rowNmbr++;
    });
  }

  fillButton() {
    const btn = (this.button = document.querySelector('#fill-btn'));
    btn.addEventListener('click', () => {
      const chessboard = this.board.querySelectorAll('tr');
      let rowNmbr = 0;
      chessboard.forEach((tr) => {
        const row = tr;
        let colNmbr = 1;
        row.querySelectorAll('td').forEach((square) => {
          let colLtr = this.translator(colNmbr);
          const set = colLtr + '' + rowNmbr;
          square.innerHTML = set;
          colNmbr++;
        });
        rowNmbr++;
      });
    });
  }

  clearButton() {
    const btn = document.querySelector('#clear-btn');
    btn.addEventListener('click', () => {
      const chessboard = this.board.querySelectorAll('tr');
      chessboard.forEach((tr) => {
        const row = tr;
        row.querySelectorAll('td').forEach((square) => {
          square.innerHTML = '';
        });
      });
    });
  }

  translator(colNmbr) {
    let value;

    switch (colNmbr) {
      case 1:
        value = 'A';
        break;
      case 2:
        value = 'B';
        break;
      case 3:
        value = 'C';
        break;
      case 4:
        value = 'D';
        break;
      case 5:
        value = 'E';
        break;
      case 6:
        value = 'F';
        break;
      case 7:
        value = 'G';
        break;
      case 8:
        value = 'H';
        break;
      case 'Default':
        value = 'Error';
    }

    return value;
  }
}

customElements.define('my-light-dom', MyLightDom);
