import '../css/style.css';
import '../css/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import createDate from './createDate';
import updatePage from './updatePage';
import store from './store';
import converter from './converter';
import buttonListeners from './buttons/buttonListeners';

setInterval(() => {
  document.querySelector('.date').textContent = createDate(store.lang);
}, 1000);

updatePage();
buttonListeners.searchCity();
buttonListeners.updateImage();
buttonListeners.changeGrad();
buttonListeners.changeLanguage();
console.log(converter.celToFar(14))



