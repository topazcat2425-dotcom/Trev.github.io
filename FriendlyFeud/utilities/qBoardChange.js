const maxNum = 8;

function setAnswers(msgArr) {
    console.log(msgArr);
    for (let i = 1; i <= msgArr.length; i++) {
        changeText(i, msgArr[i - 1]);
    }
    for (let i = maxNum; i > msgArr.length; i--) {
        removePanel(i);
    }
}

function changeText(number, msgArr) {
    console.log(msgArr)
    if (checkSize(msgArr[0])) {
        document.getElementById("q" + number).classList.replace("text-5xl", "text-2xl");
    } else {
        document.getElementById("q" + number).classList.replace("text-2xl", "text-5xl");
    }
    document.getElementById("q" + number).innerHTML = msgArr[0].toUpperCase();
    document.getElementById("a" + number).innerHTML = msgArr[1];
}

function removePanel(number) {
    hide("f" + number);
}

function checkSize(text) {
    return text.length > 30;
}