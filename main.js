// let timerDiv = document.querySelector('#timer')

// function timer(duration) {
//     let minutes;
//     let seconds;
//     let startDuration = duration * 60;

//     let timerInterval = setInterval(() => {
//         minutes = Math.floor(startDuration / 60);
//         seconds = startDuration % 60;

//         minutes = minutes < 10 ? '0' + minutes : minutes;
//         seconds = seconds < 10 ? '0' + seconds : seconds;

//         timerDiv.textContent = minutes + ':' + seconds;

//         if (--startDuration < 0) {
//             clearInterval(timerInterval)
//             alert('Time is ended')
//         } else if (startDuration === 30 * 60) {
//             alert('Залишилося менше половини часу!')
//         }
//     }, 1000)
// }

// document.addEventListener('DOMContentLoaded', () => {
//     timer(60)
// })

let timerDiv = document.querySelector('.timer')
let start = document.querySelector('.start')
let animation = document.querySelector('#animation')
let time = 30;

function startTimersWork() {
    start.disabled = true;
    let timerInterval = setInterval(() => {
        time--;
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        timerDiv.innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        if (time === 10) {
            animation.classList.toggle('hidden');
        }

        if (time === 0) {
            clearInterval(timerInterval);
            start.disabled = false;
        }
    }, 1000);
}