let tinmer;
let seconds=0;
let minutes=0;
let hours=0;
let isrunning=false;

function startstop()
{
    if(!isrunning)
    {
        timer=setInterval(updateDisplay,10);
        document.getElementById('startbutton').innerHTML='stop';
        isrunning=true;
    }
    else{
       clearInterval(timer);
       document.getElementById('startbutton').innerHTML='start';
       isrunning=false;
    }
    
}
function updateDisplay()
{
    seconds++;
    if(seconds==60)
    {
        seconds=0;
        minutes++;
        if(minutes==60)
        {
            minutes=0;
            hours++;
        }
    }
  let displayhours=hours;
  let displayminutes=minutes;
  let displayseconds=seconds;
  if(hours<10)
  {
    displayhours='0'+hours;
  }
  if(minutes<10)
  {
    displayminutes='0'+minutes;

  }
  if(seconds<10)
  {
    displayseconds='0'+seconds;
  }
  document.getElementById('display').innerHTML=displayhours+":"+displayminutes+":"+displayseconds;

}
let lapcounter=1;
function lap()
{
  let laptime=document.getElementById('display').innerText;
  let lapitem=document.createElement('p');
  lapitem.innerText='Lap'+lapcounter+':'+laptime;
  document.getElementById('laptimes').appendChild(lapitem);
  lapcounter++;
}
function reset()
{
    clearInterval(timer);
    document.getElementById('startbutton').innerHTML='start';
    isrunning=false;
    seconds=0;
    minutes=0;
    hours=0;
    document.getElementById('display').innerHTML='00:00:00';
    document.getElementById('laptimes').innerHTML='';
    lapcounter=1;
}