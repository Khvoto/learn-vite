export function info() {
  const info = document.getElementById("info");
  addContent(info);
}

function addContent (info) {
  let template = `
  <div id="info-inner" class="wrapper">
    <h1 class="title"> Hej</h1>
    <p >Det här är en Template som laddas in i denna container med hjälp av JavaScript.</p>

    <ol>
      <li>Fetches random images from internet, and displays them as cards.</li>
      
    </ol>
  </div>
  `

  info.innerHTML = template;
}
