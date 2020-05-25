

function createMap() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYWxwb2xlc2giLCJhIjoiY2thbGQwYm1qMDh6ejJycXdpa3k3NWN3ayJ9.TwPfqLAoUQzc47k6B_Rk0w';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [12.550343, 55.665957],
        zoom: 8
    });
     
    const marker = new mapboxgl.Marker()
        .setLngLat([12.550343, 55.665957])
        .addTo(map);
};

export default createMap;