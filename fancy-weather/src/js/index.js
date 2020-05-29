import '../css/style.css';
import '../css/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import createDate from './createDate';
import updatePage from './updatePage';
import store from './store';
import searchCity from './buttons/searchCity';
import updateImage from './buttons/updateImage';

setInterval(() => {
  document.querySelector('.date').textContent = createDate(store.lang);
}, 1000);

updatePage();
searchCity();
updateImage();



