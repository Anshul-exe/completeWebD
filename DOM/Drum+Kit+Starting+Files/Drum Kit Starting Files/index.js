// Detecting Click press for sound
var DrumNum = document.querySelectorAll(".drum").length;

for (var i = 0; i < DrumNum; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    sound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}
//___________________________________________________________

// Detecting Keyboard press for sound
document.addEventListener("keydown", function (event) {
  sound(event.key);
  buttonAnimation(event.key);
});
//___________________________________________________________

// Phle part me innerHTML ko sound function me pass kia as a char, aur fir keypress se sound function me char pas kiya
// phir sound function me switch case se sound ko play kia

// Sound function
function sound(key) {
  switch (key) {
    case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "s":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "f":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
      console.log(this.innerHTML);
      break;
  }
}

function buttonAnimation(charUsed) {
  var btnPressed = document.querySelector("." + charUsed);
  btnPressed.classList.add("pressed");

  setTimeout(function () {
    btnPressed.classList.remove("pressed");
  }, 100);
}

