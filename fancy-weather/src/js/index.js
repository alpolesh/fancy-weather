import '../css/style.css';
import '../css/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import createDate from './createDate';
import updatePage from './updatePage';
import store from './store';
import buttonListeners from './buttons/buttonListeners';

if (localStorage.getItem('lang')) {
  store.lang = localStorage.getItem('lang');
  switch(store.lang) {
    case 'ru':
      document.querySelector('select').options.selectedIndex = 1;
      break;
    case 'be':
      document.querySelector('select').options.selectedIndex = 2;
      break;
    default:
      document.querySelector('select').options.selectedIndex = 0;
  }
  
} else store.lang = 'en';

if (localStorage.getItem('grad')) {
  store.grad = localStorage.getItem('grad');
  if (store.grad === 'far') {
    document.querySelector('.cel').classList.remove('active');
    document.querySelector('.far').classList.add('active');
  }
} else store.grad = 'cel';

setInterval(() => {
  document.querySelector('.date').textContent = createDate(store.lang);
}, 1000);

updatePage();
buttonListeners.buttonSearchCity();
buttonListeners.buttonUpdateImage();
buttonListeners.buttonChangeGrad();
buttonListeners.changeLanguage();
buttonListeners.buttonMicro();
buttonListeners.buttonListen();


