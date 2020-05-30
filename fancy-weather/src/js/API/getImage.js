import {dates} from '../constants/constants';
import store from '../store';

async function getImage() {
    try {
        const hours = new Date().toLocaleString(`en-EN`,{hour: '2-digit', timeZone: store.timeZone, hour12: false});
        let dayTime = 'Night';
        if (hours > 6 && hours < 21) dayTime = 'Day';
        let season = dates.season[new Date().getMonth()]; 
        if (store.latitude < 0) {
            switch(season) {
                case 'Winter': 
                    season = 'Summer';
                    break;
                case 'Spring':
                    season = 'Autumn';
                    break;
                case 'Summer':
                    season = 'Winter';
                    break;
                default: 
                season = 'Spring';
            }
        }
        const url = `https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=${dayTime},${season}&client_id=Pg_2s0dgVEZ72DMSy_7ge60IktDY7rUOZWCK_sdm61c`;
        const res = await fetch(url);
        const data = await res.json();
        console.log('request for background image: ', url);
        return data.urls.regular;
    } catch(err) {
        return 'error';
    }
            
}

export default getImage;