/* eslint-disable no-case-declarations */
import store from '../store';
import translate from './translate';
import updateImage from './updateImage';
import changeGrad from './changeGrad';
import searchCity from './seachCity';

const buttonListeners = {
    buttonSearchCity() {
        document.querySelector('form').addEventListener('submit', (e) => {
            e.preventDefault();
            searchCity();
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
    },
    buttonMicro() {
        const recognizer = new webkitSpeechRecognition();
        recognizer.interimResults = true;
        document.querySelector('.micro-on').addEventListener('click', () => {
            // recognizer.continuous = true;
            recognizer.start();
            
            recognizer.onspeechstart = (event) => {
                document.querySelector('.micro-indicator').style = 'display: block';
                console.log(event);
            }
            recognizer.onspeechend = (e) => {
                document.querySelector('.micro-indicator').style = 'display: none';
            }
        })
        document.querySelector('.micro-off').addEventListener('click', () => {
            recognizer.abort();
        })
    }
}

export default buttonListeners;
