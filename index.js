// alert("hello")
var a = (Math.random()*10)%6;
a = Math.floor(a) + 1;
var temp = "images/dice"+a+".png";
document.querySelectorAll("img")[0].src = temp;

var b = (Math.random()*10)%6;
b = Math.floor(b) + 1;
var temp = "images/dice"+b+".png";
document.querySelectorAll("img")[1].src = temp;


if(a === b)
{
  document.querySelector("h1").innerHTML = "Draw!";
  document.getElementsByClassName("fa-brands fa-font-awesome")[0].remove();
  document.getElementsByClassName("fa-brands fa-font-awesome")[0].remove();
}
else if(a > b)
{
  document.querySelector("h1").innerHTML = "Player 1 Wins! 	&#128681";
  var e = document.getElementsByClassName("fa-brands fa-font-awesome")[1];
  e.remove();
}
else
{
  var e = document.getElementsByClassName("fa-brands fa-font-awesome ")[0];
  document.querySelector("h1").innerHTML = "Player 2 wins! 	&#128681" ;
  e.remove();
}


// temp.appendChild(ans);
