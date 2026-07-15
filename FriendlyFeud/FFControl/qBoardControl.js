//TODO: this will reset the board on the controller end

function reveal(answerNum) {
    const theDiv = document.getElementById("f" + answerNum);
    enableTeams(false);
    grayify(theDiv);
    console.log(answerNum);
    enablility(theDiv);
    connControl.sendMessageBoard("show|" + answerNum);
    checkMode(answerNum);
}

function resetAll() {
    // check if buttons are disabled, if they are, graify them again

    for (let i = 1; i <= 8; i++) {
        const div = document.getElementById("f" + i);
        if (div.disabled) {
            grayify(div);
            enablility(div);
        }
        show(div.id);
    }
    resetScore();
}

function checkMode(answerNum) {

    if (!(getMode() == 2)) {
        //TODO add score
        addScore(answerNum);
    } else if (getMode() == 0) {
        setxMode(1);
        connControl.sendMessageAll("back to your stations")
    }
}

function addScore(answerNum) {
    let scoreVal = parseInt(document.getElementById("a" + answerNum).innerHTML);

    connControl.sendMessageBoard("addScore|" + scoreVal);

    const scoreTotal = document.getElementById("score");
    scoreVal += parseInt(scoreTotal.innerHTML);
    scoreTotal.innerHTML = scoreVal;
}