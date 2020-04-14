import '../css/style.css';
import '../css/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store/store';
import {openMenu} from './menu/openMenu';
import {closeMenu} from './menu/closeMenu';
import cards from './cards/cards';
import Card from './cards/createCard';
import updateBoard from './board/updateBoard';
import navigationLink from './menu/navigation';

navigationLink();

updateBoard();

// open and close menu
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('burger__container')){
    openMenu();
  } else if (event.target.classList.contains('header__line')) {
    openMenu();
  } else if (event.target.classList.contains('navigation')) {
  // empty
}
  else {
    closeMenu();
  }
});






