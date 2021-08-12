`use strict`;
/*
FOR MY UNDERSTANDING 


console.log(document.querySelector('.message').textContent); // get the data 

//set the data 
document.querySelector('.message').textContent = "Correct Number";

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;


//input -text box can be selected by using value field.
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

*/


//ADDING ONCLICK EVENT TO THE BUTTON
/*addEventListener - arguements
1 - name of the event - click 
2 - what to do ? (function)
*/
let secret_number = Math.trunc(Math.random() * 20) + 1;
let curr_score = 20;
let high_score = 0;

const displayMessage = (message) => {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.again').addEventListener('click', function() {
    secret_number = Math.trunc(Math.random() * 20) + 1; //secret_number
    document.querySelector('.score').textContent = 20;
    curr_score = 20;
    displayMessage("Start guessing...") //message
    document.querySelector('body').style.backgroundColor = '#222'; //backgroundColor
    document.querySelector('.number').textContent = "?"; //secret_number - visibility
    document.querySelector('.number').style.width = '15rem'; // width if succeeded is resetted 
    document.querySelector('.guess').value = null;

});

document.querySelector('.check').addEventListener('click', function() {
    let guess = Number(document.querySelector('.guess').value); // the input passed is string - we need to typecast to number 

    //No proper input 
    if (guess <= 0 || guess > 20)
        document.querySelector('.message').textContent = "No number ";
    //success
    else if (guess === secret_number) {
        document.querySelector('.number').textContent = secret_number;
        high_score = high_score > curr_score ? high_score : curr_score;
        document.querySelector('.highscore').textContent = high_score;
        displayMessage("Sucess, You are correct");
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

    } else if (guess != secret_number) {
        if (curr_score > 1) {
            curr_score--;
            document.querySelector('.score').textContent = curr_score;
        } else {
            displayMessage("You Lost");
            document.querySelector('.score').textContent = 0;
        }

        displayMessage(guess > secret_number ? "Too High" : "Too Low");


    }
});


/*
   // too low
    else if (guess < secret_number) {
        if (curr_score > 1) {
            document.querySelector('.message').textContent = "Too Low";
            curr_score--;
            document.querySelector('.score').textContent = curr_score;
        } else {
            document.querySelector('.message').textContent = "You Lost";
            document.querySelector('.score').textContent = 0;
        }

    }
    //too high
    else {

        if (curr_score > 1) {
            document.querySelector('.message').textContent = "Too High";
            curr_score--;
            document.querySelector('.score').textContent = curr_score;
        } else {
            document.querySelector('.message').textContent = "You Lost";
            document.querySelector('.score').textContent = 0;
        }

    }*/

//java Script automatically calls this eventhandler function when event happens.