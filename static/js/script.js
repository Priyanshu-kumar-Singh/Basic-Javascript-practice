/*_________________________________________challenge 1:your age in days_________________________________________*/
function ageInDays() {
    var birthYear = prompt("In which year you were born......good friend!");
    var ageInDays = (2019 - birthYear) * 365;
    /*the code below will write a <h1> inside class flex-result as <h1 id="ageInDays">you are ageInDays days old</h1>  */
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDays + ' days old');
    h1.setAttribute('id', 'ageInDays');// set an id ="ageInDays"
    h1.appendChild(textAnswer);//adding textanswer inside <h1> tag ----------><h1>____here____</h1>
    document.getElementById('flex-box-result').appendChild(h1);//now adding this whole file inside a class div whose id='flex-box-result'
}

function reset() {
    document.getElementById('ageInDays').remove();//reseting textanswer as ""
}



/*_________________________________________challenge 2:generate a cat________________________________________________*/
function generatecat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen')/*we want to acess flex-container 2 and append the img 
    source to them so we call it by his id */
    image.src = "https://thecatapi.com/api/images/get?format=src&type=gif&size=small";/*this src has to be 
    entered inside the container 2 img  */
    div.appendChild(image);//appending image src to container 2
}



/*  regarding css if the code of two blocks is similar then we can use
.flex-box-container-1, .flex-box-container-2{
    display: flex;
    border: 1px solid black;
    padding: 10px;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
}   
instead of writing it twice      */


/*_______________________________________Challenge 3:Rock,Paper and Scissor_________________________________________*/

//skeleton of game
function rpsGame(yourChoice) {
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randomTorpsInt());
    result = decideWinner(humanChoice, botChoice);//it will give us results in array if human wins then result---->[1,0]
    message = finalMessage(result);
    /*final message is a function created by me as it will return a dictionary {'message':'you won','color':'green'} */
    rpsFrontEnd(yourChoice.id, botChoice, message);
}

//now func one by one

//1.function to return random no. 0,1,2  you know what i mean
function randomTorpsInt() {
    return Math.floor(Math.random() * 3);
}

//2. if botchoice= random no. then we have to convert no. to choice
function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}

//3.deciding winner
function decideWinner(yourChoice, computerChoice) {
    var rpsdatabase = {
        'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
        'scissors': { 'paper': 1, 'scissors': 0.5, 'rock': 0 },
        'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 }
    };
    var yourScore = rpsdatabase[yourChoice][computerChoice];
    var computerScore = rpsdatabase[computerChoice][yourChoice];
    return [yourScore, computerScore];
}

//4.returning Finalmessage
function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return { 'message': 'You Lost', 'color': 'red' };
    }
    else if (yourScore === 0.5) {
        return { 'message': 'You Tied', 'color': 'yellow' };
    }
    else {
        return { 'message': 'You Won', 'color': 'green' };
    }
}

//5. frontend function
function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,//it will give the image or source of image
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    //lets remove all the image
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humandiv = document.createElement('div');
    var botdiv = document.createElement('div');
    var messagediv = document.createElement('div');

    humandiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height = 150 width = 150 style = 'box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);' >"
    messagediv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
    botdiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height = 150 width = 150 style = 'box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);' >"
    document.getElementById('flex-box-rps-div').appendChild(humandiv);
    document.getElementById('flex-box-rps-div').appendChild(messagediv);
    document.getElementById('flex-box-rps-div').appendChild(botdiv);
}



/*___________________________________________Challenge4: Changing color of buttons_____________________________________________*/
var all_buttons = document.getElementsByTagName('button');
var copyAllButtons = [];
for (let i = 0; i < all_buttons.length; i++) {
    copyAllButtons.push(all_buttons[i].classList[1]);//we have used class list because we want to save our initial class(state)
}

function buttonColorChanges(buttonThingy) {
    if (buttonThingy.value === 'red') {
        buttonsRed();
    } else if (buttonThingy.value === 'green') {
        buttonsGreen();
    } else if (buttonThingy.value === 'reset') {
        buttonColorReset();
    } else if (buttonThingy.value === 'random') {
        randomColors();
    }
}

function buttonsRed() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonsGreen() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonColorReset() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function randomColors() {
    let choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning']
    for (let i = 0; i < all_buttons.length; i++) {
        var randomNumber = Math.floor(Math.random() * 4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber]);
    }
}



/*________________________________________Challenge 5: BlackJack________________________________________*/
let blackjackGame = {
    'you': { 'scoreSpan': '#your-blackjack-result', 'div': '#your-box', 'score': 0 },
    'dealer': { 'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0 },
    'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'J', 'Q', 'A'],
    'cardsMap': { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'K': 10, 'J': 10, 'Q': 10, 'A': [1, 11] },
    'wins': 0,
    'losses': 0,
    'draws': 0,
    'ishit': false,
    'isStand': false,
    'turnsOver': false,
};

const YOU = blackjackGame['you']
const DEALER = blackjackGame['dealer']
const hitSound = new Audio('static/sounds/swish.m4a');
const winSound = new Audio('static/sounds/cash.mp3');
const lossSound = new Audio('static/sounds/aww.mp3');

//before we are selecting elemets by getelementbyid but now we will use query selector!, it is a much better way of doing
//eventlistener is helpful because now we don't have to write onchange,onclick in html code
document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);
// so the above statement:- whenever the hit button will be clicked it will listen an event of click an run the blackjackHit function
document.querySelector('#blackjack-stand-button').addEventListener('click', dealerLogic);
document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackdeal);

//if button clicked
function blackjackHit() {
    if (blackjackGame['isStand'] === false) {
        blackjackGame['ishit'] = true;
        let card = randomCards();
        showCard(card, YOU);
        updateScore(card, YOU);
        showScore(YOU);
    }
}
//generating random cards
function randomCards() {
    let randomIndex = Math.floor(Math.random() * 13);
    return blackjackGame['cards'][randomIndex];
}

//creating card
function showCard(card, activePlayer) {
    if (activePlayer['score'] <= 21) {
        let cardImage = document.createElement('img');
        cardImage.src = `static/images/${card}.png`;//first replaced ' with ` ....this whole process is because cards is string
        // above two lines of code means i have created an image
        document.querySelector(activePlayer['div']).appendChild(cardImage);// appending image to yourbox div
        hitSound.play();
    }
}

function blackjackdeal() {
    if (blackjackGame['turnsOver'] === true) {
        blackjackGame['isStand'] = false;
        blackjackGame['ishit'] = false;
        blackjackGame['turnsOver'] = false;
        let yourImages = document.querySelector('#your-box').querySelectorAll('img');
        let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');
        //to remove all the images from boxes div
        for (let i = 0; i < yourImages.length; i++) {
            yourImages[i].remove();
        }
        for (let i = 0; i < dealerImages.length; i++) {
            dealerImages[i].remove();
        }
        YOU['score'] = 0;
        DEALER['score'] = 0;
        document.querySelector(YOU['scoreSpan']).textContent = YOU['score'];
        document.querySelector(DEALER['scoreSpan']).textContent = DEALER['score'];
        document.querySelector(YOU['scoreSpan']).style.color = 'black';
        document.querySelector(DEALER['scoreSpan']).style.color = 'black';

        document.querySelector('#blackjack-result').textContent = "let's play";
        document.querySelector('#blackjack-result').style.color = 'black';
    }
}

// for updating scores of you and dealer it will increment in backend

function updateScore(card, activePlayer) {
    if (card === 'A') {
        //if i got ace(A) then if adding 11 keeps me below 21 then add 11 otherwise add 1.
        if (activePlayer['score'] + blackjackGame['cardsMap'][card][1] <= 21) {
            activePlayer['score'] += blackjackGame['cardsMap'][card][1];
        } else {
            activePlayer['score'] += blackjackGame['cardsMap'][card][0];
        }
    } else {
        activePlayer['score'] += blackjackGame['cardsMap'][card];
    }
}

//function to show score in froontend
function showScore(activePlayer) {
    if (activePlayer['score'] > 21) {
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    } else {
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
}

// for a break of milli seconds between bot moves
function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

// function for dealer(bot)  will work when stand button will be clicked
async function dealerLogic() {//this is assync func because we have to call sleep func in it
    // i had not used async func then whole browser will get freeze until this code is compiled
    blackjackGame['isStand'] = true;
    while (blackjackGame['ishit'] === true && DEALER['score'] < 16 && blackjackGame['isStand'] === true) {/* by this bot will 
                                                                                                 be able to do his move by 
                                                                                                 just 1 click but this is not good 
                                                                                                 as bot directly throw all cards and 
                                                                                                 does not wait so now we will create a 
                                                                                                 new sleep function      */
        let card = randomCards();
        showCard(card, DEALER);
        updateScore(card, DEALER);
        showScore(DEALER);
        await sleep(1000);//giving 1000 milli seconds
    }
    blackjackGame['turnsOver'] = true;
    let winner = computeWinner();
    showResult(winner);

}


//function to compute Winner and returning a message
function computeWinner() {
    let winner;
    if (YOU['score'] <= 21) {//main block for conditions
        if (YOU['score'] > DEALER['score'] || DEALER['score'] > 21) {
            console.log('You Won!');
            winner = YOU;
            blackjackGame['wins']++;
        } else if (YOU['score'] < DEALER['score']) {
            console.log('You Lost!');
            winner = DEALER;
            blackjackGame['losses']++;
        } else if (YOU['score'] === DEALER['score']) {
            console.log('You Drew!');
            blackjackGame['draws'] + 1;
        }
    } else if (YOU['score'] > 21 && DEALER['score'] <= 21) {
        console.log('You Lost!');
        winner = DEALER;
        blackjackGame['losses']++;
    } else if (YOU['score'] > 21 && DEALER['score'] > 21) {
        console.log('You Drew!');
        blackjackGame['draws']++;
    }
    console.log('winner is ', winner);
    return winner;
}

//function to show result

function showResult(winner) {
    let message, messagecolor;
    if (blackjackGame['ishit'] === true) {
        if (winner === YOU) {
            document.querySelector('#Wins').textContent = blackjackGame['wins'];
            message = 'You Won!';
            messagecolor = 'green';
            winSound.play();
        } else if (winner === DEALER) {
            document.querySelector('#Losses').textContent = blackjackGame['losses'];
            message = 'You Lost!';
            messagecolor = 'red';
            lossSound.play();
        } else {
            document.querySelector('#Draws').textContent = blackjackGame['draws'];
            message = 'You Drew';
            messagecolor = 'yellow';
        }


        document.querySelector('#blackjack-result').textContent = message;
        document.querySelector('#blackjack-result').style.color = messagecolor;
    }
}

/*_______________________________________ENDING_OF_PROJECT__________________________________________*/