let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initalize the game by setting the value inside next-lbl to nextPlayer
//hint: you could use innerText for this
const nextPlayerLabel = document.getElementById('next-lbl');
nextPlayerLabel.innerText = nextPlayer;

//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
    for (let cellNumber = 1; cellNumber <= 9; cellNumber++)
    {
        // Cells are named c1 to c9 in index.html
        const cell = document.getElementById('c' + cellNumber);
        const cellButton = document.createElement('button');
        cellButton.innerText = '[ ]';
        cell.appendChild(cellButton);
    }

    // Programatically add 'takeCell' as an event listener to all the buttons on the board
    let btns = document.querySelectorAll('button');

    for (let i=0; i<btns.length; i++)
    {
        /*
            Assign an event listener to each of the buttons in btns.
            The event to listen for should be 'click'. You will need to pass
            the event to takeCell. Review the slides for the trick on how to ]
            pass a parameter.
        */
        // Wrap takeCell in an arrow function so the click event is passed through to it
        btns[i].addEventListener('click', (event) => { takeCell(event); });
    }
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */
    const clickedButton = event.target;
    clickedButton.innerText = '[' + nextPlayer + ']';

    // Switch turns and show the new next player
    nextPlayer = (nextPlayer === 'X') ? 'O' : 'X';
    nextPlayerLabel.innerText = nextPlayer;

    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )
    clickedButton.disabled = true;

    // Check if the game is over
    if (isGameOver())
    {
        // let the label with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
        document.getElementById('game-over-lbl').innerHTML = '<h1>Game Over</h1>';
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment
}

function isGameOver()
{
    // This function returns true if all the buttons are disabled and false otherwise
    const boardButtons = document.querySelectorAll('#gameboard button');

    for (let i = 0; i < boardButtons.length; i++)
    {
        if (!boardButtons[i].disabled)
        {
            return false;
        }
    }
    return true;
}
