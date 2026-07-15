function panelChange() {

    const thePanel = document.getElementById("qPanel");
    const container = document.getElementById("qPanelContainer");

    // move the panel out
    thePanel.classList.toggle("slid-out");

    if (container.classList.contains("z-50")) {
        thePanel.classList.add("slide-out-panel");
        thePanel.classList.add("going-in");
    } else {
        thePanel.classList.add("slide-in-panel");
        container.classList.add("z-50");
    }

    // remove the animations from the panel
    setTimeout(() => {
        thePanel.classList.remove("slide-in-panel");
        thePanel.classList.remove("slide-out-panel");
        if (thePanel.classList.contains("going-in")) {
            container.classList.remove("z-50");
            thePanel.classList.remove("going-in");
        }
    }, 1000);

    // flip the arrow
    const arrow = document.getElementById("qPanelArrow");

    if (arrow.classList.contains("rotateRight")) {
        arrow.classList.replace("rotateRight", "rotateLeft");
    } else {
        arrow.classList.replace("rotateLeft", "rotateRight");
    }
}

function addButton(qNum, qString) {
    const grid = document.getElementById("qGrid");
    grid.innerHTML += '<button id="g' + qNum + '" onclick="idkDoSomething(this)" class="hover:scale-105 duration-300 transition hover:bg-red-300 bg-blue-600 rounded-xl place-content-center h-24 text-xl">' + qString + '</button>';
}

function idkDoSomething(div) {
    console.log("said something:");
    console.log(div.id.replace("g", ""));
    // TODO: something with this later
    // one we recieve the questions

    connControl.sendMessageQuestion("give|" + div.id.replace("g", ""));
    div.classList.replace("bg-blue-600", "bg-purple-300");
    div.disabled = true;
    panelChange();

    // RESET BOARD!!!
    resetAll();
}

function setButtons(keys) {
    document.getElementById("qInitHide").disabled = true;

    hideButtons();

    for (let i = 1; i <= keys.length; i++) {
        addButton(i, keys[i - 1]);
    }
}

function resetScore() {
    document.getElementById("score").innerHTML = 0;
}

function hideButtons() {
    var children = document.getElementById("qGrid").children;
    for (var i = 0; i < children.length; i++) {
        children[i].classList.add("hidden");
    }
}

function initializeQGrid(div) {
    getKeys();
}