document.addEventListener('DOMContentLoaded', function () {
    const chatBox = document.getElementById('chat-box');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-btn');
    const chatbotContent = document.getElementById('chatbot-content');
    const toggleButton = document.getElementById('toggle-btn');
    const minimizeButton = document.getElementById('minimize-btn');
    const maximizeButton = document.getElementById('maximize-btn');
  
    sendButton.addEventListener('click', function () {
      sendMessage();
    });
  
    userInput.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        sendMessage();
      }
    });
  
    toggleButton.addEventListener('click', function () {
      chatbotContent.classList.toggle('active');
    });
  
    minimizeButton.addEventListener('click', function () {
      chatbotContent.classList.remove('active');
    });
  
    maximizeButton.addEventListener('click', function () {
      chatbotContent.classList.add('active');
      handleBotResponse("How are you feeling today? Are you experiencing any challenges?");
    });
  
    function appendMessage(sender, message, isUser, box) {
      const messageElement = document.createElement('div');
      messageElement.classList.add(isUser ? 'user' : 'bot');
      messageElement.innerHTML = `<p><strong>${sender}:</strong> ${message}</p>`;
      box.appendChild(messageElement);
      box.scrollTop = box.scrollHeight;
    }
  
    function sendMessage() {
      const message = userInput.value.trim();
  
      if (message !== '') {
        appendMessage('You', message, true, chatBox);
        userInput.value = '';
        userInput.focus();
  
        setTimeout(() => {
          handleBotResponse(message);
        }, 500);
      }
    }
  
    function handleBotResponse(userMessage) {
      let botResponse;
      if (userMessage.toLowerCase().includes('hello')) {
        botResponse = 'Hello! How can I assist you today?';
      } else if (userMessage.toLowerCase().includes('hi')) {
        botResponse = 'Hi there! How can I help you?';
      } else {
        botResponse = 'Thank you for sharing. It is important to take care of your mental health. You are not alone. Would you like to learn some tips for mental well-being?';
      }
  
      appendMessage('Bot', botResponse, false, document.getElementById('chatbot-box'));
    }
  });
  