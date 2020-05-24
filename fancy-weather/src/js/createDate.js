import {dates} from './constants';

function createDate() {
    let currentDate = new Date();
    let day = currentDate.getDay();
    let date = currentDate.getDate();
    let month = currentDate.getMonth();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let sec = currentDate.getSeconds();
    currentDate = `${dates.day[day]} ${date} ${dates.month[month]} ${hours<10 ? '0'+hours : hours}:${minutes<10 ? '0'+minutes : minutes}:${sec<10 ? '0'+sec : sec}`;
    document.querySelector('.date').textContent = currentDate;
}

export default createDate;