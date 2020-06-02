import updatePage from '../updatePage';

function searchCity() {
    const inputValue = document.querySelector('.form-control').value;
    updatePage(inputValue);
}

export default searchCity;