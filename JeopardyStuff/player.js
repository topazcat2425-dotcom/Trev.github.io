const client = mqtt.connect('wss://broker.hivemq.com:8884/mqtt');
var teamID = -1;
var namedTeam
var question = false;
var answering = false;
var gameStart = false;

console.log(mqtt)
// console.log("hello!")
const url = 'broker.hivemq.com'

client.on('connect', function () {
    // console.log('Connected')
    hide("theConnector");
    // Subscribe to a topic
    client.subscribe('escalator', function (err) {
        if (!err) {
            // Publish a message to a topic

            popDownMessage();
            // sendMessage("word up to your mother")
        } else {
            console.log("what the fuck.")
            popUpMessage("we have a connection issue");
        }
    })

    // client.publish('elevator', 'Hello');
})

// Receive messages
client.on('message', function (topic, message) {
    // message is Buffer
    // buttonAnimate();
    parseMessage(message.toString());

})

function sendMessage(TBS) {
    client.publish('elevator', TBS);
}

function parseMessage(message) {
    if (!gameStart) {
        readCookies();
    }
    splitted = message.split(':');
    console.log(splitted.toString());
    console.log(teamID);
    console.log(splitted[0]);


    switch (splitted[0]) {
        case namedTeam:
            document.getElementById("iiii").textContent = namedTeam;
            setCookie("teamName", namedTeam);
            hide("otherThing");
            gameStart = true;

            poopIn("i");
            teamID = parseInt(splitted[1]);
            setCookie("teamID", teamID);
            setCookie("score", 0);
            console.log(teamID);
            break;

        case 'e':
            hideDailyDouble();
            break;

        // case 's':
        //     gameStart = true;
        //     break;

        case 'a':
            question = true;
            buttonAnimate();
            break;

        case teamID.toString():

            if (splitted[1] == "y") {
                addScore(splitted[2]);
            } else if (splitted[1] == "x") {
                console.log("WRONG!! ignore the next guy");
                // remove score lmao
                addScore(splitted[2] * -1);
            }
            break;

        case 'g':
            question = false;
            buttonDeAnimate();
            if (splitted[1] == teamID) {
                timerStart();
            }
            // else {
            //     // otherTeamAnswering();
            // }
            break;
        case 't':
            changeTimer(splitted[1]);
            break;
        case 'd':
            if (splitted[1] == teamID.toString()) {
                showDailyDouble();
            }
            break;
        case "flush":
            clearCookies();
            break;
        default:
            break;
    }
}

function sendTeamName() {
    namedTeam = document.getElementById("teamName").value;
    console.log(namedTeam);
    if (namedTeam.length > 0 && !namedTeam.includes(':')) {
        sendMessage("name:" + namedTeam);
    }
    return;
}

function poopIn(ID) {
    show(ID);
    const animated = document.getElementById(ID);

    animated.addEventListener('animationend', () => {
        // console.log("done! " + ID.length + " " + ID);

        if (ID.length < 5) {
            // console.log("TRUE!");
            // believe it or not, it will crash when it runs out of elements to pop in
            poopIn(ID.concat('i'));
        }

    });
}

function popUpMessage(message) {
    const div = document.getElementById("popUpText");
    show("popUp");
    div.textContent() = message;
}

function otherTeamAnswering() {
    // TODO do somemthing
}

function popDownMessage() {
    hide("popUp");
}

// function getNowTime() {
//   // var currentTime = new Date().getTime();
//   return (new Date().getTime());
// }

async function sleep(miliseconds) {
    var currentTime = new Date().getTime();
    var futureTime = currentTime + miliseconds;
    while (currentTime < futureTime) {
        currentTime = new Date().getTime()
    }
}

function buttonActivate() {
    console.log("activating not animating");
    const butt = document.getElementById("button");
    butt.disabled = false;
}

function buttonDeActivate() {
    console.log("deactivating not animating");
    const butt = document.getElementById("button");
    butt.disabled = true;
}

function noSpam() {
    // buttonDeAnimate();
    console.log("Attempt acknowledged");
    buttonDeActivate();
    if (question) {
        console.log("picking me");
        sendMessage("a:" + teamID.toString());
    }
    setTimeout(areWeStillOn, 500);
    return
}

function areWeStillOn() {
    console.log("are we still on?");
    console.log(question);
    buttonActivate();
}

function addScore(value) {
    console.log("CORRECT!");
    hide("timer");
    const score = document.getElementById("score");

    let scoreNum = getScoreCookie();
    scoreNum = parseInt(scoreNum) + parseInt(value)
    setCookie("score", scoreNum);
    score.innerHTML = scoreNum;

    negativeRed(score);
    sendMessage("r:" + teamID.toString() + ":" + score.innerHTML);
    // setCookie("score", parseInt(score.innerHTML) + parseInt(value));
}

function negativeRed(div) {
    if (div.innerHTML < 0) {
        div.classList.replace("text-amber-500", "text-red-600");
    } else {
        div.classList.replace("text-red-600", "text-amber-500");
    }
}

function buttonAnimate() {
    console.log("activating");
    const butt = document.getElementById("button");
    if (butt.classList.contains('timeOutCorner')) {
        butt.classList.remove('deactivate');
        butt.classList.remove('timeOutCorner');
        // butt.disabled = false;
        // butt.classList.add('activate');
    }
}

function buttonDeAnimate() {
    const butt = document.getElementById("button");
    if (!butt.classList.contains('timeOutCorner')) {
        // butt.disabled = true;
        butt.classList.add('deactivate');
        butt.classList.add('timeOutCorner');
    }
    return
}

function timerStart() {
    show("timer");
    const timer = document.getElementById('timer');

    timer.addEventListener('animationend', () => {
        hide("timer");
        sendMessage("f:" + teamID);
    });
}

function changeTimer(newTimeSeconds) {
    console.log("changing");
    const timer = document.getElementById('timer');

    timer.style.animationDuration = newTimeSeconds.toString() + "s";
}

function checkEnter(thing) {

    if (event.key === 'Enter') {
        thing.disabled = true;
        console.log(thing.value);
        hideDailyDouble();
        sendMessage("c:" + thing.value.toString());
    }
}

function showDailyDouble() {
    show("dd");
    const ddInput = document.getElementById("ddInput");
    ddInput.disabled = false;
    console.log("max is " + parseInt(document.getElementById("score").innerHTML));
    ddInput.max = parseInt(document.getElementById("score").innerHTML);
}

function hideDailyDouble() {
    hide("dd");
}

function hide(ID) {
    // console.log("hiding");
    const contain = document.getElementById(ID);
    if (!contain.classList.contains("hidden")) {
        contain.classList.add("hidden");
    }
}

function show(ID) {
    // console.log("showing");
    const contain = document.getElementById(ID);
    if (contain.classList.contains("hidden")) {
        contain.classList.remove("hidden");
    }
}

function setCookie(cname, cvalue) {
    const d = new Date();
    d.setTime(d.getTime() + (12 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function checkCookies(cookName) {
    if (document.cookie.split(";").some((item) => item.includes(cookName + "="))) {
        return (document.cookie
            .split("; ")
            .find((row) => row.startsWith(cookName + "="))
            ?.split("=")[1]);
    } else {
        return ("The Trevinator");
    }
}

function printCookies() {
    console.log("printing Cookies JACK!");
    console.log(checkCookies("teamName"));
    console.log(checkCookies("teamID"));
    console.log(checkCookies("score"));
}

function readCookies() {
    teamName = checkCookies("teamName");
    if (teamName != "The Trevinator") {
        gameStart = true;
        document.getElementById("iiii").textContent = teamName;
        hide("otherThing");
        poopIn("i");
        teamID = checkCookies("teamID");
        document.getElementById("score").innerHTML = getScoreCookie();
        negativeRed(document.getElementById("score"));
        // document.getElementById("score").innerHTML = checkCookies("score");
    }
}

function getScoreCookie() {
    const scoreNum = checkCookies("score");
    const score = document.getElementById("score");
    if (scoreNum == "The Trevinator") {
        return (0);
    } else {
        return (parseInt(scoreNum));
    }
}

function clearCookies() {
    console.log("clearing");
    document.cookie.split(';').forEach(cookie => {
        const eqPos = cookie.indexOf('=');
        const name = eqPos > -1 ? cookie.substring(0, eqPos).trim() : cookie.trim();
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;';
    });
    console.log(document.cookie);
}

document.onkeydown = function (e) {
    e = e || window.event;

    bigassswitchstatement(e.key.toLocaleLowerCase());
};

function bigassswitchstatement(pressed) {

    // console.log(pressed);
    // if (isNumber(pressed)) {
    //   console.log(pressed);
    //   showAns(pressed);
    // }

    switch (pressed) {
        case 'enter':
            if (!gameStart) {
                sendTeamName();
            }
            // poopIn("i");
            break;
        case ' ':
            // decideTeam(1);
            // console.log("x3!")
            document.getElementById("button").click();
            // console.log("clicked >.<")
            break;
        // case 'c':
        //     clearCookies();
        //     break;
        // case 'x':
        // timerBarGoDown("j");
        //   break;
        case 'r':
            printCookies();
            break;

        // case 'm':
        //   changeTimer(5);
        //   break;
        // case 'd':
        //   showDailyDouble();
        //   break;
        default:
            // pickMe();
            break;
    }
}