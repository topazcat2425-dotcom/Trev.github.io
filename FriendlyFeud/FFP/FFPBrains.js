function initalizeP() {
    const node = document.getElementById("in");
    node.addEventListener("keyup", ({ key }) => {
        if (key === "Enter") {
            console.log(node.value);
            // pConn.sendMsg("name|" + node.value);

        }
    });

    pConn.initConnect();
}

function summonSteve() {
    if (!document.getElementById("background").classList.contains("hidden")) {
        hide("background");
    } else {
        show("background");
    }
}

function grayBackground() {
    const bg = document.getElementById("background");

    if (!bg.classList.contains("grayscale")) {
        bg.classList.add("grayscale");

        document.getElementById("leButton").classList.add("grayscale-80");
    }
}

function ungrayBackground() {
    const bg = document.getElementById("background");

    if (bg.classList.contains("grayscale")) {
        bg.classList.remove("grayscale");

        document.getElementById("leButton").classList.remove("grayscale-80");
    }
}

function enableButton(active) {
    const button = document.getElementById("leButton");
    console.log("enabling");
    console.log(active);

    if (active) {
        // button.classList.add("active");
        button.classList.replace("border-amber-500", "border-green-400");
    } else {
        // button.classList.remove("active");
        button.classList.replace("border-green-400", "border-amber-500");
    }
    button.disabled = active;
}

function addScore(val) {
    const score = document.getElementById("score");

    let oldVal = parseInt(score.innerHTML);
    oldVal += val;
    score.innerHTML = oldVal;
}

function replaceScore(val) {
    document.getElementById("score").innerHTML = val;
}

// asks politely for a turn
function allowMe() {
    pConn.sendMsg("letMeAnswer");
    // enableButton(true);
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
        case 'a':
            grayBackground();
            break;
        case 'r':
            ungrayBackground();
            break;
        case 'd':
            // enableButton();
            break;
        default:
            break;
    }
}