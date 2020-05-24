import '../css/style.css';
import '../css/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import createMap from './map/createMap';
import createDate from './createDate';

createMap();

let timerId = setInterval(createDate, 1000);






