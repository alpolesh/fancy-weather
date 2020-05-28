import updatePage from "../updatePage";


function searchCity() {
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        const inputValue = document.querySelector('.search-text').value;
        updatePage(inputValue);
    })
}

export default searchCity;