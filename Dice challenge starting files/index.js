console.log("Hello from JavaScript!");

var randomNumber1 = Math.random();
randomNumber1 = Math.floor((randomNumber1 * 6) + 1);

var diceimgNum = 'dice' + randomNumber1 + '.png';

var randomImgSrc1 = '/Java Script/Dice challenge starting files/images/'+ diceimgNum;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImgSrc1);

///////////////////////////////////////////////////////////////////////////////////////////////////////////

var randomNumber2 = Math.random();
randomNumber2 = Math.floor((randomNumber2 * 6) + 1);

var diceimgNum2 = 'dice' + randomNumber2 + '.png';
var randomeImgSrc2 = '/Java Script/Dice challenge starting files/images/' + diceimgNum2;

var image2 = document.querySelectorAll('img')[1];
image2.setAttribute('src', randomeImgSrc2)

////////////////////////////////////////////////////////////////////////////////////////////////////////////

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins !"
} 
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins !"
} else {
    document.querySelector("h1").innerHTML = "Draw !"
}