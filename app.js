let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset-btn");
let msgcont=document.querySelector(".msg-container");
let msg=document.querySelector("#message");
let turnO=true;
var count=0;
let newg=document.querySelector(".newbtn");
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        count++;
        console.log("box was clicked");
        console.log(count);
        if(turnO){
            box.classList.add("colorO");
            box.classList.remove("colorX");
            box.innerText="O";
            turnO=false;
        }else{
            box.classList.add("colorX");
            box.classList.remove("colorO");
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;

        checkWinner();
    });
});

const resetGame=()=>{
    turnO=true;
    for(let box of boxes){
        box.innerText="";
        box.disabled=false;
    }
    count=0;
    msgcont.classList.add("hide");
}
const btnDisabled=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const GameDraw=()=>{
    msgcont.classList.remove("hide");
    msg.innerText=" Oops! Game Draw";
    count=0;
}
const checkWinner=()=>{
    for(pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                btnDisabled();
                showWinner(pos1Val,count);
            }else if(count===9){
                GameDraw();
            }
        }
    }
}

const showWinner=(pos1Val)=>{
    msgcont.classList.remove("hide");
    msg.innerText=` Congratulations! Winner is ${pos1Val}`;
}

newg.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);


