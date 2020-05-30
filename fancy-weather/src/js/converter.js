

const converter = {
    gradToMinutes(coord) {
        const grad = Math.floor(coord);
        const minutes = Math.round((coord - grad) * 60);
        return `${grad}°${minutes}'`
    },
    celToFar(grad) {
        const result = Math.round(grad * 1.8 + 32);
        return result;
    },
    farToCel(grad) {
        const result = Math.round((grad - 32) / 1.8);
        return result;
    }
}

export default converter;