const openChatButton = document.getElementById('open-chat');
const chatWidget = document.getElementById('chat-widget');
const closeChatButton = document.getElementById('close-chat');

openChatButton.addEventListener('click', openChat);
closeChatButton.addEventListener('click', closeChat);   

function openChat() {
  chatWidget.style.display = 'flex';
  displayMessage("¡Hola!  ¿En qué te puedo ayudar hoy?\n\n**Opciones:**\n1. Saludar\n2. Hacer una pregunta\n3. Obtener información");
}

document.getElementById("close-chat").addEventListener("click", function() {
    document.getElementById("chat-widget").style.display = "none";
  });

async function sendMessage() {
  const userInput = document.getElementById("user-input");
  const message = userInput.value.toLowerCase();
  userInput.value = '';

  displayMessage("Tú: " + message);

  // Lógica básica para respuestas
  let response;
  if (message.includes("hola") || message.includes("saludar")) {
    response = "Hola a ti también. ¿Cómo puedo ayudarte?";
  } else if (message.includes("pregunta")) {
    response = "¿Qué te gustaría preguntar?";
  } else if (message.includes("información")) {
    response = "¿Sobre qué tema te gustaría obtener información?";
  } else {
    response = "Lo siento, no entiendo tu pregunta. Puedes intentar con alguna de las opciones del menú.";
  }

  displayMessage("Chatbot: " + response);
}

function displayMessage(text) {
  const messages = document.getElementById("messages");
  const messageElement = document.createElement("p");
  messageElement.textContent = text;
  messages.appendChild(messageElement);
  messages.scrollTop = messages.scrollHeight;
}