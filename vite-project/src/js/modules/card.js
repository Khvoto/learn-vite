export function card() {
  const cards = document.getElementsByClassName('card');

  openImage(cards)
}

function openImage(cards) {
  for(let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', () =>{
      console.log('clicked')
    })
  }
}