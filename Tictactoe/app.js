const board = document.getElementById("board")
let currentPlayer = document.getElementById("player")
currentPlayer.textContent = "Player 1"
const resetButton = document.getElementById("reset-button")
const title = document.getElementById("title")
const playerLabel = document.getElementById("player-label");


const cell1 = document.getElementById("1")
const cell2 = document.getElementById("2")
const cell3 = document.getElementById("3")
const cell4 = document.getElementById("4")
const cell5 = document.getElementById("5")
const cell6 = document.getElementById("6")
const cell7 = document.getElementById("7")
const cell8 = document.getElementById("8")
const cell9 = document.getElementById("9")

let cells = document.querySelectorAll(".cells")


resetButton.addEventListener("click", () => {
    cells.forEach(cell => {
        cell.textContent = "";
        cell.setAttribute("style", "color: black;")
        cell.disabled = false;
    });
    playerLabel.textContent = "Player Turn: ";
    playerLabel.style.color = "black";
    currentPlayer.textContent = "Player 1";
    currentPlayer.style.color = "black";
    
});



    
cells.forEach(cell => {
    cell.addEventListener("click", () =>{
        if (!cell.disabled && cell.textContent === ""){
            cell.textContent = (currentPlayer.textContent === "Player 1") ? "O" : "X";
        
            if (cell1.textContent == "O" && cell2.textContent == "O" && cell3.textContent == "O"){
                draw1(cell1, cell2, cell3);
            } else if (cell1.textContent == "X" && cell2.textContent == "X" && cell3.textContent == "X"){
                draw2(cell1, cell2, cell3);
            } else if (cell4.textContent == "O" && cell5.textContent == "O" && cell6.textContent == "O"){
                draw1(cell4, cell5, cell6);
            } else if (cell4.textContent == "X" && cell5.textContent == "X" && cell6.textContent == "X"){
                draw2(cell4, cell5, cell6);
            } else if (cell7.textContent == "O" && cell8.textContent == "O" && cell9.textContent == "O"){
                draw1(cell7, cell8, cell9);
            } else if (cell7.textContent == "X" && cell8.textContent == "X" && cell9.textContent == "X"){
                draw2(cell7, cell8, cell9);
            } else if (cell1.textContent == "O" && cell4.textContent == "O" && cell7.textContent == "O"){
                draw1(cell1, cell4, cell7);
            } else if (cell1.textContent == "X" && cell4.textContent == "X" && cell7.textContent == "X"){
                draw2(cell1, cell4, cell7);
            } else if (cell2.textContent == "O" && cell5.textContent == "O" && cell8.textContent == "O"){
                draw1(cell2, cell5, cell8);
            } else if (cell2.textContent == "X" && cell5.textContent == "X" && cell8.textContent == "X"){
                draw2(cell2, cell5, cell8);
            } else if (cell3.textContent == "O" && cell6.textContent == "O" && cell9.textContent == "O"){
                draw1(cell3, cell6, cell9);
            } else if (cell3.textContent == "X" && cell6.textContent == "X" && cell9.textContent == "X"){
                draw2(cell3, cell6, cell9);
            } else if (cell1.textContent == "O" && cell5.textContent == "O" && cell9.textContent == "O"){
                draw1(cell1, cell5, cell9);
            } else if (cell1.textContent == "X" && cell5.textContent == "X" && cell9.textContent == "X"){
                draw2(cell1, cell5, cell9);
            } else if (cell3.textContent == "O" && cell5.textContent == "O" && cell7.textContent == "O"){
                draw1(cell3, cell5, cell7);
            } else if (cell3.textContent == "X" && cell5.textContent == "X" && cell7.textContent == "X"){
                draw2(cell3, cell5, cell7);
            } else {
                currentPlayer.textContent = (currentPlayer.textContent === "Player 1") ? "Player 2" : "Player 1";
            }
        }
    });
});

function draw1(a, b, c){
    
    for (i = 0; i < cells.length; i++){
        cells[i].disabled = true;
        cells[i].style.color = "gray";
    }
    a.style.color = "blue";
    b.style.color = "blue";
    c.style.color = "blue";
    playerLabel.textContent = "Winner: ";
    playerLabel.style.color = "blue";
    currentPlayer.style.color = "blue";
}

function draw2(a,b,c) {
    for (i = 0; i < cells.length; i++){
        cells[i].disabled = true;
        cells[i].style.color = "gray";
    }
    a.style.color = "red";
    b.style.color = "red";
    c.style.color = "red";
    playerLabel.textContent = "Winner: ";
    playerLabel.style.color = "red";
    currentPlayer.style.color = "red";
}
/*


cells.forEach(element => {
    element.addEventListener("click", () => {
        if (!element.disabled && element.textContent === "") {
            element.textContent = (currentPlayer.textContent === "Player 1") ? "O" : "X";
            currentPlayer.textContent = (currentPlayer.textContent === "Player 1") ? "Player 2" : "Player 1";

            if ((celda1.textContent == celda2.textContent) && (celda2.textContent == celda3.textContent) && (celda1.textContent != "")) {
                if (celda1.textContent == "O") {
                    celda1.style.color = "blue";
                    celda2.style.color = "blue";
                    celda3.style.color = "blue";
                    endGame()
                    
                } else {
                    celda1.style.color = "red";
                    celda2.style.color = "red";
                    celda3.style.color = "red";
                    endGame()
                    
                }
            } else if ((celda4.textContent == celda5.textContent) && (celda5.textContent == celda6.textContent) && (celda4.textContent != "")) {
                celda4.style.color = "blue";
                celda5.style.color = "blue";
                celda6.style.color = "blue";
                endGame()
            }
        }
    });
});


function endGame(){
    cells.forEach(celda => {
        celda.disabled;        
    });
    alert(currentPlayer.textContent + " Win!")
}

*/
