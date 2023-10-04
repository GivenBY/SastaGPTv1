from dotenv import load_dotenv
from flask import Flask, render_template, request, jsonify
import openai
import os
app = Flask(__name__)

load_dotenv()
openai.api_key = os.environ['api_key']


@app.route("/")
def hello_world():
    return render_template("index.html")


@app.route("/api", methods=["GET", "POST"])
def qa():
    if request.method == "POST":
        question = request.json.get("question")
        # chat = mongo.db.chats.find_one({"question": question})
        # print(chat)
        # if chat:
        #     data = {"question": question, "answer": f"{chat['answer']}"}
        #     return jsonify(data)
        if (question == "What is your name?"):
            print("Name")
        else:
            completion = openai.ChatCompletion.create(
                model="gpt-3.5-turbo",
                messages=[{"role": "user", "content": question}])

            print(completion['choices'][0]['message']['content'])

            data = {"question": question,
                    "answer": completion['choices'][0]['message']['content']}
            # mongo.db.chats.insert_one(
            #     {"question": question, "answer": response["choices"][0]["text"]})
            return jsonify(data)
    data = {"result": "Thank you! I'm just a machine learning model designed to respond to questions and generate text based on my training data. Is there anything specific you'd like to ask or discuss? "}

    return jsonify(data)


app.run(debug=True)
