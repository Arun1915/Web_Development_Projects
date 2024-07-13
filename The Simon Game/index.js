function lostGame()
{
    $("body").addClass("game-over");
    setTimeout(function(){ $("body").removeClass("game-over")}, 100);
    $("h1").text("Game Over, press any key to restart");
    var wrong = new Audio("sounds/wrong.mp3");
    wrong.play();
}

function verifyEquailty(arr1, arr2)
{
    var len = arr2.length;
    for (var i=0; i<len; i++)
    {
        if (arr1[i] != arr2[i])
        { return 0; }
    }
    
    return 1;
}

// function waitForUserInput(i, n)
// {
//     setTimeout(function () {
//         if (i>n)
//         { waitForUserInput(); }
//     }, 1000);
// }


function singleRound()
{
    if (i==1)
    { $(document).off("keydown", singleRound); }
    //give the level number
    $("h1").text("Level " +i);

    //generate a random number and saving the random number
    var randomNum = Math.floor(Math.random()*4);
    series.push(randomNum);
    // console.log(randomNum);
    // console.log(series);
    
    //communicating to the user, which number was generated
    switch(randomNum)
    {
        case 0:
            $("#green").animate({opacity: 0.5}).animate({opacity: 1});
            var green = new Audio("sounds/green.mp3");
            green.play();
            break;

        case 1:
            $("#red").animate({opacity: 0.5}).animate({opacity: 1});
            var red = new Audio("sounds/red.mp3");
            red.play();
            break;

        case 2:
            $("#yellow").animate({opacity: 0.5}).animate({opacity: 1});
            var yellow = new Audio("sounds/yellow.mp3");
            yellow.play();
            break;

        case 3:
            $("#blue").animate({opacity: 0.5}).animate({opacity: 1});
            var blue = new Audio("sounds/blue.mp3");
            blue.play();
            break;
    }
}

var lost = 0;
var i=1;
var series = [];
var seriesByUser = [];

//to take the user input
$("#green").click(function() {
    seriesByUser.push(0);
    $("#green").animate({opacity: 0.5}).animate({opacity: 1});
    var green = new Audio("sounds/green.mp3");
    green.play();
    if(!verifyEquailty(series, seriesByUser))
    {
        lostGame();
        setTimeout(function(){lost =1;}, 1000);
    }
    
    // console.log(seriesByUser);
    setTimeout(function () {
        if (!lost)
        {
            if (series.length == seriesByUser.length)
            {
                i++;
                seriesByUser = [];
                singleRound();
            }
        }
        else
        {
            lost = 0;
            i =1;
            seriesByUser = [];
            series = [];
            $(document).keydown(singleRound);
        }        
            }, 1000);
});

$("#red").click(function() {
    seriesByUser.push(1);
    $("#red").animate({opacity: 0.5}).animate({opacity: 1});
    var red = new Audio("sounds/red.mp3");
    red.play();
    if(!verifyEquailty(series,seriesByUser))
    {
        lostGame();
        setTimeout(function(){lost =1;}, 1000);
    }
    
    // console.log(seriesByUser);
    setTimeout(function () {
        if (!lost)
        {
            if (series.length == seriesByUser.length)
            {
                i++;
                seriesByUser = [];
                singleRound();
            }
        }
        else
        {
            lost = 0;
            i =1;
            seriesByUser = [];
            series = [];
            $(document).keydown(singleRound);
        }        
            }, 1000);
});

$("#yellow").click(function() {
    seriesByUser.push(2);
    $("#yellow").animate({opacity: 0.5}).animate({opacity: 1});
    var yellow = new Audio("sounds/yellow.mp3");
    yellow.play();
    if(!verifyEquailty(series,seriesByUser))
    {
        lostGame();
        setTimeout(function(){lost =1;}, 1000);
    }
    
    // console.log(seriesByUser);
    setTimeout(function () {
        if (!lost)
        {
            if (series.length == seriesByUser.length)
            {
                i++;
                seriesByUser = [];
                singleRound();
            }
        }
        else
        {
            lost = 0;
            i =1;
            seriesByUser = [];
            series = [];
            $(document).keydown(singleRound);
        }        
            }, 1000);
});

$("#blue").click(function() {
    seriesByUser.push(3);
    $("#blue").animate({opacity: 0.5}).animate({opacity: 1});
    var blue = new Audio("sounds/blue.mp3");
    blue.play();
    if(!verifyEquailty(series,seriesByUser))
    {
        lostGame();
        setTimeout(function(){lost =1;}, 1000);
    }
    
    // console.log(seriesByUser);
    setTimeout(function () {
        if (!lost)
        {
            if (series.length == seriesByUser.length)
            {
                i++;
                seriesByUser = [];
                singleRound();
            }
        }
        else
        {
            lost = 0;
            i =1;
            seriesByUser = [];
            series = [];
            $(document).keydown(singleRound);
        }        
            }, 1000);
});

$(document).keydown(singleRound);