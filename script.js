let user = 0;
let cmp = 0;

const boxes = document.querySelectorAll(".box");
const msg = document.querySelector(".msg");
const userscore = document.querySelector(".userscore");
const cmpscore = document.querySelector(".compscore");
const reset = document.querySelector(".reset");

const opt = ["rock", "paper", "scissors"];

let cmpchoicegen = () => {
    return opt[Math.floor(Math.random()*3)];
};

let game = (userchoice) => {
    let cmpchoice = cmpchoicegen();
    if (userchoice == cmpchoice) {
        draw();
    }
    else {
        let userwin = true;
        if (userchoice == "rock") {
            userwin = cmpchoice == "paper" ? false : true;
        } else if (userchoice == "paper") {
            userwin = cmpchoice == "scissors" ? false : true;
        } else if (userchoice == "scissors") {
            userwin = cmpchoice == "rock" ? false : true;
        }
        if (userwin) {
            user++;
            userscore.innerText = `You: ${user}`;
            msg.style.color = "green";
            msg.innerText = `You win, your ${userchoice} beats ${cmpchoice}`;
        } else {
            cmp++;
            cmpscore.innerText = `Computer: ${cmp}`;
            msg.style.color = "red";
            msg.innerText = `You lost, your ${userchoice} couldn't beat ${cmpchoice}`;
        }
    }
}

let draw = () => {
    msg.style.color = "blue";
    msg.innerText = "it's a tie. none gets any points.";
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        const userchoice = box.classList[0];
        game(userchoice);
    });
});

reset.addEventListener("click", ()=>{
    msg.innerText = "";
    user=0;
    cmp=0;
    userscore.innerText = `You: ${user}`;
    cmpscore.innerText = `Computer: ${cmp}`;    
});
