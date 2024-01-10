var timer = 60;
var hitrn = 0;
var score = 0;

function makeBubble() {
    var clutter = ""; 

    for(var i = 1;i<=126;i++){
        var rnum = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${rnum}</div>`;
    }
    document.querySelector('#pbtm').innerHTML = clutter;
}

function runTimer() {
    var interval = setInterval(function(){
        if (timer>0) {
            timer--;
            document.getElementById('timer').innerHTML = timer;
        }
        else{
            clearInterval(interval);
            document.querySelector('#pbtm').innerHTML =`<h1>Game Over...!!!<br></h1><h2>Refresh to Play Again</h2>`;
        }
    },1000);
}

function getNewHit() {
    hitrn = Math.floor(Math.random()*10);
    document.querySelector('#hit').innerHTML = hitrn;
}

function increaseScore() {
    score += 10;
    document.querySelector('#score').innerHTML = score;
}

document.getElementById('pbtm').addEventListener("click",function(dets){
    var clickednum = Number(dets.target.innerHTML);
    if (clickednum === hitrn) {
        increaseScore();
        getNewHit();
        makeBubble();
    }
});

makeBubble();
runTimer();
getNewHit();