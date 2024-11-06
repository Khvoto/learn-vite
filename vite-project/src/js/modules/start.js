export function start() {
  const start = Array.from(document.getElementsByClassName("content-1"));

  console.log(start)
  addContent(start);
}

function addContent (start) {
  let template = `
  <div class="wrapper">
    <h1 class="title"> Hej</h1>
    <p >Det här är en Template som laddas in i denna container med hjälp av JavaScript.</p>
  </div>
  `

  start[0].innerHTML = template;
}

