const botResponses = {
    "hello": "Hello! How are you feeling today?",
    "fine": "That's great to hear! Would you lke to share something more.",
    "not good": "I'm sorry to hear that. Remember, it's okay not to be okay. Do you want to talk about it?",
    "yes": "Feel free to share your thoughts. I'm here to listen.",
    "no": "Okay, take your time. I'll be here if you change your mind.",
    "i am depressed":" \nSo Sad to hear that,try to share your thoughts with someone. Here are some ways to come out of depression \n\n 1.Professional Support \nConsult with a mental health professional such as a therapist or counselor. \n\n 2.Medication \n In some cases, medication may be prescribed by a psychiatrist.\n\n 3. Social Support \nBuild a strong support system with friends and family. \n\n 4. Healthy Lifestyle \n Prioritize regular exercise, a balanced diet, and sufficient sleep."
  };
  
  // Function to initiate the conversation with the bot
  function initiateChat() {
    const greeting = "Hello! How can I help you today?";
      appendMessage(greeting, 'bot');
  }
  
  function sendMessage() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim().toLowerCase();

    if (message !== '') {
      appendMessage(message, 'user');
      respondToUser(message);
      userInput.value = '';
    }
  }
  
  function respondToUser(message) {
    let response = botResponses[message];
    if (!response) {
      response = "I'm sorry, I didn't understand that. Can you rephrase or ask something else?";
    }
    setTimeout(() => {
      appendMessage(response, 'bot');
    }, 500);
  }
  
  function appendMessage(message, sender) {
    const chatMessages = document.getElementById('chat-messages');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.innerText = message;
    chatMessages.appendChild(messageElement);
  
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
  

  function handleKeyPress(event) {
      if (event.key === 'Enter') {
          sendMessage();
      }
  }

  document.addEventListener('DOMContentLoaded', initiateChat);