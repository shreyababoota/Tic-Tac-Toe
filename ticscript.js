let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".reset-btn");
let newgame=document.querySelector("#newgame");
let winner=document.querySelector(".winner-container");

let turnO= true;
const resetgame=()=>{
    turnO=true;
    enableBoxes();
    winner.classList.add("hide");

}
const disableBoxes=()=>{
    for(let box of boxes)
        box.disabled=true;
    enableBoxes();
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const displaywinner=(pos1value)=>{
    document.querySelector("#winner").innerText=`Congratulations! The Winner is ${pos1value}`;
    winner.classList.remove("hide");
    disableBoxes();
}
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
        console.log("box was clicked.");
        if(turnO)
            {
                box.innerText="O";
                turnO=false;
            }
            else
            {
                box.innerText="X";
                turnO=true;
            }
            box.disabled=true;
            checkWinner();
    });
});
const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1val= boxes[pattern[0]].innerText;
        let pos2val= boxes[pattern[1]].innerText;
        let pos3val= boxes[pattern[2]].innerText;
        if(pos1val!="" && pos2val!="" && pos3val!="")
            {
               if(pos1val==pos2val&& pos2val==pos3val)
                  {
                    console.log("Winner:",pos1val);
                    displaywinner(pos1val);
                  }
            }
            
        
}
}
newgame.addEventListener("click",resetgame);
resetBtn.addEventListener("click",resetgame);

 