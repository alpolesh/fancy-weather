
async function getGeoLocation() {
    let latitude;
    let longitude;
    const promis = new Promise((resolve) => {
        navigator.geolocation.getCurrentPosition((pos) => {
            const crd = pos.coords;
            latitude = crd.latitude;
            longitude = crd.longitude;
            resolve();
        });
    }) 
    await promis;
    return {"lat": latitude, "lng": longitude};
}

export default getGeoLocation;
    