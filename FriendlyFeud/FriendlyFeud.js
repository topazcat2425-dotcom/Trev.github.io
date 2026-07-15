var hereID = makeid(8);
var peer = new Peer(hereID, { "debug": "2" });
var conn = [];

peer.on("open", function (id) {
    console.log("My peer ID is: " + id);
});

peer.on('connection', function (dataConnection) {
    console.log(dataConnection.peer);
    console.log("we have contact");
    // conn = peer.connect(dataConnection.peer, { "serialization": "binary-utf8" });
    conn.push(dataConnection);

    console.log('peer connected');
    dataConnection.on('open', function () {
        console.log('conn open');
    });
    dataConnection.on('data', function (data) {
        console.log(dataConnection.peer, "says", data);
    });
});

showCode(hereID);


let current = 1;
let questScore = 0;
let team1 = 0;
let team2 = 0;
let exes = 0;
let muted = false;

document.onkeydown = function (e) {
    e = e || window.event;

    bigassswitchstatement(e.key.toLocaleLowerCase());
};

function bigassswitchstatement(pressed) {

    console.log(pressed);
    if (isNumber(pressed)) {
        console.log(pressed);
        showAns(pressed);
    }

    switch (pressed) {
        case 'enter':
            nextQuestion();
            break;
        case 'a':
            decideTeam(1);
            break;
        case 'd':
            decideTeam(2);
            break;
        case 'x':
            wrong();
            break;
        case 'r':
            reset();
            break;
        case 'm':
            mute();
            break;
        default:
            break;
    }
}

function showAns(char) {
    const id = current + "-" + char
    const question = document.getElementById(id);
    console.log(id);

    const score = document.getElementById("s" + id);
    const currentScore = document.getElementById("score");

    if (score.classList.contains("unused")) {
        question.classList.add("animate-ping");
        if (!muted) {
            const audio = new Audio("RIGHT.m4a");
            audio.play();
        }
        currentScore.innerHTML = Math.round(currentScore.innerHTML) + Math.round(score.innerHTML);
        score.classList.remove("unused");
        setTimeout(() => {
            question.classList.add("hidden");// Logs correctly
        }, 800);
    }
}

function timeIn() {
    question.classList.add("hidden");
}

function nextQuestion() {
    const currentQ = document.getElementById("qnum");
    const currentScore = document.getElementById("score");
    current++;
    currentQ.innerHTML = current;
    currentScore.innerHTML = "0";
}

function wrong() {
    exes++;
    if (exes > 3) {
        exes = 1;
        for (let i = 1; i <= 3; i++) {
            const x = document.getElementById("x-" + i);
            x.classList.add("hidden");
        }
    }
    const x = document.getElementById("x-" + exes);
    if (!muted) {
        const audio = new Audio("WRONG.m4a");
        audio.play();
    }
    x.classList.remove("hidden");
    const contain = document.getElementById("xcontain");
    contain.classList.remove("hidden");
    setTimeout(drStrange, 1000);

}

function drStrange() {
    const contain = document.getElementById("xcontain");
    contain.classList.add("hidden");
}


function reset() {
    for (let i = 1; i <= exes; i++) {
        const x = document.getElementById("x-" + i);
        x.classList.add("hidden");
    }
    exes = 0;
}

function decideTeam(teamNum) {
    const scoreboard = document.getElementById("score-" + teamNum);
    const currentScore = document.getElementById("score");
    scoreboard.innerHTML = Math.round(scoreboard.innerHTML, 10) + Math.round(currentScore.innerHTML);
    currentScore.innerHTML = "0";
}
function isNumber(n) { return !isNaN(parseFloat(n)) && !isNaN(n - 0) }

function mute() {
    muted = !muted;
}



function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}