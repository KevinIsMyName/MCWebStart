window.onload = function () {
    let xhr = new XMLHttpRequest();
    xhr.addEventListener("load", function () {
        let resp = this.response;
        console.log(resp);
        document.getElementById("status").innerText = resp.status;
        if (resp.status === "online") {
            let output = document.getElementById("output");

            // Button text
            document.getElementById("btn").style.visibility = "hidden";

            // Server name + version
            let serverTitle = document.createElement("h3");
            serverTitle.innerText = resp.raw.game_id + " " + resp.raw.version;
            output.append(serverTitle);

            // Player list
            document.getElementById("output").innerHTML += "<br>Players (" + resp.raw.numplayers + "/" + resp.raw.maxplayers + ")";
            let playerList = document.createElement("ol");
            for (let i = 0; i < resp.players.length; i++) {
                let somePlayer = document.createElement("li");
                somePlayer.innerText = resp.players[i];
                playerList.append(somePlayer);
            }
            output.append(playerList);
        } else {
            document.getElementById("btn").style.visibility = "visible";
        }

    });
    xhr.responseType = "json";
    xhr.open("GET", "checkStatus");
    xhr.send();
}

document.getElementById("btn").addEventListener("click", function () {
    let queryStr;
    if (document.getElementById("status").innerText === "offline") {
        queryStr = "turnon";
        document.getElementById("btn").style.visibility = "hidden";
    }
    let xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.addEventListener("load", function () {
        let resp = this.response;
        console.log(resp);
        if (resp.return === 0) {
            alert("Starting server...refresh the page in a few seconds. Do not spam the button.")
        } else {
            alert("An unexpected error occurred.")
        }
    });
    xhr.open("GET", queryStr);
    xhr.send()
});
