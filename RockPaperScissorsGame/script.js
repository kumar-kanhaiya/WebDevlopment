// let random = Math.floor(Math.random() * 3);
const userresult = document.getElementById("user")
const computerresult = document.getElementById("computer")
let userscore = 0;
let computerscore = 0;
// let computer = "none" ;
// if(random === 0 ){
//     computer = "rock"
// }
// else if (random === 1){
//     computer = "paper";
// }
// else{
//     computer = "scissor";
// }
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");

let userValue ;
rock.addEventListener("click" , ()=>{
    userValue = "rock"
    checkWinner();
})
paper.addEventListener("click" , ()=>{
    userValue = "paper"
    checkWinner();
})
scissor.addEventListener("click" , ()=>{
    userValue = "scissor"
    checkWinner();
})

console.log(userValue)
console.log(computer)
function checkWinner() {
    let ans = document.getElementById("resulthai")
    const options = ["rock", "paper", "scissor"];
    const random = Math.floor(Math.random() * 3);
    const computer = options[random];
    
    if(userValue === computer){
        ans.innerHTML = "<b>DRAW MATCH </b>"
        ans.style.backgroundColor = "gray"
        
    }
    else if(userValue === "rock" && computer === "scissor" 
        || userValue === "paper" && computer === "rock" ||
        userValue === "scissor" && computer === "paper"
    ){
        ans.innerHTML = "<b>You Win !! </b>"
        ans.style.backgroundColor = "green";
        userscore += 1 ;
        userresult.innerText = userscore;

    }
    else{
        ans.innerText = "YOU LOST!!"
        ans.style.backgroundColor = "red";
        computerscore += 1 ;
        computerresult.innerText = computerscore;
    }

}