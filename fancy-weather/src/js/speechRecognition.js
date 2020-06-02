import searchCity from "./buttons/seachCity";

function speechRecognition() {
    const recognizer = new webkitSpeechRecognition();

    // Ставим опцию, чтобы распознавание началось ещё до того, как пользователь закончит говорить
    recognizer.interimResults = true;

    // Используем колбек для обработки результатов
    recognizer.onresult = (event) => {
    const result = event.results[event.resultIndex];
    if (result.isFinal) {
        // alert(`Вы сказали: ${  result[0].transcript}`);
        document.querySelector('.form-control').value = '';
        document.querySelector('.form-control').value = result[0].transcript;
        searchCity();
        document.querySelector('.form-control').value = '';
    } else {
        console.log('Промежуточный результат: ', event.resultIndex);
    }
    };

    document.querySelector('.fa-microphone').addEventListener('click', () => {
        recognizer.start();
    })
}

export default speechRecognition;
