import { Tamagotchi } from "./modules/myTamagotchi.js";

let tama = new Tamagotchi();
const img = document.querySelector('img');
const lovelinHappy = new URL ('./img/lovelin_happy.jpg', import.meta.url);
const lovelinAngry = new URL ('./img/lovelin_angry.jpg', import.meta.url);
const lovelinRIP = new URL ('./img/lovelin_rip.jpg', import.meta.url);
let intervalID =0;

img.src = lovelinHappy.href;



const btn = document.getElementById('enterName');
btn.addEventListener('click', setName)

function setName(){
    const TamagotchiName = document.querySelector('input').value;
    document.getElementById('name').innerText = 'Tamagotchi Name: ' + TamagotchiName;
    
    start();
    
}
const feedBtn = document.getElementById('feed');
feedBtn.addEventListener('click', ()=>{
    document.getElementById('feedBar').innerText = 'Hunger: ' + tama.setTimeUp();
    if(tama.getTimeUp() <= 0){
        console.log("gettimeup = 0")
        tama.adjustTimeUp();
    }
});
const playBtn = document.getElementById('play');
playBtn.addEventListener('click', ()=>{
    document.getElementById('happinessBar').innerText = 'Happiness: ' + tama.setTimeDown();
    if(tama.getTimeDown() >= 10){
        console.log("gettimedown = 10")
        tama.adjustTimeDown();
    }
});

function start(){
    intervalID = setInterval(update, 2200);
}

function update(){
    let cstate = tama.getState();
    if (cstate === "ANGRY") {
        img.src = lovelinAngry.href;
    }
    if (cstate === "HAPPY") {
        img.src = lovelinHappy.href;
    }
    
    if(tama.getTimeDown() == 0 || tama.getTimeUp() == 10) { 
        clearInterval(intervalID);
        img.src = lovelinRIP.href;
    }
}


