/* eslint-disable no-case-declarations */
import store from "../store";
import translation from '../constants/translation.json';
import {dates} from '../constants/constants';
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
    switch(store.lang) {
        case 'ru':
            search.textContent = 'ПОИСК';
            latitude.textContent = latitude.textContent.replace(/[a-zA-Z]+/, 'Широта');
            longitude.textContent = longitude.textContent.replace(/[a-zA-Z]+/, 'Долгота');
            inputArea.placeholder = 'Введите город';
            const {location} = await getCoordinates(city, store.lang);
            locationContainer.textContent = `${location.toUpperCase()}`;
            firstDay.textContent = translation.day[dates.dayFull.indexOf(firstDay.textContent)].toUpperCase();
            secondDay.textContent = translation.day[dates.dayFull.indexOf(secondDay.textContent)].toUpperCase();
            thirdDay.textContent = translation.day[dates.dayFull.indexOf(thirdDay.textContent)].toUpperCase();
            break;
        default:
    }
}

export default translate;