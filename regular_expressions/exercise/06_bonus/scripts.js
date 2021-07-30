const input = document.querySelector("#name");

input.addEventListener("keypress", (e) => {
    if (!checkChar(e)) {
        e.preventDefault()
    }
});

function checkChar(e) {
    var char = String.fromCharCode(e.keyCode);

    console.log(e.keyCode)
    const patter = '[a-zA-Z0-9]';
    if (char.match(patter)) {
        console.log(char);
        return true;
    }

}

