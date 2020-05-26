

const converter = {
    gradToMinutes(coord) {
        const grad = Math.floor(coord);
        const minutes = Math.round((coord - grad) * 60);
        return `${grad}°${minutes}'`
    }
}

export default converter;