let xCount = 1;
let xMode = 0;

function wrong() {
    connControl.sendMessageBoard("WRONG|" + xCount);
    console.log(xMode);

    xCount += 1;
    if (xCount > 3) {
        xCount = 1;
        setxMode(2);
    }
}

function wrongOnce() {
    connControl.sendMessageBoard("WRONG|1");
}

function resetXCount() {
    xCount = 1;
}

function wrongMode() {
    enableTeams(false);
    switch (xMode) {
        case 0:
            wrongOnce();
            break;
        case 1:
            wrong();
            break;
        case 2:
            wrongOnce();
            break;
        default:
            break;
    }
}

function setxMode(val) {
    xMode = val;
}

function getMode() {
    return (xMode);
}