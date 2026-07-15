function parseMessage(message) {

    let splitted = message.split("|");

    switch (splitted[0]) {
        case "Ready Up":
            console.log("we got 'em");
            id2player();
            break;
        case "you are fake news":
            console.log("we are a team now!");
            hide("nameTaker");
            break;

        case "freeze":
            console.log("we didn't answer in time :(");
            grayBackground();
            enableButton(false);
            break;
        //TODO disable the button for a lil bit
        case "answer now":
            ungrayBackground();
            enableButton(true);
            playBuzzer();
            break;
        case "at ease":
            ungrayBackground();
            enableButton(false);
            break;
        case "Your new value":
            replaceScore(parseInt(splitted[1]));
            break;
        case "back to your stations":
            grayBackground();
            enableButton(true);
            break;
        case "mute":
            mute();
            break;
        default:
            break;
    }
}