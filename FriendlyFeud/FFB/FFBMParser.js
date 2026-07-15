function parseMessage(message) {

    if (Array.isArray(message)) {
        reset();
        setAnswers(message);
        return
    }

    let splitted = message.toString().split('|');

    switch (splitted[0]) {
        case "show":
            console.log(splitted[1]);
            showAns(splitted[1]);
            break;
        case "WRONG":
            wrong(parseInt(splitted[1]));
            break;
        case "addScore":
            //TODO addscore on this end too
            addScore(splitted[1]);
            break;
        case "resetBoard":
            reset();
            break;
        case "mute":
            mute();
            break;
        default:
            break;
    }
}