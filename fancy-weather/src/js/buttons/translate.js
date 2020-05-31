/* eslint-disable no-case-declarations */
import store from "../store";
import translationRus from '../constants/translationRus.json';
import translationBel from '../constants/translationBel.json';
import translationEng from '../constants/translationEng.json';
import getCoordinates from '../API/getCoordinates';

async function translate() {
    const search = document.querySelector('.btn-outline-secondary');
    const latitude = document.querySelector('.latitude');
    const longitude = document.querySelector('.longitude');
    const inputArea = document.querySelector('.form-control');
    const locationContainer = document.querySelector('.city-container__city');
    const city = `${locationContainer.textContent.split(',')[0]}`;
    const firstDay = document.querySelector('.first-day__day');
    const secondDay = document.querySelector('.second-day__day');
    const thirdDay = document.querySelector('.third-day__day');
    const weatherDescription = document.querySelector('.weather');
    const feelsLike = document.querySelector('.feels-like');
    const wind = document.querySelector('.wind');
    const humidity = document.querySelector('.humidity');
    const {location} = await getCoordinates(city, store.lang);

    switch(store.lang) {
        case 'ru':
            search.textContent = 'ПОИСК';
            latitude.textContent = latitude.textContent.replace(/[a-zA-Zа-яА-Я]+/, 'Широта');
            longitude.textContent = longitude.textContent.replace(/[a-zA-Zа-яА-Я]+/, 'Долгота');
            inputArea.placeholder = 'Введите город';
            locationContainer.textContent = `${location.toUpperCase()}`;
            firstDay.textContent = translationRus.day[new Date().getDay() + 1].toUpperCase();
            secondDay.textContent = translationRus.day[new Date().getDay() + 2].toUpperCase();
            thirdDay.textContent = translationRus.day[new Date().getDay() + 3].toUpperCase();
            weatherDescription.textContent = translationRus.weather[`${store.weatherCode}`].toUpperCase();
            feelsLike.textContent = feelsLike.textContent.replace(/.+(?=:)/g, 'Ощущается как').toUpperCase();
            wind.textContent = wind.textContent.replace(/.+(?=:)/g, 'Ветер').toUpperCase();
            wind.textContent = wind.textContent.replace(/(?<=\s)\D+/g, 'м/с');
            humidity.textContent = humidity.textContent.replace(/.+(?=:)/g, 'Влажность').toUpperCase();
            break;
        case 'be':
            search.textContent = 'ПОШУК';
            latitude.textContent = latitude.textContent.replace(/[a-zA-Zа-яА-Яў]+/, 'Шырата');
            longitude.textContent = longitude.textContent.replace(/[a-zA-Zа-яА-Яў]+/, 'Даўгата');
            inputArea.placeholder = 'Увядзiце горад';
            locationContainer.textContent = `${location.toUpperCase()}`;
            firstDay.textContent = translationBel.day[new Date().getDay() + 1].toUpperCase();
            secondDay.textContent = translationBel.day[new Date().getDay() + 2].toUpperCase();
            thirdDay.textContent = translationBel.day[new Date().getDay() + 3].toUpperCase();
            weatherDescription.textContent = translationBel.weather[`${store.weatherCode}`].toUpperCase();
            feelsLike.textContent = feelsLike.textContent.replace(/.+(?=:)/g, 'Адчуваецца як').toUpperCase();
            wind.textContent = wind.textContent.replace(/.+(?=:)/g, 'Вецер').toUpperCase();
            wind.textContent = wind.textContent.replace(/(?<=\s)\D+/g, 'м/с');
            humidity.textContent = humidity.textContent.replace(/.+(?=:)/g, 'Вiльготнасць').toUpperCase();
            break;
        default:
            search.textContent = 'SEARCH';
            latitude.textContent = latitude.textContent.replace(/[a-zA-Zа-яА-Яў]+/, 'Latitude');
            longitude.textContent = longitude.textContent.replace(/[a-zA-Zа-яА-Яў]+/, 'Longitude');
            inputArea.placeholder = 'Enter city';
            locationContainer.textContent = `${location.toUpperCase()}`;
            firstDay.textContent = translationEng.day[new Date().getDay() + 1].toUpperCase();
            secondDay.textContent = translationEng.day[new Date().getDay() + 2].toUpperCase();
            thirdDay.textContent = translationEng.day[new Date().getDay() + 3].toUpperCase();
            weatherDescription.textContent = translationEng.weather[`${store.weatherCode}`].toUpperCase();
            feelsLike.textContent = feelsLike.textContent.replace(/.+(?=:)/g, 'Feels like').toUpperCase();
            wind.textContent = wind.textContent.replace(/.+(?=:)/g, 'Wind').toUpperCase();
            wind.textContent = wind.textContent.replace(/(?<=\s)\D+/g, 'm/s');
            humidity.textContent = humidity.textContent.replace(/.+(?=:)/g, 'Humidity').toUpperCase();
    }
}

export default translate;