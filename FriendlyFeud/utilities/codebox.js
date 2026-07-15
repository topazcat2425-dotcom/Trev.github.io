const node = document.getElementById("in");
node.addEventListener("keyup", ({ key }) => {
    if (key === "Enter") {
        console.log(node.value);
        pConn.connect(node.value);
        // bringIn();
    } else {
        node.value = node.value.toUpperCase();
    }
});

node.addEventListener("keydown", ({ key }) => {
    console.log(key);
    if (key != "Backspace" && key != "Delete") {
        if (node.value.length == 4 && key != " ") {
            node.value += " ";
        }
    }
});