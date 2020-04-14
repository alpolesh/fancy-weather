import store from '../store/store';
import updateBoard from '../board/updateBoard';

class Card {
    constructor({word, translation, image, audioSrc}, categoryName) {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card', 'text-white', 'bg-info');
        this.cardElement = cardElement;

        this.isFlipped = false;

        this.initialPosition =  
        `<img src="${image}" class="card-img-top rounded-circle card-front" alt="${categoryName}">
        <div class="card-body">
          <p class="card-text text-front">${categoryName || word}</p>
        </div>
        ${categoryName ? '' : '<img src="./img/rotate.svg" class="rotate" alt="rotate"></img>'}
        `

        this.flipped = {
          image: `<img src="${image}" class="card-img-top rounded-circle card-back" alt="${categoryName}">`,
          text: `<p class="card-text text-back">${translation}</p>`
        }
        
        this.makeFlip = () => {
          if (!this.isFlipped) {
            this.cardElement.insertAdjacentHTML('afterbegin', this.flipped.image);
            this.cardElement.querySelector('.card-body').insertAdjacentHTML('afterbegin', this.flipped.text);
          } else {
            this.cardElement.innerHTML = this.initialPosition;
          }
          // this.isFlipped = !this.isFlipped;
        }
        this.cardElement.innerHTML = this.initialPosition;
        this.makeFlip();
        this.cardElement.addEventListener("click", (e) => {
          if (store.currentRoute === 'Main Page') {
            store.currentRoute = categoryName;
            updateBoard();
          } else if (store.mode === 'train') {
            const audio = new Audio();
            audio.src = audioSrc;
            audio.play();
          }
          if (e.target.classList.contains('rotate')) {
            this.cardElement.classList.add('flip');
            this.cardElement.classList.remove('flip-two');
            this.cardElement.addEventListener('mouseleave', (e) => {
              this.cardElement.classList.add('flip-two');
              this.cardElement.classList.remove('flip');
            })
            
          }
        });
    }
}

export default Card;

