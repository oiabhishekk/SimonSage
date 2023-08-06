let gameSeq=[];
let userSeq=[];
let Gamestart=false;
let level=0;
 document.addEventListener("keypress" ,function(){
  if(Gamestart==false){
    console.log("game started");
    Gamestart=true;
    levelup();

  }
 });
 function levelup(){
  level++;
  
 }

