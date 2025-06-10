//constructor function
function Bellboy (name, age, experience){
    this.name = name;
    this.age = age;
    this.experience = experience;
}
var bellboy1 = new Bellboy('tom', 34, 5)

//methods
var bellboy2 = {
    name: 'thomas',
    age: 29,
    movesuitcase : function(){
        alert("may i take your suitcase?");
        pickupsuitcase();
        move();
    }
}
bellboy2.movesuitcase()

//methods in constructor function
function Bellboytype2 (name, age, experience){
    this.name = name;
    this.age = age;
    this.experience = experience;
    this.movesuitcase = function(){
        alert("may i take your suitcase?");
}
}
var bellboy3 = new Bellboytype2('thomas', 46, 8, )

// use of constructor function in the drum starting kit project
function Audio (filelocation){
    this.filelocation = filelocation;
    this.play = function(){
        //tap into the audio hardware
        //check the file at filelocation exists
        //check the file at filelocation is a sound file
        //play the file at filelocation
    }
}
var tom1 = new Audio("sounds/tom-1.mp3")
tom1.play()

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// understanding callbacks and how to respond to events
function anotherAddEventListener(typeOfEvent, callback){
    var eventThatHappened = {
        eventype: 'keypress',
        key:'p',
        durationOfKeypress: 2
}
if (eventThatHappened.eventType == typeOfEvent){
    callback(eventThatHappened);
}
}
anotherAddEventListener('keypress',function(event){
    console.log(event);
}
);

// keypress is deprecated now, so we have to use keydown method