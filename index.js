let numOfButton = document.querySelectorAll(".drum").length;

for (let i = 0; i < numOfButton; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let buttontext = this.textContent;
    makeSound(buttontext);
   
  });
}

document.addEventListener("keypress", function (event){
    makeSound(event.key);
})

function makeSound (key){
       switch (key) {
         case "w":
           const tom1 = new Audio("tom-1.mp3");
           tom1.play();
           break;
         case "a":
           const tom2 = new Audio("tom-2.mp3");
           tom2.play();
           break;
         case "s":
           const tom3 = new Audio("tom-3.mp3");
           tom3.play();
           break;
         case "d":
           const tom4 = new Audio("tom-4.mp3");
           tom4.play();
           break;
         case "j":
           const snare = new Audio("snare.mp3");
           snare.play();
           break;
         case "k":
           const crash = new Audio("crash.mp3");
           crash.play();
           break;
         case "l":
           const kick = new Audio("kick-bass.mp3");
           kick.play();
           break;
         default:
           console.log(key);
       }
}
