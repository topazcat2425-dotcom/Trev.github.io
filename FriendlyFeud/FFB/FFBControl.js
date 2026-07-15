let muted = false;

function mute() {
    muted = !muted;
}

function connected() {
    hide("IDTaker");
    show("theActualBoard");
    pConn.sendMsg("board");
}

function showAns(char) {
    const id = "c" + char
    const question = document.getElementById(id);


    if (!muted) {
        const audio = new Audio("AudioFiles/RIGHT.m4a");
        audio.play();
    }

    // question.classList.remove("turnIn");
    question.classList.add("turnOut");
}

function reset() {
    for (let i = 1; i <= 8; i++) {
        document.getElementById("c" + i).classList.remove("turnOut");
        // document.getElementById("c" + i).classList.add("turnIn");
        show("f" + i);
    }
    document.getElementById("score").innerHTML = 0;
}

function wrong(xNum) {

    if (!muted) {
        const audio = new Audio("AudioFiles/WRONG.m4a");
        audio.play();
    }
    show("xcontain");

    showMyX(parseInt(xNum));

    setTimeout(() => {
        hideMyX(parseInt(xNum));
        hide("xcontain");
    }, 1000);
}

function hideMyX(num) {
    for (let i = 1; i <= num; i++) {
        hide("x-" + i);
    }
}

function showMyX(num) {
    for (let i = 1; i <= num; i++) {
        show("x-" + i);
    }
}

function addScore(val) {
    const scoreTotal = document.getElementById("score");
    let scoreVal = parseInt(val) + parseInt(scoreTotal.innerHTML);
    scoreTotal.innerHTML = scoreVal;
}

// function setAnswers(msgArr) {
//     console.log(msgArr);
//     for (let i = 1; i <= msgArr.length; i++) {
//         changeText(i, msgArr[i - 1]);
//     }
//     for (let i = maxNum; i > msgArr.length; i--) {
//         removePanel(i);
//     }
// }

// function changeText(number, msgArr) {
//     console.log(msgArr)
//     document.getElementById("q" + number).innerHTML = msgArr[0].toUpperCase();
//     document.getElementById("a" + number).innerHTML = msgArr[1];
// }

// function removePanel(number) {
//     hide("f" + number);
// }

