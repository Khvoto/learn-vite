export function imageCardCreator(target) {
  getRandomThumbnails(target, 30)
  //getRandomImages(target)
}

/**
 * The following code is not in use, as I cant scale the fetched images, but it was a good experience to work with fetching.
 * 
 * Getting an array of lorem images, where each image object follows this structure:
 * [
 *  {
 *   "id": "0",
 *   "author": "Alejandro Escamilla",
 *   "width": 5616,
 *   "height": 3744,
 *   "url": "https://unsplash.com/...",
 *   "download_url": "https://picsum.photos/..."
 *  }
  ]
 */
async function getRandomImages(target) {
  try {
    const response = await fetch('https://picsum.photos/v2/list')
      if( !response.ok){
        throw new Error(' Fan också')
      }
    ((response) => response.json())
    .then((data) => {
      for(let id=0; id < data.length; id++) {
        let test = data[id].download_url.split('/');
        test[5] = 300;
        test[6]= 200; 
        createCard(id, data[id].download_url, target)
      }
    });
    } catch(error) {console.error(`Attans, ${error}`) }
  }
  


function getRandomThumbnails (target, amount) {
  for (let i = 0; i < amount; i++) {
    const random = `https://picsum.photos/200/300?random${i}`;
    createCard(i, random, target)
  }
}

function createCard(id, info, target) {
  const targetElement = document.getElementById(target);  
    const template = `
      <div id="image-${id}" class="card image-card">
        <div class="image-container">
          <img class="image" src="${info}">
        </div
      </div>
    `;

    targetElement.innerHTML += template
}


