let gameSeq=[];
let userSeq=[];
let Gamestart=false;
let level=0;
 document.addEventListener("keypress" ,function(){
  if(Gamestart==false){
    Gamestart=true;
    levelup();

  }
 });
 function buttonFlash(btn){
  btn.classList.add("flash");
  setTimeout(function(){
    btn.classList.remove("flash");
  },250);
 }

 function levelup(){
  userSeq=[];
  level++;
  document.querySelector("h2").innerText=`Level ${level}`;
  //chooose random btn
  btnidx=Math.floor(Math.random()*4);
  let btns=document.querySelectorAll(".box");
  let btn=btns[btnidx];
  buttonFlash(btn);
  gameSeq.push(btn.getAttribute("id"));

 }
 function checkAns(idx){
  if(userSeq[idx]===gameSeq[idx]){
    if(userSeq.length==gameSeq.length){
      setTimeout(levelup,1000);
    }
  }else{
    document.querySelector("h2").innerText=`Game over at level  ${level} Press any key to start again`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
    document.querySelector("body").style.backgroundColor="white";


    },150);
    reset();

  }
 }
function buttonPressed(){
  let btn=this;
  buttonFlash(btn);
  userColor= this.getAttribute("id");
  userSeq.push(userColor);
  checkAns(userSeq.length-1);
}
let btns=document.querySelectorAll(".box");
for(btn of btns){
  btn.addEventListener("click", buttonPressed);

}
function reset(){
  Gamestart=false;
  gameSeq=[];
  userSeq=[];
  level=0;

}



