const  dEl=document.getElementById('d');
const  hEl=document.getElementById('h');
const  mEl=document.getElementById('m');
const sEl=document.getElementById('s');
const  newYear="1 jan 2024";
function countdown()
{
    const newYearsDate=new Date(newYear);
    const currentDate=new Date();
    const totalSeconds=(newYearsDate-currentDate)/1000;
    const d=Math.floor(totalSeconds/3600/24)
    const h=Math.floor(totalSeconds/3600)%24;
    const m=Math.floor(totalSeconds/60)%60;
    const s = Math.floor(totalSeconds)%60;
    const s= Math.floor(totalSeconds)%60;
    
dEl.innerHTML=d;
hEl.innerHTML=h;
sEl.innerHTML=m;
 sEl.innerHTML = s;
console.log(d,h,m,s);
}
countdown();
setInterval(countdown ,1000);
