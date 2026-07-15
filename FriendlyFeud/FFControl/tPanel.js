// FOR THE TEAM GRID below the board.

function addTeam(name, num) {
    const divList = document.getElementById("playerList");

    divList.innerHTML += '<button onclick="teamCheck(' + num + ')" class="hover:scale-105 hover:border-green-400 transition hover:bg-gray-900/50 rounded-xl border-amber-500 grid grid-cols-4 grid-rows-1 py-4 h-full bg-gray-950/50 border-cyan-400 border-2 flex">' +
        '<div class="col-span-3 text-4xl" id="team' + num + '">' + name +
        '</div> <div class="h-full rounded-xl text-4xl flex" id="score' + num + '">0</div></button>';
}

function enableTeams(ifTrueOn) {
    let children = document.getElementById("playerList").children;

    for (let i = 0; i < children.length; i++) {
        if (ifTrueOn) {
            enablebutton(children[i]);
            // turnOffOnButton(children[i], false);
        } else {
            specialDisable(children[i]);
        }
    }
}

// function disableButton(button) {
//     button.classList.remove("hover:scale-105");
//     button.classList.remove("transition");
//     button.classList.remove("hover:bg-gray-900/50");
//     button.classList.remove("hover:border-green-400");
//     button.classList.replace("bg-fuchsia-950", "bg-gray-950/50");
// }

// function turnOffOnButton(button, disabledOrNot) {
//     button.disabled = disabledOrNot;
// }

function enablebutton(button) {
    button.classList.add("hover:scale-105");
    button.classList.add("transition");
    button.classList.add("hover:bg-gray-900/50");
    button.classList.add("hover:border-green-400");
}

function specialEnable(idNum) {
    let teamThing = document.getElementById("team" + idNum).parentNode;
    teamThing.classList.replace("bg-gray-950/50", "bg-fuchsia-950");
}

function specialDisable(button) {
    button.classList.replace("bg-fuchsia-950", "bg-gray-950/50");
}