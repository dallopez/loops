//variables
var animals = ["dog", "fish", "cat", "shark", "cat", "dog"];
var i;
//if animal equal dog then it equals borf
for(var i=0; i<animals.length; i++){
  if (animals[i]=="dog"){
    document.querySelector(".part"+i).innerHTML="borf borf";
 //if animal equals cat then it equals i am cat
  } else if (animals[i]=="cat"){
    document.querySelector(".part"+i).innerHTML="I am a cat.";
  } else {
    document.querySelector(".part"+i).innerHTML="I am an animal.";
  } 
}