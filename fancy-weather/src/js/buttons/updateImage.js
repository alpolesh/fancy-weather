import getImage from '../API/getImage';

async function updateImage() {
    const imageUrl = await getImage();
    const backgroundImage = new Image();
    backgroundImage.src = imageUrl;
    if (imageUrl === 'error') {
        document.querySelector('.background').style = `background-image: url(./img/bg1.jpg);`;
    } else {
        backgroundImage.onload = () => {
            document.querySelector('.background').style = `background-image: url(${backgroundImage.src});`
        }
    }
}

export default updateImage;