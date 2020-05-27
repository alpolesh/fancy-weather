import {dates} from '../constants/constants';

async function getImage() {
    const hours = new Date().getHours();
    let dayTime = 'Night';
    if (hours > 6 && hours < 21) dayTime = 'Day';
    const season = dates.season[new Date().getMonth()]; 
    const url = `https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query={${season}, ${dayTime}}&client_id=Pg_2s0dgVEZ72DMSy_7ge60IktDY7rUOZWCK_sdm61c`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.alt_description);
    
    return data.urls.regular;    
}

export default getImage;