function connected() {
    const div = document.getElementById("in");
    if (div.classList.contains("border-cyan-400")) {
        div.classList.replace("border-cyan-400", "border-green-400")
    }


}

async function parseMessage(message) {

    if (message.includes("demand")) {
        // "I demand=5"
        getQByNum(message.split("=")[1]);
        return
    }

    let arr = message.toString().split("|");

    switch (arr[0]) {
        case "Ready Up":

            console.log("we got 'em");
            pConn.sendMsg("QuestionHolder");

            // infiniteLoop();
            break;
        case "key me":
            pConn.sendMsg(getKeys());
            break;

        case "give":
            pConn.sendMsg(getQByNum(arr[1] - 1));
            break;
        case "pong":
            ponged();
            break;
        default:
            break;
    }
}

