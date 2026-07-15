function id2player() {

    const tin = document.getElementById("Tin");
    tin.addEventListener("keyup", ({ key }) => {
        if (key === "Enter") {
            console.log(tin.value);
            sendName(tin.value);
            // bringIn();
        }
    });

    hide("IDTaker");
    show("nameTaker");
}

function sendName(name) {
    document.getElementById("name").innerHTML = name;
    pConn.sendMsg("name|" + name);
}