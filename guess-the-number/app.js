const number = document.getElementById("number")
const numberBtns = document.querySelectorAll(".number-button")
const resetBtn = document.getElementById("reset-button")
const mainText = document.getElementById("main-text")

let randomNumber = Math.floor(Math.random() * 10) + 1;

Array.from(numberBtns).map(numberBtn =>{
    numberBtn.addEventListener( "click", ()=> {
        number.innerHTML = numberBtn.innerHTML;
        numberBtn.disabled = true;
        if (number.innerHTML == randomNumber){
            number.style.color = "green";
            numberBtn.style.color = "white"
            numberBtn.style.background = "darkorchid"
            endGame();
        } else {
            number.style.color = "red"
        }
    })
})

function endGame(){
    Array.from(numberBtns).map(numberBtn =>{
        numberBtn.disabled = true;
    })
    resetBtn.style.display = "block"
    mainText.innerHTML = "You guessed the number!!";
    mainText.style.color = "green";
}

function resetGame(){
    mainText.innerHTML = "Guess a number between <span class='purple'>1</span> and <span class='purple'>10</span>";
    mainText.style.color = "black";
    number.innerHTML = "";
    resetBtn.style.display = "none"
    Array.from(numberBtns).map(numberBtn =>{
        numberBtn.disabled = false;
        numberBtn.style.color = "";
        numberBtn.style.background = "";
    })
    randomNumber = Math.floor(Math.random()*10)+1;
}
