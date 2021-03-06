import getGeoLocation from './getGeoLocation';

async function getCoordinates(city, lang) {
    let coord;
    if (arguments.length === 0 || city === undefined) {
        coord = await getGeoLocation();
    }
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${!!city === true ? city : `${coord.lat}+${coord.lng}`}&language=${lang}&key=fea627d3cffd4ef29a04ebe0aca34cc4&pretty=1&no_annotations=1`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data)
    return {
        location: `${data.results[0].components.city || data.results[0].components.town || data.results[0].components.county || data.results[0].components.village || data.results[0].components.state}, ${data.results[0].components.country}`,
        lat: data.results[0].geometry.lat,
        lng: data.results[0].geometry.lng,
    };
}

export default getCoordinates;

