const choices = ['paper', 'rock', 'scissors','earth' ];

console.log(pickRandomChoice());

function pickRandomChoice() {
    return choices [Math.floor(Math.random() * choices.length)]
    ;
}
