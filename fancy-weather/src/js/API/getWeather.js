import getCoordinates from './getCoordinates';

async function getWeather() {
    const url = 'https://api.weatherbit.io/v2.0/forecast/daily?&lat=53.902334&lon=27.5618791&days=4&units=M&lang=en&key=3319e5f0afe74f98bfaec789af49d05d';
    const res = await fetch(url);
    const data = await res.json();
    console.log(data)
}

export default getWeather;