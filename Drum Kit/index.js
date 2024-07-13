function playTheLetter(letter)
{
    switch(letter)
    {
        case "w" :
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;

        case "a" :
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;

        case "s" :
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;

        case "d" :
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;

        case "j" :
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
        break;

        case "k" :
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        break;

        case "l" :
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        break;

        default: console.log(letter);
    }
}

function buttonAnimation(key)
{
    var activeButton = document.querySelector("."+key);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}

function whenClicked()
{
    var letter = this.innerHTML;
    playTheLetter(letter);
    buttonAnimation(letter);
}

var buttonList = document.querySelectorAll("button");
var i=0;

for (i=0; i<buttonList.length; i++)
{ buttonList[i].addEventListener("click", whenClicked); }

document.addEventListener("keydown", function (event)
{
    playTheLetter(event.key);
    buttonAnimation(event.key);
});