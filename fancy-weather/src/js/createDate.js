import {dates} from './constants/constants';

function createDate() {
    let currentDate = new Date();
    const day = currentDate.getDay();
    const date = currentDate.getDate();
    const month = currentDate.getMonth();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const sec = currentDate.getSeconds();
    currentDate = `${dates.day[day]} ${date} ${dates.month[month]} ${hours<10 ? `0${hours}` : hours}:${minutes<10 ? `0${minutes}` : minutes}:${sec<10 ? `0${sec}` : sec}`;
    return currentDate;
}

export default createDate;