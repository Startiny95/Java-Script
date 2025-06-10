/* 
document.querySelector("button").addEventListener("click", handleClick);
function handleClick(){
    alert("I have been clicked");
} 
*/

// anonymous function
/* 
document.getElementsByTagName("button").addEventListener("click", function (){
    alert("I have been clicked");
});
*/

// using for loop to add even listeners to all buttons 
/*
var buttons = document.getElementsByTagName(".drum")

for ( let i = 0 ; i < buttons.length ; i ++){
    buttons[i].addEventListener("click", function (){
    alert("I have been clicked");
})
}
*/

// angela's way of doing it: 
/*
var numberofDrumButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i < numberofDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {alert("I have been clicked");})
}
*/

/*
var audioW = new Audio ("sounds/crash.mp3");
audioW.play();
*/
/*
document.querySelectorAll('button')[0].addEventListener('click', function () {
    var audioW = new Audio ("/Java script/Drum Kit Starting Files/sounds/tom-1.mp3");
    audioW.play()
})
*/
/*
var numberofDrumButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i < numberofDrumButtons-3; i++){
    var soundSrc = "/Java script/Drum Kit Starting Files/sounds/tom-"+i+".mp3";
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var audioW = new Audio (soundSrc);
    audioW.play()
})
}
*/

document.querySelectorAll(".drum")[0].addEventListener("click", function(){
    var audioW = new Audio("sounds/tom-1.mp3")
    audioW.play()
})
document.querySelectorAll(".drum")[1].addEventListener("click", function(){
    var audioA = new Audio("sounds/tom-2.mp3")
    audioA.play()
})
document.querySelectorAll(".drum")[2].addEventListener("click", function(){
    var audioS = new Audio("sounds/tom-3.mp3")
    audioS.play()
})
document.querySelectorAll(".drum")[3].addEventListener("click", function(){
    var audioD = new Audio("sounds/tom-4.mp3")
    audioD.play()
})
document.querySelectorAll(".drum")[4].addEventListener("click", function(){
    var audioJ = new Audio("sounds/snare.mp3")
    audioJ.play()
})
document.querySelectorAll(".drum")[5].addEventListener("click", function(){
    var audioK = new Audio("sounds/crash.mp3")
    audioK.play()
})
document.querySelectorAll(".drum")[6].addEventListener("click", function(){
    var audioL = new Audio("sounds/kick-bass.mp3")
    audioL.play()
})

/*
var numberofDrumButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i < numberofDrumButtons; i++){
    var soundSrc = "/Java script/Drum Kit Starting Files/sounds/tom-"+i+".mp3";
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    console.log(this.innerHTML);
})
}
*/

// the code below is not working for me, but the above one works:
/*
var numberofDrumButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i < numberofDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttoninnerHtml = this.innerHtml;
    switch(buttoninnerHtml){
        case "w":
            var audiow = new Audio("sounds/tom-1.mp3");
            audiow.play()
            break;
        case "a":
            var audioa = new Audio("sounds/tom-2.mp3");
            audioa.play()
            break;
        case "s":
            var audios = new Audio("sounds/tom-3.mp3");
            audios.play()
            break;
        case "d":
            var audiod = new Audio("sounds/tom-4.mp3");
            audiod.play()
            break;
        case "j":
            var audioj = new Audio("sounds/snare.mp3");
            audioj.play()
            break;
        case "k":
            var audiok = new Audio("sounds/crash.mp3");
            audiok.play()
            break;
        case "l":
            var audiol = new Audio("sounds/kick-bass.mp3");
            audiol.play()
            break;
        default:
            console.log(buttoninnerHtml);
    }
})
}
*/