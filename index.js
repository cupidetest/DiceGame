
var randomVariable1=(Math.floor(Math.random()*6) + 1 );
var randomVariable2=(Math.floor(Math.random()*6) + 1);
console.log(randomVariable1);
console.log(randomVariable2);

var randomDiceImage1="dice" + randomVariable1 +".png";
var randomImg1= randomDiceImage1;

var randomDiceImage2="dice" + randomVariable2 +".png";
var randomImg2=randomDiceImage2;

document.querySelectorAll("img")[0].setAttribute("src", randomImg1);
document.querySelectorAll("img")[1].setAttribute("src", randomImg2);

if(randomVariable1>randomVariable2)
{
    document.querySelector("h1").innerHTML="Left wing wins :>";
}
else if(randomVariable2>randomVariable1)
{
    document.querySelector("h1").innerHTML="Right wing wins :>";
}
else
{
    document.querySelector("h1").innerHTML="DRAW, roll again :>";
}

