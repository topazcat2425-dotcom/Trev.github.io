function teamCheck(tNum) {


    switch (getMode()) {
        case 0:
            console.log("nice, but its too early");
            break;
        case 1:
            // when every answer is gotten
            assignPoints(tNum);
            break;
        case 2:
            // when not every answer is gotten
            assignPoints(tNum);
            break;

        default:
            break;

    }

}

function assignPoints(tNum) {
    enableTeams(false);
    let value = parseInt(document.getElementById("score").innerHTML);

    const teamButton = document.getElementById("score" + tNum);
    value += parseInt(teamButton.innerHTML);
    teamButton.innerHTML = value;

    connControl.sendMessage(tNum, "Your new value|" + value);
    setxMode(2);
}