let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let strBtn = document.getElementById("str-btn");
let strCon = document.querySelector(".start-con");
let gameCon = document.querySelector(".game-con");

strBtn.addEventListener("click", function () {
    if (started == false) {
        strCon.style.display = "none";
        gameCon.classList.remove("blur");
        // console.log("started");
        started = true;

        setTimeout(levelUp, 1000);

    }
});


function flashUp(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 300);
}

let h3 = document.querySelector("h3");
let btns = ["red", "yellow", "green", "blue"];

function levelUp() {
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    // console.log(gameSeq);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    flashUp(randBtn);
}


function checker(idx) {

    if (userSeq[idx] == gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1500);
        }
    } else {
        // console.log("game over");
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 200);
       setTimeout( reset, 900);
    }
}

function btnPress() {
    // console.log(this);
    let btn = this;
    flashUp(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    // console.log(userSeq);

    checker(userSeq.length - 1);
}

let conBtn = document.querySelectorAll(".con-btn");
for (let btn of conBtn) {
    btn.addEventListener("click", btnPress);
}

let h2 = document.querySelector("h2");
function reset() {
 strCon.style.display = "flex";
    gameCon.classList.add("blur");
    h2.innerHTML = `Game over! <br>Your score is <b>${level-1}<b> <br>Press start to play again`;
    h3.innerText = "";

    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;

}