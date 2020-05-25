import '../css/style.css';
import '../css/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import createMap from './map/createMap';
import createDate from './createDate';
import getCoordinates from './API/getCoordinates';
import getGeoLocation from './API/getGeoLocation';

createMap();

setInterval(createDate, 1000);

const ap = getGeoLocation().then(res => res)
console.log(ap)


