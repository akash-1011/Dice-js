var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomUrl1 = "./images/dice"+randomNumber1+".png";
var img1 = document.querySelector('.img1');
img1.setAttribute("src",randomUrl1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomUrl2 = "./images/dice"+randomNumber2+".png";
var img2 = document.querySelector('.img2');
img2.setAttribute("src",randomUrl2);

var heading = document.querySelector("h1");

if(randomNumber1>randomNumber2){
    heading.innerHTML = "🚩 Play 1 Wins!";
} else if (randomNumber2>randomNumber1){
    heading.innerHTML = "Play 2 Wins 🚩!";
} else {
    heading.innerHTML = "Draw";
}