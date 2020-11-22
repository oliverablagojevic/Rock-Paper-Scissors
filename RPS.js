const message = document.querySelector('.message');
const score = document.querySelector('.score');
const buttons = document.querySelectorAll('button');
const winnerScores = [0,0];

//add event listeners to buttons
for ( let i = 0 ; i < buttons.length ; i++){
    buttons[i].addEventListener('click', RPS);
}

//setup player's selection
function RPS (e){
let player1=e.target.innerText;
//setup a random number to select for computer
let player2=Math.floor(Math.random() * 2);

if (player2 === 0) {
  player2='Rock';
  }
else if (player2 === 1) {
  player2='Paper';
}
else {
  player2='Scissors';
}

let result = checkWinner(player1, player2);
  //output scores to the DOM
 if (result === 'Player 1'){
result += ' wins!';
  //update score
  winnerScores[0]++;
    }

if (result === 'Player 2'){
  result += ' wins!';
  winnerScores[1]++;
  }
if (result === 'Draw'){
  result += 'Tie!'
}

//output score into Score DIV
score.innerHTML = 'Player 1: [ ' + winnerScores[0]+ ' ] Player 2: [ ' + winnerScores[1] + ' ]';

//output player and computer's selections
  messenger('Player 1: <strong>' + player1 + '</strong> Player 2: <strong>' + player2 + '</strong><br>' + result);
        }
function messenger(selectionMessage){
message.innerHTML = selectionMessage;
}

function checkWinner(player1, player2){
if (player1 === 'Rock' && player2 === 'Rock') {
  return 'Draw';
}

if (player1 === 'Rock' && player2 === 'Paper') {
  return 'Player 2';
} else {
  return 'Player 1';
}

if (player1 === 'Rock' && player2 === 'Scissors') {
  return 'Player 2';
} else {
  return 'Player 1';
}

if (player1 === 'Paper' && player2 === 'Paper') {
  return 'Draw';
}

if (player1 === 'Paper' && player2 === 'Scissors') {
  return 'Player 2';
} else {
  return 'Player 1';
}

if (player1 === 'Scissors' && player2 === 'Scissors') {
  return 'Draw';
}
}

function tb8_makeArray(n){
this.length = n;return this.length;
}
tb8_messages = new tb8_makeArray(3);
tb8_messages[0] = "Rock breaks Scissors,";
tb8_messages[1] = "Scissors cuts Paper,";
tb8_messages[2] = "Paper covers Rock.";
tb8_rptType = 'infinite';
tb8_rptNbr = 5;
tb8_speed = 100;
tb8_delay = 2000;
var tb8_counter=1;
var tb8_currMsg=0;
var tb8_tekst ="";
var tb8_i=0;
var tb8_TID = null;
function tb8_pisi()
{
tb8_tekst = tb8_tekst + tb8_messages[tb8_currMsg].substring(tb8_i, tb8_i+1);
document.title = tb8_tekst;tb8_sp=tb8_speed;tb8_i++;
if (tb8_i==tb8_messages[tb8_currMsg].length){
tb8_currMsg++; tb8_i=0; tb8_tekst="";
tb8_sp=tb8_delay;
}
if (tb8_currMsg == tb8_messages.length){
if ((tb8_rptType == 'finite') && (tb8_counter==tb8_rptNbr)){clearTimeout(tb8_TID);
return;
}
tb8_counter++;
tb8_currMsg = 0;
}
tb8_TID = setTimeout("tb8_pisi()", tb8_sp);
}
tb8_pisi()
