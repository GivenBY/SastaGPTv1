// Function to send a POST request to the specified URL with provided data
async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

// Function to encode HTML characters in a string
function htmlEncode(str) {
  return String(str).replace(/[^\w. ]/gi, function (c) {
    return "&#" + c.charCodeAt(0) + ";";
  });
}

// Event listener for the button click
sendButton__button.addEventListener("click", async () => {
  // Get the user's input from the text area
  let questionValues = document.getElementById("askq").value;

  // Create new elements for the question and answer
  const newQuestionElement = document.createElement("div");
  newQuestionElement.className = "question";
  newQuestionElement.style.display = "flex";
  const newAnswerElement = document.createElement("div");
  newAnswerElement.className = "answer";
  newAnswerElement.style.display = "flex";

  // Create element for displaying the user's question
  const questionTextElement = document.createElement("div");
  questionTextElement.className = "questionText";
  questionTextElement.style.width = "60%";
  questionTextElement.textContent = questionValues;
  newQuestionElement.appendChild(questionTextElement);

  // Create element for displaying "Loading..." while waiting for the API response
  const answerTextElement = document.createElement("pre");
  answerTextElement.className = "answerText";
  answerTextElement.textContent = "Loading...";
  newAnswerElement.appendChild(answerTextElement);

  // Append question and loading message to the chat content container
  document.querySelector(".chatContent").appendChild(newQuestionElement);
  document.querySelector(".chatContent").appendChild(newAnswerElement);

  // Make a POST request to the server API with the user's question
  let result = await postData("/api", { question: questionValues });

  // Populate the answer element with the response from the API
  answerTextElement.textContent = result.answer;

  // Get the chat history container
  const chatHistoryContainer = document.querySelector(".chats");

  // Create a new chat element with the user's question
  let questionValue = document.getElementById("askq").value;
  const questionElement = document.createElement("div");
  questionElement.className = "chat-list";

  // Create an icon for the chat element
  const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  icon.setAttribute("stroke", "currentColor");
  icon.setAttribute("fill", "none");
  icon.setAttribute("stroke-width", "2");
  icon.setAttribute("viewBox", "0 0 24 24");
  icon.setAttribute("stroke-linecap", "round");
  icon.setAttribute("stroke-linejoin", "round");
  icon.setAttribute("class", "icon-sm");
  icon.setAttribute("height", "1em");
  icon.setAttribute("width", "1em");

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute(
    "d",
    "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
  );

  icon.appendChild(path);

  // Create text node with the user's question
  const questionText = document.createTextNode(questionValue);
  questionElement.appendChild(icon);
  questionElement.appendChild(questionText);

  // Append the user's question to the chat history container
  chatHistoryContainer.appendChild(questionElement);

  // Clear the input field after sending the question
  document.getElementById("askq").value = "";
});
