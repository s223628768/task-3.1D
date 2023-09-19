const chatMessages = document.getElementById("chat-messages");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");

sendButton.addEventListener("click", () => {
    const userMessage = userInput.value;
    displayMessage("You: " + userMessage);

    // Send userMessage to your chatbot backend and receive a response
    // Simulate a bot response for demonstration purposes
    const botResponse = "Bot: Thanks for your message!";

    // Display the bot's response
    displayMessage(botResponse);

    // Clear the user input
    userInput.value = "";
});

function displayMessage(message) {
    const messageElement = document.createElement("div");
    messageElement.innerText = message;
    chatMessages.appendChild(messageElement);
}
