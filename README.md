# MCWebStart
### Description
A PyFlask web server where you can start a Minecraft server!

### Quick Start
1. Create your venv with `python -m venv venv`
2. Install packages with `pip install -r requirements.txt`
3. Configure the port and script in app.py
    - In this case, the script starting the server .jar with the path given. (startRemote.bat for me, which redirects to
     "../SpigotServer/start.bat" where my MC server start script is)
4. Run the server! 
    - `python app.py` will run with the port you specified
    - 'flask run' requires the `FLASK_APP` environment variable set to `app.py` and arguments host and port
        - Example: `flask run --host=0.0.0.0 port=25566`

### Notes: 
 - enable-query=true in server.properties
 - This uses Dinnerbone's mcstatus PyPi package. You can find more about it [here](https://github.com/Dinnerbone/mcstatus) 
 - This runs on development server. I'm not experienced enough to put it into a production server, but I'm still learning, OK?
