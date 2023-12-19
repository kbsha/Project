let locationRand=Math.floor((Math.random()*5));
let location1=locationRand;    
let location2=location1+1;
let location3=location1+2;
    
let mis=0;
let hit=0;
let guesss=0;
let guess;
while(hit<3)
{
guess=prompt("Enter from 0 up to 6");
if(guess>6||guess<0)
{
    alert("enter thr corect guess !");
}
else
{
    shipBattle(guess);
    guesss=guesss+1;

}
}
function shipBattle(guess)
{
    
    if(guess==location1||guess==location2||guess==location3)
    {
        alert("Hit");
        hit=hit+1;
    }
    else{
        alert("Miss");
    }
    if(hit==3)
    {
        alert("You just sink The gadem Ship !");
        alert("With Aquaracy of : "+3/guesss);
    }
}