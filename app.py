from flask import Flask, render_template, url_for, jsonify
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
        print("The server has the following players online: {0}".format(", ".join(query.players.names)))
        return jsonify({
            "raw": query.raw,
            "players": query.players.names,
            "status": "online"
        })
    except:
        return jsonify({"status": "offline"})
@app.route("/turnon")
def turnon():
    pass

@app.route("/turnoff")
def turnoff():
    pass

if __name__ == "__main__":
    app.run(host="0.0.0.0", port="25566")