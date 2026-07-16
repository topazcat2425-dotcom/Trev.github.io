// this is too advanced for its time (its not, I'm a fucking idiot and can't make it work)

let pinging = false;

function ping() {
    pConn.sendMsg("ping");
    pinging = true;
    setTimeout(async () => {
        console.log("are we pinged back?");
        console.log(pinging);
        if (!pinging) {
            panic();
        }
    }, 5000);
}

async function ponged() {
    pinged = false;
}

function panic() {
    const div = document.getElementById("in");
    if (div.classList.contains("border-green-400")) {
        div.classList.replace("border-green-400", "border-red-400")
    }
}

// setInterval(() => {
//     if (pConn !== undefined) {
//         console.log("ping!");
//         ping();
//     }
// }, 10000);


// this breaks the fuck out
// async function infiniteLoop() {
//     while (1) {
//         setTimeout(ping(), 1000);
//     }
// }