import '../css/style.css';
import '../css/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import createDate from './createDate';
import updatePage from './updatePage';


setInterval(() => {
  document.querySelector('.date').textContent = createDate();
}, 1000);

updatePage('rome');




