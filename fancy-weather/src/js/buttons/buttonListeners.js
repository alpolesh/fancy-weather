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
            localStorage.setItem('grad', store.grad);
        });
        document.querySelector('.cel').addEventListener('click', () => {
            if (store.grad === 'far') {
                store.grad = 'cel';
                changeGrad();
            }
            localStorage.setItem('grad', store.grad);
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
            localStorage.setItem('lang', store.lang);
        })
    },
    buttonMicro() {
        const recognizer = new webkitSpeechRecognition();
        recognizer.interimResults = true;
        document.querySelector('.micro-on').addEventListener('click', () => {
            // recognizer.continuous = true;
            store.speechRec = true;
            recognizer.start();
            
            recognizer.onspeechstart = (event) => {
                document.querySelector('.micro-indicator').style = 'display: block';
                // console.log(event);
            }
            recognizer.onspeechend = () => {
                document.querySelector('.micro-indicator').style = 'display: none';
            }
            recognizer.onend = () => {
                if (store.speechRec) {
                    recognizer.start();
                } else recognizer.abort();
            }
        });
        document.querySelector('.micro-off').addEventListener('click', () => {
            recognizer.abort();
            store.speechRec = false;
        });
        document.querySelector('.fa-microphone').addEventListener('click', () => {
            if (!store.speechRec) {
                recognizer.start();
            }
            store.voiceSearch = true;
            recognizer.onresult = (event) => {
                const result = event.results[event.resultIndex];
                if (result.isFinal && store.voiceSearch) {
                    // alert(`Вы сказали: ${  result[0].transcript}`);
                    document.querySelector('.form-control').value = '';
                    document.querySelector('.form-control').value = result[0].transcript;
                    searchCity();
                    document.querySelector('.form-control').value = '';
                    store.voiceSearch = false;
                } 
            };
        })
    },
    buttonListen() {
        document.querySelector('.buttons-block__listen').addEventListener('click', (e) => {
            console.log(e.target)
            const msg = new SpeechSynthesisUtterance();
            let voicesAll = [];
            const voicesActual = [];

            function populateVoices() {
                voicesAll = this.getVoices();
                
            }
            speechSynthesis.addEventListener('voiceschanged', populateVoices);
            // if (store.lang === 'en') {
            //     voicesActual.push(voicesAll.find((item) => item.lang === 'en-US'));
            // } else {
            //     voicesActual.push(voicesAll.find((item) => item.lang === 'ru-Ru'));
            // } 
            // console.log(voicesActual)
            // msg.voice = voicesActual[0];
            msg.text = `Today is ${document.querySelector('.today__grad').textContent} degrees`;
            
            speechSynthesis.speak(msg);
        })
    }
}

export default buttonListeners;



    