function getQuestion(num) {
    connControl.sendMessageQuestion("I demand=" + num);
}

function getKeys() {
    connControl.sendMessageQuestion("key me")
}