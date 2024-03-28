$( document ).ready(function() {

//var hufflepuff = "https://www.pngkey.com/png/full/43-439176_51-hufflepuff-crest-transparent-hufflepuff-house.png";
var hufflepuff = "https://www.nicepng.com/png/full/43-439104_hufflepuff-crest-harry-potter-banner-harry-potter-hufflepuff.png"

//var gryffindor = "https://static.wikia.nocookie.net/harryalbuspotter/images/8/8e/0.31_Gryffindor_Crest_Transparent.png/revision/latest/scale-to-width-down/340?cb=20181022144149";
var gryffindor = "https://www.nicepng.com/png/full/433-4334429_gryffindor-crest-png.png";

//var ravenclaw = "https://static.wikia.nocookie.net/pottermore/images/4/40/Ravenclaw_Crest_1.png/revision/latest?cb=20140604194505";
var ravenclaw = "https://www.nicepng.com/png/full/439-4398613_ravenclaw-harry-potter-ravenclaw-house-crest.png"

//var slytherin = "https://static.wikia.nocookie.net/harrypotter/images/0/00/Slytherin_ClearBG.png/revision/latest/scale-to-width-down/871?cb=20161020182557";
var slytherin = "https://www.nicepng.com/png/full/226-2269054_harry-potter-slytherin-crest-juniors-v-neck-t.png"

var counter = 0; 

    $(".container").hide();
    $(".start").show();
    $(".question1").hide();
    $(".question2").hide();
    $(".question3").hide();
    $(".question4").hide();

$(".start-btn").click(function(){
    $(".container").show();
    $(".start").hide();
    $(".question1").show();
    $(".question2").hide();
    $(".question3").hide();
    $(".question4").hide();
    $(".reset").hide();
});

$(".btn1").click(function(){
   $(".container").show();
   $(".question1").hide();
   $(".question2").show();
   $(".question3").hide();
   $(".question4").hide();
   $(".reset").hide();
});  

$(".btn2").click(function(){
   $(".container").show();
   $(".question1").hide();   
   $(".question2").hide();
   $(".question3").show();
   $(".question4").hide();
   $(".reset").hide();
});  

$(".btn3").click(function(){
   $(".container").show();
   $(".question1").hide();   
   $(".question2").hide();
   $(".question3").hide();
   $(".question4").show();
   $(".reset").hide(); 
});  

$(".button").click(function(){
   $(".container").show();
   $(".start").hide();
   $(".question1").hide();   
   $(".question2").hide();
   $(".question3").hide();
   $(".question4").hide();
   $(".reset").show();
});  


$(".button").click(function(){

    counter = counter + 1;
    $(".counter").text("The quiz was taken " + counter + " times");
    
var number = $(".scale").val();
var word = $(".word").val();
var creature = $(".creature").val();
var subject = $(".subject").val();
    
    if (parseInt(number)<6 && word.toLowerCase()==="loyal" && creature.toLowerCase()==="unicorn" && subject.toLowerCase()==="charms" ||
       parseInt(number)<6 && word.toLowerCase()==="loyal" && creature.toLowerCase()==="unicorn" && subject.toLowerCase()==="defense against the dark arts" ||        
       parseInt(number)<6 && word.toLowerCase()==="loyal" && creature.toLowerCase()==="phoenix" && subject.toLowerCase()==="charms" ||
       parseInt(number)<6 && word.toLowerCase()==="loyal" && creature.toLowerCase()==="phoenix" && subject.toLowerCase()==="defense against the dark arts")
   
  {
    $(".result").text("You are a Hufflepuff!");
    $(".image").append("<img src=" + hufflepuff + ">"); 
    $(".scale").val(""); 
    $(".word").val("");       
    $(".creature").val("");
    $(".subject").val("");
 }
    
   else if (parseInt(number)>=6 && word.toLowerCase()==="loyal" && creature.toLowerCase()==="phoenix" && subject.toLowerCase()==="defense against the dark arts" || 
           parseInt(number)>=6 && word.toLowerCase()==="loyal" && creature.toLowerCase()==="phoenix" && subject.toLowerCase()==="charms" || 
           parseInt(number)>=6 && word.toLowerCase()==="loyal" && creature.toLowerCase()==="unicorn" && subject.toLowerCase()==="defense against the dark arts" ||
           parseInt(number)>=6 && word.toLowerCase()==="loyal" && creature.toLowerCase()==="unicorn" && subject.toLowerCase()==="charms") 
       
  {
    $(".result").text("You are a Gryffindor!");
    $(".image").append("<img src=" + gryffindor + ">");
    $(".scale").val(""); 
    $(".word").val("");       
    $(".creature").val("");
    $(".subject").val("");
  }  

  else if (parseInt(number)<6 && word.toLowerCase()==="ambitious" && creature.toLowerCase()==="unicorn" && subject.toLowerCase()==="charms" || 
          parseInt(number)<6 && word.toLowerCase()==="ambitious" && creature.toLowerCase()==="unicorn" && subject.toLowerCase()==="defense against the dark arts" ||
          parseInt(number)<6 && word.toLowerCase()==="ambitious" && creature.toLowerCase()==="phoenix" && subject.toLowerCase()==="charms" ||
          parseInt(number)<6 && word.toLowerCase()==="ambitious" && creature.toLowerCase()==="phoenix" && subject.toLowerCase()==="defense against the dark arts")   
      
  {
    $(".result").text("You are a Ravenclaw!");    
    $(".image").append("<img src=" + ravenclaw + ">");  
    $(".scale").val(""); 
    $(".word").val("");       
    $(".creature").val("");
    $(".subject").val("");
 }  
    
  else if (parseInt(number)>=6 && word.toLowerCase()==="ambitious" && creature.toLowerCase()==="phoenix" && subject.toLowerCase()==="defense against the dark arts" ||
          parseInt(number)>=6 && word.toLowerCase()==="ambitious" && creature.toLowerCase()==="phoenix" && subject.toLowerCase()==="charms" ||
          parseInt(number)>=6 && word.toLowerCase()==="ambitious" && creature.toLowerCase()==="unicorn" && subject.toLowerCase()==="defense against the dark arts" ||
          parseInt(number)>=6 && word.toLowerCase()==="ambitious" && creature.toLowerCase()==="unicorn" && subject.toLowerCase()==="charms") 
 
  {
    $(".result").text("You are a Slytherin!");
    $(".image").append("<img src=" + slytherin + ">");  
    $(".scale").val(""); 
    $(".word").val("");       
    $(".creature").val("");
    $(".subject").val("");
 }  
       
else {
      $(".result").text("Try typing from the options!");
}
  
});
    

$(".reset").click(function() {
       $(".start").show();
       $(".container").hide();
       $(".result").empty(); 
       $(".image").empty(); 

});

});
    
