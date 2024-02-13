import os
from pymongo import MongoClient
from flask import Flask, jsonify, request, render_template
from dotenv import load_dotenv
import openai

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)

mongo_url = os.getenv('MONGO_URL')
openai.api_key = os.getenv('OPENAI_API_KEY')

if not mongo_url or not openai.api_key:
    raise ValueError("Invalid or missing environment variables.")

mongo = MongoClient(mongo_url)
db = mongo.get_database("sastagpt")


@app.route("/")
def app():
    chats = mongo.db.chats.find({})
    myChats = [chat for chat in chats]
    print(myChats)
    return render_template("index.html", myChats=myChats)


@app.route("/api", methods=["GET", "POST"])
def qa():
    if request.method == "POST":
        question = request.json.get("question")
        chat = mongo.db.chats.find_one({"question": question})
        print(chat)
        if chat:
            data = {"question": question, "answer": f"{chat['answer']}"}
            print(data)
            return jsonify(data)
        else:
            completion = openai.ChatCompletion.create(
                model="gpt-3.5-turbo",
                messages=[{"role": "user", "content": question}])

            print(completion['choices'][0]['message']['content'])

            data = {"question": question,
                    "answer": completion['choices'][0]['message']['content']}
            mongo.db.chats.insert_one(
                {"question": question, "answer": completion['choices'][0]['message']['content']})
            return jsonify(data)
    data = {"result": "Thank you! I'm just a machine learning model designed to respond to questions and generate text based on my training data. Is there anything specific you'd like to ask or discuss? "}

    return jsonify(data)
