// import {dates} from './constants/constants';
import store from './store';

function createDate(lang) {
    const currentDate = new Date();
    // const day = currentDate.getDay();
    // const date = currentDate.getDate();
    // const month = currentDate.getMonth();
    // const hours = currentDate.getHours();
    // const minutes = currentDate.getMinutes();
    // const sec = currentDate.getSeconds();
    // currentDate = `${dates.day[day]} ${date} ${dates.month[month]} ${hours<10 ? `0${hours}` : hours}:${minutes<10 ? `0${minutes}` : minutes}:${sec<10 ? `0${sec}` : sec}`;
    const update = currentDate.toLocaleString(`${lang}-${lang.toUpperCase()}`,{ weekday: 'short',  day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: store.timeZone, hour12: false}).replace(/,/g, '');
    if (store.lang === 'en') {
        return update.replace(/([А-ЯЁа-яёA-Za-z]+)\s([0-9]+)/, '$2, $1').replace(/,/g, '');
    }
    return update;
}

export default createDate;