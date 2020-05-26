import getCoordinates from './API/getCoordinates';
import getWeather from './API/getWeather';
import converter from './converter';
import {dates} from './constants/constants';
import createMap from './map/createMap';
import createDate from './createDate';

async function updatePage(city) {
    document.querySelector('.loading').style = 'display: block';
    document.querySelector('.fa-circle-o-notch').style = 'display: block';

    const {lat, lng, location} = await getCoordinates(city);
    // change coordinates and location
    document.querySelector('.latitude').textContent = `Latitude: ${converter.gradToMinutes(lat)}`;
    document.querySelector('.longitude').textContent = `Longitude: ${converter.gradToMinutes(lng)}`;
    document.querySelector('.city-container__city').textContent = `${location.toUpperCase()}`;

    // change map
    createMap(lng, lat);

    const {weatherDescription, feelsLike, wind, humidity, currentGrad, tomorrowGrad, afterTomorrowGrad, in2DaysGrad} = await getWeather(lat, lng);
    // change weather
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

    document.querySelector('.date').textContent = createDate();
    document.querySelector('.loading').style = 'display: none';
    document.querySelector('.fa-circle-o-notch').style = 'display: none';
}

export default updatePage;