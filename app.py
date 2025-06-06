from flask import Flask, render_template, request, jsonify
import os
from datetime import datetime

app = Flask(__name__)

# Store messages in memory (in a real application, you would use a database)
messages = []

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/submit_contact', methods=['POST'])
def submit_contact():
    try:
        data = request.get_json()
        name = data.get('name')
        email = data.get('email')
        message = data.get('message')
        
        if not all([name, email, message]):
            return jsonify({'error': 'All fields are required'}), 400
        
        # Store the message
        messages.append({
            'name': name,
            'email': email,
            'message': message,
            'timestamp': datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        })
        
        # In a real application, you would:
        # 1. Store the message in a database
        # 2. Send an email notification
        # 3. Implement proper error handling
        
        return jsonify({'message': 'Message received successfully'}), 200
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/get_messages')
def get_messages():
    # In a real application, this would be protected by authentication
    return jsonify(messages)

if __name__ == '__main__':
    app.run(debug=True) 