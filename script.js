function makebubble(){
    var clutter =""

for(var i=1 ; i<161; i++){
    var a = Math.floor(Math.random()*10);
    clutter = clutter + `<div class="bubble">${a}</div>`
}
 document.querySelector('#pbtm').innerHTML = clutter
}

var timer=60;
function runTimer(){
    var time = setInterval(function(){
        if(timer>0){
         timer--;
         document.querySelector('#timerValue').textContent=timer;
          // document.querySelector('#timerValue').innerHTML=timer;
        }else{
            clearInterval(time)
            document.querySelector('#pbtm').innerHTML=`<h1>GAME OVER (SCORE:${score})<h1>`;

        }
    } , 1000);
}

var hitNum;
function getnewHit(){
    hitNum = Math.floor(Math.random()*10);
    document.querySelector('#hitVal').innerHTML=hitNum;

}

var score= 0;

function increaseScore(){
    score +=10;
    document.querySelector('#scrVal').textContent=score;

}
 
document.querySelector('#pbtm').addEventListener("click" ,function(details){
    var clickedNum = Number(details.target.textContent);
    if(clickedNum==hitNum){
        increaseScore();
        // makebubble();
        getnewHit();
    }

})

runTimer();
makebubble();
getnewHit();
