import store from "../store";
import converter from '../converter';

function changeGrad() {
    const currentTemp = document.querySelector('.today__grad');
    const feelsLike = document.querySelector('.feels-like');
    const firstDayTemp = document.querySelector('.first-day__grad');
    const secondDayTemp = document.querySelector('.second-day__grad');
    const thirdDayTemp = document.querySelector('.third-day__grad');
    switch(store.grad) {
        case 'far':
            currentTemp.textContent = converter.celToFar(currentTemp.textContent);
            feelsLike.textContent = feelsLike.textContent.replace(/\d+/g, converter.celToFar(feelsLike.textContent.match(/\d+/g)[0]));
            firstDayTemp.textContent = `${converter.celToFar(firstDayTemp.textContent.match(/\d+/g)[0])}°`;
            secondDayTemp.textContent = `${converter.celToFar(secondDayTemp.textContent.match(/\d+/g)[0])}°`;
            thirdDayTemp.textContent = `${converter.celToFar(thirdDayTemp.textContent.match(/\d+/g)[0])}°`;
            break;
        default:
            currentTemp.textContent = converter.farToCel(currentTemp.textContent);
            feelsLike.textContent = feelsLike.textContent.replace(/\d+/g, converter.farToCel(feelsLike.textContent.match(/\d+/g)[0]));
            firstDayTemp.textContent = `${converter.farToCel(firstDayTemp.textContent.match(/\d+/g)[0])}°`;
            secondDayTemp.textContent = `${converter.farToCel(secondDayTemp.textContent.match(/\d+/g)[0])}°`;
            thirdDayTemp.textContent = `${converter.farToCel(thirdDayTemp.textContent.match(/\d+/g)[0])}°`;
    }
}

export default changeGrad;