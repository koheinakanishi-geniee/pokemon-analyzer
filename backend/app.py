import os

from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})  # 追加


@app.route('/')
def hello_world():
    return jsonify({"hello": "world"})


if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', por="8080")
