function botChoice (){
    let choices = ["Rock","Paper","Scissors"]
    let bot = choices[Math.floor(Math.random() * 3)];
    return bot;
}

let score = 0;

function scoreTracker (newScore){
    score = newScore
    document.querySelector('.ScoreTracker h1').innerText = score;
}

function results (hand, botPick){
    document.querySelector('#userPick').removeAttribute("style");
    document.querySelector('.userhand div').removeAttribute("style");
    document.querySelector('#userPick').style.animationName="none";
     if (hand === "Rock" && botPick === "Scissors" || hand === "Scissors" && botPick === "Paper" || hand === "Paper" && botPick === "Rock" ) {

        document.querySelector('#result').innerText = "You Win!";
        document.querySelector('#userPick').style.filter = "drop-shadow(0 0 1.5rem #E7F6F2)";
        document.querySelector('.userhand div').style.transform = "scalex(-1) rotate(-35deg)"
        document.querySelector('#userPick').style.animationName = "tada";
        document.querySelector('#userPick').style.animationDuration = "1.5s";
        document.querySelector('#userPick').style.animationIterationCount = "infinite";
        scoreTracker(score+1);

    } else if ( hand === botPick){
        document.querySelector('#result').innerText = "Draw!";
    } else {document.querySelector('#result').innerText = "You Lost!";
    document.querySelector('#userPick').style.animationName="hinge";
    document.querySelector('#userPick').style.animationDuration="3s";}
}



const userChoice = (hand) => {
    console.log(hand);
    //hide the current page
    document.querySelector('.hands').style.display = "none";

    //show the new page 
    document.querySelector('.results').style.display = "flex";

    //show the user choice with bot choice

    let botPick = botChoice();

    document.querySelector('#userPick').src = `img/${hand}.png`;
    document.querySelector('#botPick').src = `img/${botPick}.png`;
    //show the winner
   results(hand, botPick)
}


function playagain (){
    document.querySelector('.results').style.display = "none";
    document.querySelector('.hands').style.display = "flex";
}
