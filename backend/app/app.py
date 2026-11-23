# save this as app.py
from flask import Flask
from flask import request

app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello, World!"
@app.route("/services", methods=['GET'])
def services():
    if request.method == "GET":
        try:
            language = request.form["language"]
            situation = request.form['situation']
            accommodations = request.form["accommodations"]
        except:
            return "couldn't find response"
        finally:
            print(language,situation,accommodations)
            return str(language)