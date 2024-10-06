from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This will enable CORS so that your React app can access the Flask API

@app.route('/data', methods=['GET'])
def get_data():
    # Replace this with dynamic or database-driven data as needed
    return jsonify({
        "message": "Data from Flask API",
        "data": [1, 2, 3, 4, 5]
    })

app.run(debug=True)