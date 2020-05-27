import '../css/style.css';
import '../css/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import createDate from './createDate';
import updatePage from './updatePage';
import store from './store';

setInterval(() => {
  document.querySelector('.date').textContent = createDate(store.lang);
}, 1000);

updatePage('minsk');




