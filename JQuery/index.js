// to check if document is ready otherwise simply start using jquery
/*
$(document).ready(function(){
    $("h1").css('color','blue');
}) 
*/
// replacing query selector with jquery
// $("h1.title") or $("button")
$("h1").addClass("big-title margin-50");
$("h1").text("Good Bye");
$("button").text("dont click me");
$("button").html("<em>Hey<em>");
console.log($("img").attr("src"));
$("a").attr("href", "https://www.firefox.com");

// hot to get class applied to an element
console.log($("h1").attr("class"));
// adding event listeners using jquery
$("h1").click(function(){
    $("h1").css("color", "purple");
})
//.click is deprecated, use .on("click", func()) instead
$("button").on("click", function(){
    $("h1").css("color", "blue");
})
//.keypress is deprecated, use this instead
/*
$("input").keypress(function(event){
    console.log(event);
})
*/
$('input').on("keypress",function(event){
    console.log(event);
})
$(document).on('keypress', function(event){
    console.log(event);
})

$(document).on("keypress", function(event){
    $("h1").text(event.key);
})

// adding new button without altering the html file
$("h1").before("<button>New</button>");
$("h1").before(<button>New</button>);