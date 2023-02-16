var keys={};
var pressed=false;
document.addEventListener("keydown", (e)=>{pressed=true; keys[String.fromCharCode(e.keyCode)]=true});
document.addEventListener("keyup", (e)=>{pressed=false; keys[String.fromCharCode(e.keyCode)]=false});

