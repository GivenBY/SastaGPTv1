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
function htmlEncode(str) {
  return String(str).replace(/[^\w. ]/gi, function (c) {
    return "&#" + c.charCodeAt(0) + ";";
  });
}

sendButton__button.addEventListener("click", async () => {
  document.querySelector(".question").style.display = "flex";
  document.querySelector(".answer").style.display = "flex";

  let questionValue = document.getElementById("askq").value;
  const answerElement = document.querySelector(".questionText");
  answerElement.textContent = questionValue;
  let result = await postData("/api", { question: questionValue });
  document.querySelector(".answerText").textContent = result.answer;
});
