

function isNumber(n) { return !isNaN(parseFloat(n)) && !isNaN(n - 0) }

function show(ID) {
    const contain = document.getElementById(ID);
    if (contain.classList.contains("hidden")) {
        contain.classList.remove("hidden");
    }
}

function hide(ID) {
    const contain = document.getElementById(ID);
    if (!contain.classList.contains("hidden")) {
        contain.classList.add("hidden");
    }
}

function grayify(div) {
    if (div.classList.contains("grayscale")) {
        div.classList.remove("grayscale");
    } else {
        div.classList.add("grayscale");
    }
}

function enablility(div) {
    if (div.disabled) {
        div.disabled = false;
    } else {
        div.disabled = true;
    }
}

function innerHTMLadd(ID, newInner) {
    document.getElementById(ID).innerHTML += newInner;
}

function innerHTMLreplace(ID, newInner) {
    document.getElementById(ID).innerHTML = newInner;
}

function swapElements(list, pos1, pos2) {
    var x = list[pos1];
    list[pos1] = list[pos2];
    list[pos2] = x;
}
