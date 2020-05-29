import getImage from "../API/getImage";

function updateImage() {
    document.querySelector('.buttons-block__refresh').addEventListener('click', async()=>{
        try {
            const imageUrl = await getImage();
            const backgroundImage = new Image();
            backgroundImage.src = imageUrl;
            backgroundImage.onload = () => {
                document.querySelector('.background').style = `background-image: url(${backgroundImage.src});`
            }
        } catch(err) {
            alert(err);
        }
    })
}

export default updateImage;
