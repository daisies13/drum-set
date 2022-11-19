//detecting length of no.of buttons
var noOfButton=document.querySelectorAll(".drum").length;
// for detecting button press
for(var i=0; i<noOfButton; i++){
  document.querySelectorAll("button")[i].addEventListener("click",function(){
    //for selecting a click noOfButton
    var buttonInnerHtml=this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
}

//detecting key press

document.addEventListener("keydown",function (event){
  makeSound(event.key);
  buttonAnimation(event.key);

});

//function to make sound

function  makeSound(key){

  switch (key) { //  fo selecting different audio
        case "w":
            var tom1= new Audio('sounds/tom-1.mp3'); //fot tom-1
            tom1.play();
        break;
        case "a":
            var tom2= new Audio('sounds/tom-2.mp3'); //for tom-2
            tom2.play();
        break;
        case "s":
            var tom3= new Audio('sounds/tom-3.mp3'); //for tom-3
            tom3.play();
        break;
        case "d":
            var tom4= new Audio('sounds/tom-4.mp3'); //for tom-4
            tom4.play();
        break;
        case "j":
            var crash= new Audio('sounds/crash.mp3'); //for crash
            crash.play();
        break;
        case "k":
            var kick= new Audio('sounds/kick-bass.mp3'); //for kick-bass
            kick.play();
        break;
        case "l":
            var snare= new Audio('sounds/snare.mp3'); //for snare
            snare.play();
          break;
        default: console.log(buttonInnerHtml);
    }
}



function buttonAnimation(currentKey){
  //for applying class
  var activeButton=document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
 // for removing class
  setTimeout(function (){
    activeButton.classList.remove("pressed");
  },100);

}
