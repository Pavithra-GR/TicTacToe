// turno=true;
// const boxes=document.querySelectorAll(".box");
// const btn=document.querySelector("#resetbtn");
// const mat= [
//     [0, 1, 2], [3, 4, 5], [6, 7, 8], 
//     [0, 3, 6], [1, 4, 7], [2, 5, 8], 
//     [0, 4, 8], [2, 4, 6]             
//   ];
  
// function handleClick(event){
//     if(event.target.innerText===""){
//         event.target.innerText=turno?"X":"O";
//         turno=!truno;
//     }
// }
// function resetBoard(){
//     boxes.forEach(box =>  box.innerText="");
//     turno=true;
// }
// boxes.forEach(box=> box.addEventListener("click",handleClick));
// btn.addEventListener("click",resetBoard);

let turno = true; // true = X's turn, false = O's turn
const boxes = document.querySelectorAll(".box");
const btn = document.querySelector("#resetbtn");
const turnText = document.querySelector("p");


const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6]             
];
function updateTurnIndicator() {
    if (turno) {
        turnText.innerText = "X's Turn";
        turnText.classList.remove("o-turn");
        turnText.classList.add("x-turn");
    } else {
        turnText.innerText = "O's Turn";
        turnText.classList.remove("x-turn");
        turnText.classList.add("o-turn");
    }
}
function checkWinner() {
    winPatterns.forEach(pat=>{
        let [a,b,c]=pat;
        let boxA=boxes[a].innerText;
        let boxB=boxes[b].innerText;
        let boxC=boxes[c].innerText;
        if(boxA && boxA ===boxB && boxA===boxC){
            alert(`${boxA} wins!`);
            boxes.forEach(box => box.removeEventListener("click", handleClick));
        }
    
    })
    updateTurnIndicator();
}

function handleClick(event) {
    if (event.target.innerText === "") {
        event.target.innerText = turno ? "X" : "O";
        turno = !turno;
        checkWinner();
    }
}

function resetBoard() {
    boxes.forEach(box => {
        box.innerText = "";
        box.addEventListener("click", handleClick); 
});
    turno = true;
    updateTurnIndicator();
}

// Attach event listeners
boxes.forEach(box => box.addEventListener("click", handleClick));
btn.addEventListener("click", resetBoard);
