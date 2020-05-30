/* eslint-disable no-case-declarations */
import updatePage from '../updatePage';
import getImage from '../API/getImage'
import store from '../store';
import converter from '../converter';
import getCoordinates from '../API/getCoordinates';
import translation from '../constants/translation.json';
import { dates } from '../constants/constants';

const buttonListeners = {
    searchCity() {
        document.querySelector('form').addEventListener('submit', (e) => {
            e.preventDefault();
            const inputValue = document.querySelector('.form-control').value;
            updatePage(inputValue);
        })
    },
    updateImage() {
        document.querySelector('.buttons-block__refresh').addEventListener('click', async()=>{
            const imageUrl = await getImage();
            const backgroundImage = new Image();
            backgroundImage.src = imageUrl;
            if (imageUrl === 'error') {
                document.querySelector('.background').style = `background-image: url(./img/bg1.jpg);`;
            } else {
                backgroundImage.onload = () => {
                    document.querySelector('.background').style = `background-image: url(${backgroundImage.src});`
                }
            }
        })
    },
    changeGrad() {
        const currentTemp = document.querySelector('.today__grad');
        const feelsLike = document.querySelector('.feels-like');
        const firstDayTemp = document.querySelector('.first-day__grad');
        const secondDayTemp = document.querySelector('.second-day__grad');
        const thirdDayTemp = document.querySelector('.third-day__grad');

        document.querySelector('.far').addEventListener('click', () => {
            if (store.grad === 'cel') {
                store.grad = 'far';
                currentTemp.textContent = converter.celToFar(currentTemp.textContent);
                feelsLike.textContent = feelsLike.textContent.replace(/\d+/g, converter.celToFar(feelsLike.textContent.match(/\d+/g)[0]));
                firstDayTemp.textContent = `${converter.celToFar(firstDayTemp.textContent.match(/\d+/g)[0])}°`;
                secondDayTemp.textContent = `${converter.celToFar(secondDayTemp.textContent.match(/\d+/g)[0])}°`;
                thirdDayTemp.textContent = `${converter.celToFar(thirdDayTemp.textContent.match(/\d+/g)[0])}°`;
            }
        });
        document.querySelector('.cel').addEventListener('click', () => {
            if (store.grad === 'far') {
                store.grad = 'cel';
                currentTemp.textContent = converter.farToCel(currentTemp.textContent);
                feelsLike.textContent = feelsLike.textContent.replace(/\d+/g, converter.farToCel(feelsLike.textContent.match(/\d+/g)[0]));
                firstDayTemp.textContent = `${converter.farToCel(firstDayTemp.textContent.match(/\d+/g)[0])}°`;
                secondDayTemp.textContent = `${converter.farToCel(secondDayTemp.textContent.match(/\d+/g)[0])}°`;
                thirdDayTemp.textContent = `${converter.farToCel(thirdDayTemp.textContent.match(/\d+/g)[0])}°`;
            }
        })
    },
    changeLanguage() {
        document.querySelector('.buttons-block__language').addEventListener('change', async (e) => {
            const search = document.querySelector('.btn-outline-secondary');
            const latitude = document.querySelector('.latitude');
            const longitude = document.querySelector('.longitude');
            const inputArea = document.querySelector('.form-control');
            const locationContainer = document.querySelector('.city-container__city');
            const city = `${locationContainer.textContent.split(',')[0]}`;
            const firstDay = document.querySelector('.first-day__day');
            const secondDay = document.querySelector('.second-day__day');
            const thirdDay = document.querySelector('.third-day__day');
            switch(e.target.options.selectedIndex) {
                case 1:
                    store.lang = 'ru';
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
        })
    }
}

export default buttonListeners;