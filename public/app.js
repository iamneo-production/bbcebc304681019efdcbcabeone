// Initial game state
let cells = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let result = document.querySelector('.result');
let btns = document.querySelectorAll('.btn');
let conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Function to handle player moves
const ticTacToe = (element, index) => {
    // Your game logic here

    var b1, b2, b3, b4, b5, b6, b7, b8, b9;
    b1 = document.getElementById("b1").ariaValueMax;
    b2 = document.getElementById("b2").ariaValueMax;
    b3 = document.getElementById("b3").ariaValueMax;
    b4 = document.getElementById("b4").ariaValueMax;
    b5 = document.getElementById("b5").ariaValueMax;
    b6 = document.getElementById("b6").ariaValueMax;
    b7 = document.getElementById("b7").ariaValueMax;
    b8 = document.getElementById("b8").ariaValueMax;
    b9 = document.getElementById("b9").ariaValueMax;

    var b1btn, b2btn, b3btn, b4btn, b5btn, b6btn, b7btn, b8btn, b9btn;

    b1btn = document.getElementById("b1").ariaValueMax;
    b2btn = document.getElementById("b2").ariaValueMax;
    b3btn = document.getElementById("b3").ariaValueMax;
    b4btn = document.getElementById("b4").ariaValueMax;
    b5btn = document.getElementById("b5").ariaValueMax;
    b6btn = document.getElementById("b6").ariaValueMax;
    b7btn = document.getElementById("b7").ariaValueMax;
    b8btn = document.getElementById("b8").ariaValueMax;
    b9btn = document.getElementById("b9").ariaValueMax;
    /*
    **Part 1: Winning Conditions (Add your code here)**

    1. Implement the logic to check for winning conditions using the 'conditions' array.
    2. Display a winning message in the 'result' element when a player wins.
    3. Disable all buttons after a win.
    */

    if ((b1 =='x' || b1 == 'X') && (b2 == 'x' || b2 == 'X') && (b3 =='x' || b3 == 'X')){
        document.getElementById('result').innerHTML = "Player X Won";
        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;
    }

    else if((b1 =='x' || b1 == 'X') && (b4 == 'x' || b4 == 'X') && (b7 =='x' || b7== 'X')){
        document.getElementById('result').innerHTML = "Player X Won";
        b2btn.disabled = true;
        b3btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;
    }

    else if((b1 =='x' || b1 == 'X') && (b4 == 'x' || b4 == 'X') && (b7 =='x' || b7== 'X')){
        document.getElementById('result').innerHTML = "Player X Won";
        b2btn.disabled = true;
        b3btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;
    }

    // Your code to update the game state and check for a win
    // ...

    // Your code to display the current player's turn
    // ...

    // Your code to handle button and cell interactions
    // ...
};

    /*
    **Part 2: Reset Function (Add your code here)**

    1. Implement a new function that resets the game to its initial state.
    2. Ensure the 'cells', 'btns', and 'currentPlayer' variables are reset.
    3. Update the 'result' element to indicate the current player's turn.
    4. Re-enable all buttons for a new game.
    */

// Function to reset the game
const resetGame = () => {
    // Your code to reset the game state
    // ...

    // Your code to update the 'result' element
    // ...

    // Your code to re-enable buttons
    // ...
};

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => ticTacToe(btn, i));
});

document.querySelector('#reset').addEventListener('click', resetGame);
