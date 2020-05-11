from flask import Flask, render_template, jsonify
from mcstatus import MinecraftServer
import os

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/checkStatus")
def checkStatus():
    server = MinecraftServer.lookup("localhost:25565")
    try:
        query = server.query()
        return jsonify({
            "raw": query.raw,
            "players": query.players.names,
            "status": "online"
        })
    except:
        return jsonify({"status": "offline"})
@app.route("/turnon")
def turnon():
    try:
        os.startfile("startMCS.bat")
        return jsonify({"return": 0})
    except:
        return jsonify({"return": -1})


if __name__ == "__main__":
    app.run(host="0.0.0.0", port="25566")