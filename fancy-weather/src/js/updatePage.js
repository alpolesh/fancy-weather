import getCoordinates from './API/getCoordinates';
import getWeather from './API/getWeather';
import converter from './converter';
import {dates} from './constants/constants';
import createMap from './map/createMap';
import createDate from './createDate';
import getImage from './API/getImage';
import store from './store';
import translate from './buttons/translate';
import weatherIcons from './constants/weatherIcons';
import changeGrad from './buttons/changeGrad';

async function updatePage(city) {
    document.querySelector('.loading').style = 'display: block';
    document.querySelector('.fa-circle-o-notch').style = 'display: block';

    // change coordinates and location
    
    const {lat, lng, location} = await getCoordinates(city, store.lang);
    store.latitude = lat;
    document.querySelector('.latitude').textContent = `Latitude: ${converter.gradToMinutes(lat)}`;
    document.querySelector('.longitude').textContent = `Longitude: ${converter.gradToMinutes(lng)}`;
    document.querySelector('.city-container__city').textContent = `${location.toUpperCase()}`;

    // change map
    createMap(lng, lat);

    // change weather
    const {weatherDescription, weatherCode, weatherCodeFirst, weatherCodeSecond, weatherCodeThird, feelsLike, wind, humidity, currentGrad, tomorrowGrad, afterTomorrowGrad, in2DaysGrad, timeZone} = await getWeather(lat, lng);
    store.timeZone = timeZone;
    store.weatherCode = weatherCode;
    store.weatherCodeFirst = weatherCodeFirst;
    store.weatherCodeSecond = weatherCodeSecond;
    store.weatherCodeThird = weatherCodeThird;
    document.querySelector('.weather').textContent = `${weatherDescription}`;
    document.querySelector('.feels-like').textContent = `FEELS LIKE: ${feelsLike}`;
    document.querySelector('.wind').textContent = `WIND: ${wind}`;
    document.querySelector('.humidity').textContent = `HUMIDITY: ${humidity}`;
    document.querySelector('.today__grad').textContent = `${currentGrad}`;
    document.querySelector('.first-day__day').textContent = `${dates.dayFull[new Date().getDay() + 1]}`;
    document.querySelector('.first-day__grad').textContent = `${tomorrowGrad}`;
    document.querySelector('.second-day__day').textContent = `${dates.dayFull[new Date().getDay() + 2]}`;
    document.querySelector('.second-day__grad').textContent = `${afterTomorrowGrad}`;
    document.querySelector('.third-day__day').textContent = `${dates.dayFull[new Date().getDay() + 3]}`;
    document.querySelector('.third-day__grad').textContent = `${in2DaysGrad}`;
    // change weather icons
    document.querySelector('.today__element').innerHTML = weatherIcons[`${store.weatherCode}`];
    document.querySelector('.first-day .another-days__element').innerHTML = weatherIcons[`${store.weatherCodeFirst}`];
    document.querySelector('.second-day .another-days__element').innerHTML = weatherIcons[`${store.weatherCodeSecond}`];
    document.querySelector('.third-day .another-days__element').innerHTML = weatherIcons[`${store.weatherCodeThird}`];
    
    if (store.grad === 'far') await changeGrad();
    await translate();

    // change background image
    try {
        const imageUrl = await getImage();
        const backgroundImage = new Image();
        backgroundImage.src = imageUrl;
        backgroundImage.onload = () => {
            document.querySelector('.background').style = `background-image: url(${backgroundImage.src});`
            // stop spinning
            document.querySelector('.loading').style = 'display: none';
            document.querySelector('.fa-circle-o-notch').style = 'display: none';
        }
    } catch(err) {
        alert(err);
        document.querySelector('.loading').style = 'display: none';
        document.querySelector('.fa-circle-o-notch').style = 'display: none';
    }

    document.querySelector('.date').textContent = createDate(store.lang);
    // document.querySelector('.loading').style = 'display: none';
    // document.querySelector('.fa-circle-o-notch').style = 'display: none';
}

export default updatePage;