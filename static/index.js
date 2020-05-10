window.onload = function () {
    let xhr = new XMLHttpRequest();
    xhr.addEventListener("load", function () {
        let resp = this.response;
        console.log(this.response);
        document.getElementById("status").innerText = resp.status;
        if (resp.status === "online") {
            let output = document.getElementById("output");

            // Button text
            document.getElementById("btn").value = "Turn off";

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
            document.getElementById("btn").value = "Turn on";
        }
        document.getElementById("btn").style.visibility = "visible";
    });
    xhr.responseType = "json";
    xhr.open("GET", "checkStatus");
    xhr.send();
}

document.getElementById("btn").addEventListener("click", function () {
    let queryStr;
    if (document.getElementById("status").innerText === "online") {
        queryStr = "turnoff";
        alert("To be implemented");
    } else {
        queryStr = "turnon";
        alert("To be implemented");
    }
    let xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.addEventListener("load", function () {
        let resp = this.response;
        console.log(resp);
    });
    xhr.open("GET", queryStr);
    xhr.send()
});