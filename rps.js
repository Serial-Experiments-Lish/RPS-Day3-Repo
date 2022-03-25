const hands = ['rock', 'paper', 'scissors'];

function getHands() {
    let randomDraw = parseInt(Math.random()*10)%3;
    return hands[randomDraw];
}

let playerOne = {name: 'Johnny Bravo', getHands: function () {return getHands();}};
let playerTwo = {name: 'Lafayette', getHands: function () {return getHands();}};

let winRequirement = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
}

function playRound(p1, p2) {
    const pOneHand = p1.getHands();
    const pTwoHand = p2.getHands();

    console.log(p1.name, "threw", pOneHand);
    console.log(p2.name, "threw", pTwoHand);

    if (pOneHand === pTwoHand) {
        console.log("It's a tie.");
        return null;
    } else if (winRequirement[pOneHand] === pTwoHand) {
        console.log(p1.name + " wins!");
        return p1;
    }else {
        console.log(p2.name + " wins!");
        return p2;
    }
}

let playGame = (playerUno, playerDos, playUntil) => {
        let playerUnoW = 0;
        let playerDosW = 0;
        while (playerUnoW < playUntil && playerDosW < playUntil) {
            if (!playRound(playerUno, playerDos)) {

            }
            else if (playRound(playerUno, playerDos) === playerUno) {
                playerUnoW++;
            } else {
                playerDosW++;
            }
    
        }

        if (playerUnoW === playUntil) {
            return playerUno;
        } else {
            return playerDos;
        }
}

console.log(playGame(playerOne, playerTwo, 5));

//I primarily received help from Hector's demo.  This was an assignment that I for sure struggled with.  I need to take more time grasping these concepts, but I would like to believe I'm inching my way there, slowly.
//I'm not giving up, just letting whoever is reviewing this code that I will continue trying until I get it... however long that may take.
