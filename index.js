const colorArray = ["green","red","yellow","blue"];
let level = 0;
let state = true;
var userInput = [];

var randomSequence=[];  




function nextSequence(){
  userInput.length=0;
  level++;
  $("h1").text("Level "+level);
  let randomNumber = Math.floor(Math.random()*4);
  let randomColor = colorArray[randomNumber];
  randomSequence.push(randomColor);
  $("."+randomColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playMusic(randomColor);
  console.log(randomSequence.length);
  
 
}
function checkAnswer(currentid){
 
 if(userInput[currentid]===randomSequence[currentid]){
   
  if (userInput.length===randomSequence.length){
   
    console.log("hey");
   setTimeout(function() { 
    nextSequence()},1000);
  
  }
  
 }
 else if (userInput[currentid]!=randomSequence[currentid]){
 
  console.log("Nothey");
  $("h1").text("Wrong pattern press any button to restart");
  playMusic("wrong");
  $("body").addClass("game-over");
  setTimeout(function(){
    $("body").removeClass("game-over")
  },200)
 startOver();
  
 }
}
//// wrong answer

   

 function startOver() {
  
  
  level=0;
  randomSequence=[];
  state=true;
  
 }

/// function to play music
 function playMusic(colorKey){
  var music = new Audio(colorKey+".mp3");
  music.play();
}
///presss a for code to run
$(document).keydown(function(event){
  

  if (state===true){
    
  nextSequence();
  state=false;}
console.log("Heyy");

})
$(".btn").click(function () {
  
  var butt = $(this).attr("id");
  userInput.push(butt);
  playMusic(butt);
   $("."+butt).addClass("pressed");
   setTimeout(function(){$("."+butt).removeClass("pressed");},120);
   
   console.log(userInput);
   checkAnswer(userInput.length-1);
})   
 