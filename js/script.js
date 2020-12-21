//----------button 1
let baseTune = new Audio(`audio/base.mp3`)
let playBase = function(){
    if(baseTune.paused){
        baseTune.play();
        baseTune.innerHTML = `▐▐`;
        } else {
        baseTune.pause();
        baseTune.innerHTML = `►`;
        }
    };
baseTune.addEventListener(`audio/click`, playBase)

//--------button 2
let alarmTune = new Audio(`alarm.wav`)
let playAlarm = function(){
    if(alarmTune.paused){
        alarmTune.play();
        alarmTune.innerHTML = `▐▐`;
        } else {
        alarmTune.pause();
        alarmTune.innerHTML = `►`;
        }
    };
alarmTune.addEventListener(`click`, playAlarm)

//--------button 3
let dangerTune = new Audio(`audio/danger.wav`)
let playDanger = function(){
    if(DangerTune.paused){
        dangerTune.play();
        dangerTune.innerHTML = `▐▐`;
        } else {
        dangerTune.pause();
        dangerTune.innerHTML = `►`;
        }
    };
dangerTune.addEventListener(`click`, playDanger)   

//--------button 4
let rollTune= new Audio(`audio/roll.wav`)
let playRoll = function(){
    if(rollTune.paused){
        rollTune.play();
        rollTune.innerHTML = `▐▐`;
        } else {
        rollTune.pause();
        rollTune.innerHTML = `►`;
        }
    };
rollTune.addEventListener(`click`, playRoll)
    
//----------button 5
let teleportTune= new Audio(`audio/teleport.wav`)
let playTeleport = function(){
    if(teleportTune.paused){
        teleportTune.play();
        teleportTune.innerHTML = `▐▐`;
        } else {
        teleportTune.pause();
        teleportTune.innerHTML = `►`;
        }
    };
teleportTune.addEventListener(`click`, playTeleport)


//-----------button 6
let beemTune = new Audio(`audio/beem.wav`)
let playBeem = function(){
    if(beemTune.paused){
        beemTune.play();
        beemTune.innerHTML = `▐▐`;
        } else {
        beemTune.pause();
        beemTune.innerHTML = `►`;
        }
    };
beemTune.addEventListener(`click`, playBeem)



///NOTE
///I've been up all night trying to figure out why none of the audio is not working. I gave up :'(
