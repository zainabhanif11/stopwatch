window.onload = function() {
    let minutes = 0;
    let second = 0;
    let tens = 0;
    let appendminutes = document.querySelector(`#minutes`);
    let appendtens = document.querySelector(`#tens`);
    let appendsecond = document.querySelector(`#seconds`);
    let startBtn = document.querySelector(`#start`);
    let stopBtn = document.querySelector(`#stop`);
    let resetBtn = document.querySelector(`#reset`);
    let Interval;


const startTimer =() => {
    tens++;
    if(tens <= 9){
      appendtens .innerHTML = '0' + tens
    }
    if(tens > 9){
        appendtens .innerHTML =  tens;
      }
      if(tens > 99){
        second++;
        appendsecond.innerHTML = '0' + second;
        tens = 0;
        appendtens.innerHTML= '0' + 0;
       }
       if(second > 9){
        second++;
        appendsecond.innerHTML = second;
       }
       if(second > 59){
        minutes++
        appendminutes.innerHTML = '0' + minutes;
        second = 0;
        appendsecond.innerHTML = '0' + 0;
       }  
};

startBtn.onclick = () => {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
};
stopBtn.onclick = () =>{
    clearInterval(Interval)
}
 resetBtn.onclick =() =>{
    clearInterval(Interval)
    tens = 0;
    second = 0;
    minutes = 0;
    appendtens.innerHTML = tens;
    appendsecond.innerHTML = second;
    appendminutes.innerHTML = minutes;
};
};
