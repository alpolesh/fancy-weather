import getGeoLocation from './getGeoLocation';

async function getCoordinates(city) {
    if (arguments.length === 0) {
        // getGeoLocation().then((value) => console.log(value)) ;
        return;
    }
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=fea627d3cffd4ef29a04ebe0aca34cc4&pretty=1&no_annotations=1`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
}

export default getCoordinates;