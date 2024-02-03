
function userChoice() {
    var choice = prompt("Enter your choice amongst Rock, Paper, Scissors: ");

    if (choice === 'Rock' || choice === 'Paper' || choice === 'Scissors') {
        return choice;
    }
    else {
        alert("Invalid Input! ");
        return userChoice();
    }
}

function computerChoice() {
    var randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }
}

function considerWinner(user, computer) {
    if (user === computer) {
        return "It's a tie!";
    }
    if (user === "Rock") {
        return computer === "Scissors" ? "You Win!" : "Computer Wins!";
    }
    if (user === "Paper") {
        return computer === "Rock" ? "You Win!" : "Computer Wins!";
    }
    if (user === "Scissors") {
        return computer === "Paper" ? "You Win!" : "Computer Wins!";
    }

}

function playGame() {
    var user = userChoice();
    var computer = computerChoice();

    alert("You chose: " + user);
    alert("The Computer Choose: " + computer);
    alert(considerWinner(user, computer));
}

playGame();