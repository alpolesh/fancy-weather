import store from '../store';
import searchCity from './seachCity';

function speechRecognition(button) {
    const recognizer = new webkitSpeechRecognition();
    recognizer.interimResults = true;
    if (button === 'micro-on') {
        store.speechRec = true;
        recognizer.start();
        recognizer.onspeechstart = (event) => {
            document.querySelector('.micro-indicator').style = 'display: block';
            console.log(event);
        }
        recognizer.onspeechend = () => {
            document.querySelector('.micro-indicator').style = 'display: none';
        }
        recognizer.onend = () => {
            if (store.speechRec) {
                recognizer.start();
            } else recognizer.abort();
        }
    } else if (button === 'micro-off') {
        recognizer.abort();
        store.speechRec = false;
    } else if (button === 'voice-search') {
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
    }
}

export default speechRecognition;