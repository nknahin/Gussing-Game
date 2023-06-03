
// initislizing some value
let totalAttemps = 5;
let Attemps = 0;
let tottalWons = 0;
let totalLost = 0;



// finding elements

const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const gussingNumber = form.querySelector("#gussingNumber");
const checkButton = form.querySelector("#check");
const resultText = cardBody.querySelector(".resultText");
const lostWonMessage = document.createElement("p");
const remainingAttempt = cardBody.querySelector(".remainingAttempt");




form.addEventListener("submit", function(event){
    event.preventDefault();
    Attemps++;
    if(Attemps === 5){
        gussingNumber.disabled = true;
        checkButton.disabled = true;
    }if(Attemps < 6) {
        let guessNumber = Number(gussingNumber.value);
        checkResult(guessNumber);
        remainingAttempt.innerHTML = `Remaining attemps: ${totalAttemps-Attemps}`
    }
    gussingNumber.value = "";
    
});


function checkResult(gussingNumber){
    const randomNumber = getRandomNumber(5);
    if(gussingNumber === randomNumber){
        resultText.innerHTML = `You have Won. `;
        tottalWons++;

    }else{
        resultText.innerHTML = `You have lost. Random number was: ${randomNumber} `;
        totalLost++;

    }
    lostWonMessage.innerHTML = `Won: ${tottalWons}, Lost: ${totalLost}`
    lostWonMessage.classList.add("large-text");
    cardBody.appendChild(lostWonMessage);
}



function getRandomNumber(limit){
    return  Math.floor(Math.random() * limit) + 1;
}