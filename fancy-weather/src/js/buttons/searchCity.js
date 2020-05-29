import updatePage from "../updatePage";


function searchCity() {
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        const inputValue = document.querySelector('.form-control').value;
        updatePage(inputValue);
    })
}

export default searchCity;