function toggleChat() {
    const chatContainer = document.getElementById('chatbot-container');
    const chatToggle = document.getElementById('chat-toggle');
    
    // Mostrar u ocultar el chatbot
    if (chatContainer.style.display === 'none' || chatContainer.style.display === '') {
        chatContainer.style.display = 'flex';
        chatToggle.style.display = 'none'; // Ocultar el botón cuando el chatbot está abierto
    } else {
        chatContainer.style.display = 'none';
        chatToggle.style.display = 'block'; // Mostrar el botón cuando el chatbot está cerrado
    }
}

function handleOption(optionText) {
    addMessage('user', optionText);
    const botResponse = `Has seleccionado ${optionText}`;
    setTimeout(() => addMessage('bot', botResponse), 500);
}

function addMessage(sender, text) {
    const chatContent = document.getElementById('chat-content');
    const message = document.createElement('div');
    message.classList.add('message', sender);
    
    const icon = document.createElement('div');
    icon.classList.add('icon');
    icon.textContent = sender === 'bot' ? '🤖' : '👤';
    
    const messageText = document.createElement('div');
    messageText.classList.add('text');
    messageText.textContent = text;
    
    message.appendChild(icon);
    message.appendChild(messageText);
    chatContent.appendChild(message);
    
    chatContent.scrollTop = chatContent.scrollHeight;  // Desplazar hacia el final del chat
}

function handleUserInput(event) {
    if (event.key === 'Enter') {
        const userInput = document.getElementById('user-input');
        const text = userInput.value.trim();
        
        if (text) {
            addMessage('user', text);
            userInput.value = ''; // Limpiar el campo de entrada
            setTimeout(() => addMessage('bot', `Recibido: ${text}`), 500);
        }
    }
}

function closeChat() {
    const chatContainer = document.getElementById('chatbot-container');
    const chatContent = document.getElementById('chat-content');
    const chatToggle = document.getElementById('chat-toggle');
    
    // Eliminar solo los mensajes del chat sin eliminar el menú de opciones
    const messages = chatContent.querySelectorAll('.message');
    messages.forEach(message => message.remove());

    // Agregar el mensaje de bienvenida nuevamente
    const welcomeMessage = document.createElement('div');
    welcomeMessage.classList.add('message', 'bot');
    welcomeMessage.innerHTML = `<div class="icon">🤖</div><div class="text">Hola 👋 ¿Cómo puedo ayudarte hoy?</div>`;
    chatContent.prepend(welcomeMessage);

    // Cerrar el chatbot
    chatContainer.style.display = 'none';
    chatToggle.style.display = 'block';
}

function handleUserInput(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function sendMessage() {
    const userInput = document.getElementById('user-input');
    const text = userInput.value.trim();
    
    if (text) {
        addMessage('user', text);
        userInput.value = ''; // Limpiar el campo de entrada
        setTimeout(() => addMessage('bot', `Recibido: ${text}`), 500);
    }
}

