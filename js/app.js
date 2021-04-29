const boxes = document.querySelectorAll('.box');
const score = document.querySelector('.score');
const time = document.querySelector('.time-left');
let timeLeft = time.textContent;
let points = score.textContent;
let currentMole;

function cleanRandomGrid() {
    boxes.forEach(box => {
        box.classList.remove('mole');
    })
    randomBox = boxes[Math.floor(Math.random() * boxes.length)];
    randomBox.classList.add('mole');
    currentMole = randomBox.id;
}
function moveMole() {
    let timerGame = setInterval(cleanRandomGrid, 500);
}

moveMole();

boxes.forEach(box => {
    box.addEventListener('mouseup', () => {
        if (box.id == currentMole) {
            points++;
            score.textContent = points;
        }
    });
})
function resetGame() {
    location.reload();
}
function countingDown() {
    timeLeft--;
    time.textContent = timeLeft;
    if (timeLeft == 0) {
        clearInterval(timerId);
        alert(`Game Over, Your score is: ${points}`)
        setTimeout(resetGame, 1000);
    }
}
let timerId = setInterval(countingDown, 1000);