var btn=document.querySelector("#btn");
var goster=document.querySelector("#goster");

btn.onclick=function(){
  
    btn.innerHTML = randomInt(1, 5000);
    

    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
}