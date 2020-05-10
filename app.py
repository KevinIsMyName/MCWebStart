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
    query = server.query()
    print("The server has the following players online: {0}".format(", ".join(query.players.names)))


if __name__ == "__main__":
    app.run()