var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

//left one
var pictureLeft = "images/dice" + randomNumber1 + ".png";
document.getElementsByClassName("img1")[0].setAttribute("src", pictureLeft);

//right one
pictureRight = "images/dice" + randomNumber2 + ".png";
document.getElementsByClassName("img2")[0].setAttribute("src", pictureRight);


//vyhodnotenie

if (randomNumber1 > randomNumber2) {
  document.getElementsByTagName("h1")[0].textContent = "Ninka vyhráva!";
} else if (randomNumber2 > randomNumber1) {
  document.getElementsByTagName("h1")[0].textContent = "Jožko vyhráva!";
} else {
  document.getElementsByTagName("h1")[0].textContent = "Remíza!";
}
