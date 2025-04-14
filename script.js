
let humanSelection;
let computerSelection;
let humanScore = 0;
let computerScore = 0;
const humanScoreText = document.getElementById("humanScore");
const computerScoreText = document.getElementById("computerScore");
const scoreAnnouncement = document.getElementById("scoreAnnouncement");

function clickRock() {
    humanSelection = "rock"
    document.getElementById("humanChoice").innerHTML = humanSelection
    document.getElementById("scoreAnnouncement").innerHTML = "You vs Cpu"
    rockAudio()
    resultScoreRefresh()
    computerPick()
    gameRoundAnnouncement()
}

function clickPaper() {
    humanSelection = "paper"
    document.getElementById("humanChoice").innerHTML = humanSelection
    document.getElementById("scoreAnnouncement").innerHTML = "You vs Cpu"
    paperAudio()
    resultScoreRefresh()
    computerPick()
    gameRoundAnnouncement()
}

function clickScissor() {
    humanSelection = "scissor"
    document.getElementById("humanChoice").innerHTML = humanSelection
    document.getElementById("scoreAnnouncement").innerHTML = "You vs Cpu"
    scissorAudio()
    resultScoreRefresh()
    computerPick()
    gameRoundAnnouncement()
}

function rockAudio() {
    const rockAudio = document.getElementById("rockAudio");
    rockAudio.play()
}

function paperAudio() {
    const paperAudio = document.getElementById("paperAudio");
    paperAudio.play()
}

function scissorAudio() {
    const scissorAudioOne = document.getElementById("scissorAudioOne");
    const scissorAudioTwo = document.getElementById("scissorAudioTwo");
    computerMathAudio = Math.floor(Math.random() * 2)
    if (computerMathAudio === 0) {
        scissorAudioOne.play()
    }
    else {
        scissorAudioTwo.play()
    }
}

function computerPick() {
    computerMath = Math.floor(Math.random() * 3)
    if (computerMath === 0) {
        computerSelection = "rock"
    }
    else if (computerMath === 1) {
        computerSelection = "paper"
    }
    else {
        computerSelection = "scissor"
    }
    document.getElementById("computerChoice").innerHTML = computerSelection
    textAnimation()
    return computerSelection
}

function gameRoundAnnouncement() {
    if (humanSelection == computerSelection) {
    }
    else if (humanSelection == "rock" & computerSelection == "scissor" ||
             humanSelection == "paper" & computerSelection == "rock" ||
             humanSelection == "scissor" & computerSelection == "paper"
    ) {
        humanScore = ++humanScore
        document.getElementById("humanScore").innerHTML = humanScore
        scoreWinAnimation()
    }
    else {
        computerScore = ++computerScore
        document.getElementById("computerScore").innerHTML = computerScore
        scoreLoseAnimation()
    }
        resultAnnouncement()
}

function textAnimation() {
    const humanChoice = document.getElementById("humanChoice")
    const computerChoice = document.getElementById("computerChoice")
    humanChoice.classList.add("text-animation-left")
    computerChoice.classList.add("text-animation-right")
    setTimeout(()=> {
    humanChoice.classList.remove("text-animation-left")
    computerChoice.classList.remove("text-animation-right")
    },100)
}

function scoreWinAnimation() {
    humanScoreText.classList.add("winner-color")
    setTimeout(()=> {
    humanScoreText.classList.remove("winner-color")
    },200)
}

function scoreLoseAnimation() {
    computerScoreText.classList.add("loser-color")
    setTimeout(()=> {
    computerScoreText.classList.remove("loser-color")
    },200)
}

function resultAnnouncement() {
    if (humanScore === 3) {
        humanScore = humanScore - humanScore;
        computerScore = computerScore - computerScore;
        document.getElementById("scoreAnnouncement").innerHTML = "You won!"
        scoreAnnouncement.classList.add("winner-color")
    }
    else if (computerScore === 3) {
        humanScore = humanScore - humanScore;
        computerScore = computerScore - computerScore;
        document.getElementById("scoreAnnouncement").innerHTML = "You lost!"
        scoreAnnouncement.classList.add("loser-color")
    }
    setTimeout(()=> {
        scoreAnnouncement.classList.remove("winner-color")
        scoreAnnouncement.classList.remove("loser-color")
    },200)
}

function resultScoreRefresh() {
    document.getElementById("humanScore").innerHTML = humanScore
    document.getElementById("computerScore").innerHTML = computerScore
}