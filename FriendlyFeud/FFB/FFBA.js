// family feud board analog

const questions = {
    "What is the most useless major?": [
        ["Business", 40],
        ["polisci/gender studies", 32],
        ["Computer Science", 32],
        ["English", 28],
        ["Communications", 22],
        ["Art", 22],
        ["Music", 16],
        ["Professional Golf Management", 6]],
    "What is the only genre of music they play in hell": [
        ["Country", 66],
        ["Metal", 26],
        ["Pop", 26],
        ["Phonk", 20],
        ["Classical", 20],
        ["Christian Rock", 20],
        ["Taylor Swift", 14],
        ["The genre emo bands switch too after they change from emo", 6]
    ]
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
        // case 'enter':
        //     console.log(Object.keys(questions));
        //     console.log(Object.values(questions));
        //     setAnswers(questions[Object.keys(questions)[0]]);
        //     break;
        case 'x':
            wrong(1);
            break;
        // case 'd':
        //     decideTeam(2);
        //     break;
        // case 'x':
        //     wrong();
        //     break;
        // case 'r':
        //     reset();
        //     break;
        // case 'm':
        //     mute();
        //     break;
        default:
            break;
    }
}