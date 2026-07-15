
function parseMessage(message, num) {

    if (Array.isArray(message)) {
        whichArray(message);
        return
    }

    splitted = message.toString().split('|');

    switch (splitted[0]) {
        case "name":
            addTeam(splitted[1], num);
            connControl.sendMessage(num, "you are fake news");
            break;
        case "letMeAnswer":
            connControl.sendMessageAll("freeze");
            connControl.sendMessage(num, "answer now");

            enableTeams(false);
            specialEnable(num);
            setxMode(1);
            // TODO timecode shit
            setTimeout(() => {
                // TODO function after 3000 seconds
                connControl.sendMessageAll("at ease");
            }, 5000);

            break;
        default:
            break;
    }
}

function whichArray(message) {
    if (Array.isArray(message[0])) {
        setAnswers(message);
        connControl.sendMessageBoard(message);
    } else {
        console.log("KEYS!");
        console.log(message);
        setButtons(message);
        // TODO reset score
        resetScore();
    }
}

function showCode(code) {
    theNewCode = code.substring(0, 4) + " " + code.substring(4);
    document.getElementById("theCode").innerHTML = theNewCode;
}

// lists connections we have.
function listConn() {
    conn.forEach(element => {
        console.log(element.peer);
    });
}


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
        case 'l':
            listConn();
            break;
        case 'd':
            addButton(1, "really long ass string, trust me this thing is massive");
            break;
        case 'x':
            getKeys();
            break;
        case 'h':
            ableCode();
            break;
        case 'm':
            mute();
            break;
        default:
            break;
    }
}

function ableCode() {
    const div = document.getElementById("theCode");
    if (div.classList.contains("hidden")) {
        show("theCode");
    } else {
        hide("theCode");
    }
}

function mute() {
    connControl.sendMessageAll("mute");
}

// function showAns(char) {
//     const id = current + "-" + char
//     const question = document.getElementById(id);
//     console.log(id);

//     const score = document.getElementById("s" + id);
//     const currentScore = document.getElementById("score");

//     if (score.classList.contains("unused")) {
//         question.classList.add("animate-ping");
//         if (!muted) {
//             const audio = new Audio("RIGHT.m4a");
//             audio.play();
//         }
//         currentScore.innerHTML = Math.round(currentScore.innerHTML) + Math.round(score.innerHTML);
//         score.classList.remove("unused");
//         setTimeout(() => {
//             question.classList.add("hidden");// Logs correctly
//         }, 800);
//     }
// }

// function timeIn() {
//     question.classList.add("hidden");
// }

// function nextQuestion() {
//     const currentQ = document.getElementById("qnum");
//     const currentScore = document.getElementById("score");
//     current++;
//     currentQ.innerHTML = current;
//     currentScore.innerHTML = "0";
// }


// function reset() {
//     for (let i = 1; i <= exes; i++) {
//         const x = document.getElementById("x-" + i);
//         x.classList.add("hidden");
//     }
//     exes = 0;
// }

// function decideTeam(teamNum) {
//     const scoreboard = document.getElementById("score-" + teamNum);
//     const currentScore = document.getElementById("score");
//     scoreboard.innerHTML = Math.round(scoreboard.innerHTML, 10) + Math.round(currentScore.innerHTML);
//     currentScore.innerHTML = "0";
// }
// function isNumber(n) { return !isNaN(parseFloat(n)) && !isNaN(n - 0) }