const p1 = {
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Score'),
    score: 0
};

const p2 = {
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Score'),
    score: 0
};

const reset = document.querySelector('#reset');

let winningScoreSelect = document.querySelector('#playto');


let winningScore = parseInt(winningScoreSelect.value);
let isGameOver = false;



 
    
function updateScore(player, opponent) {
     if (!isGameOver) {
        player.score++;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
         player.display.innerHTML = `${player.score}`;
    }
}
p1Button.addEventListener('click', (e) => {
    updateScore(p1, p2);
})

p2Button.addEventListener('click', (e) => {
    updateScore(p2, p1);
})

winningScoreSelect.addEventListener('change', (e) => {
    winningScore = parseInt(winningScoreSelect.value);
    resetFunc();
})

reset.addEventListener('click', resetFunc);

function resetFunc() {
    isGameOver = false;

    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.innerHTML = `${p.score}`;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
    
}