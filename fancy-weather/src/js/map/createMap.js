

function createMap(longitude, latitude) {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYWxwb2xlc2giLCJhIjoiY2thbGQwYm1qMDh6ejJycXdpa3k3NWN3ayJ9.TwPfqLAoUQzc47k6B_Rk0w';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [longitude, latitude],
        zoom: 8
    });
     
    const marker = new mapboxgl.Marker()
        .setLngLat([longitude, latitude])
        .addTo(map);
};

export default createMap;