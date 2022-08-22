var myScoreDisplay = document.getElementById("my-score-display")
var computerScoreDisplay = document.getElementById("computer-score-display")
var me = document.getElementById("me")
var computer = document.getElementById("computer")
var start = document.getElementById("start")
var rock = document.getElementById("rock")
var paper = document.getElementById("paper")
var scissors = document.getElementById("scissors")
var index;
var interval = "";
var myScore = 0;
var computerScore = 0;



// setInterval(function(){
//     console.log("hello")
// }, 3000)

// setInterval(function(){
//     console.log("I just ran")
// }, 100)


// me.style.visibility = "hidden";

function hideBtns(){
    rock.style.display = "none"
    paper.style.display = "none"
    scissors.style.display = "none"
}

hideBtns()

function showBtns(){
    rock.style.display = "block"
    paper.style.display = "block"
    scissors.style.display = "block"
}

function youWin(){
    setTimeout(function(){
        alert("You Win!")
    }, 500);
    myScore++;
    myScoreDisplay.innerHTML = myScore;
    hideBtns();
    start.style.display = "block"
}

function computerWins(){
    setTimeout(function(){
        alert("Computer Wins!")
    }, 500);
    computerScore++;
    computerScoreDisplay.innerHTML = myScore;
    hideBtns();
    start.style.display = "block"
}

function draw(){
    setTimeout(function(){
        alert("It's a tie!")
    }, 500);
    hideBtns();
    start.style.display = "block"
}

var images = ["images/scissors.png", "images/rock.png", "images/paper.png"]

start.addEventListener("click", function (){
    start.style.display = "none";
    showBtns();
        interval = setInterval(function(){
        var random = Math.random() * 3;
        index = Math.floor(random);
        computer.setAttribute("src", images[index]);
        console.log("change")
    }, 100)
})

rock.addEventListener("click", function(){
    clearInterval(interval);
    if(images[index] == "images/rock.png"){
        draw();
    }else if(images[index] == "images/paper.png"){
        computerWins();
    }else if(images[index] == "images/scissors.png"){
        youWin();
    }
})

paper.addEventListener("click", function(){
    me.setAttribute("src", "images/paper.png")
    clearInterval(interval);
    if(images[index] == "images/rock.png"){
        youWin();
    }else if(images[index] == "images/paper.png"){
        draw();
    }else if(images[index] == "images/scissors.png"){
        computerWins();
    }
})

scissors.addEventListener("click", function(){
    me.setAttribute("src", "images/scissors.png")
    clearInterval(interval);
    if(images[index] == "images/rock.png"){
        computerWins;
    }else if(images[index] == "images/paper.png"){
        youWin();
    }else if(images[index] == "images/scissors.png"){
        draw();
    }
})

