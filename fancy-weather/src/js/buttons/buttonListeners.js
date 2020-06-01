/* eslint-disable no-case-declarations */
import updatePage from '../updatePage';
import store from '../store';
import translate from './translate';
import updateImage from './updateImage';
import changeGrad from './changeGrad';

const buttonListeners = {
    buttonSearchCity() {
        document.querySelector('form').addEventListener('submit', (e) => {
            e.preventDefault();
            const inputValue = document.querySelector('.form-control').value;
            updatePage(inputValue);
        })
    },
    buttonUpdateImage() {
        document.querySelector('.buttons-block__refresh').addEventListener('click', async()=>{
            updateImage();
        })
    },
    buttonChangeGrad() {
        document.querySelector('.far').addEventListener('click', () => {
            if (store.grad === 'cel') {
                store.grad = 'far';
                changeGrad();
            }
        });
        document.querySelector('.cel').addEventListener('click', () => {
            if (store.grad === 'far') {
                store.grad = 'cel';
                changeGrad();
            }
        })
    },
    changeLanguage() {
        document.querySelector('.buttons-block__language').addEventListener('change', (e) => {
            switch(e.target.options.selectedIndex) {
                case 1:
                    store.lang = 'ru';
                    translate();
                    break;
                case 2:
                    store.lang = 'be';
                    translate();
                    break;
                default:
                    store.lang = 'en';
                    translate();
            }
        })
    }
}

export default buttonListeners;