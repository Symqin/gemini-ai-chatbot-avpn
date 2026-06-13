document.addEventListener('DOMContentLoaded', () => {
  const chatForm = document.getElementById('chat-form');
  const messageInput = document.getElementById('message-input');
  const chatBody = document.getElementById('chat-body');

  // Conversation history
  let conversation = [];

  // Create typing indicator element
  const typingIndicator = document.createElement('div');
  typingIndicator.className = 'typing-indicator';
  typingIndicator.innerHTML = `
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
  `;
  
  function appendMessage(role, text) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${role}`;
    
    const bubbleDiv = document.createElement('div');
    bubbleDiv.className = 'bubble';
    
    // Parse Markdown using marked.js if available
    const formattedText = typeof marked !== 'undefined' ? marked.parse(text) : text.replace(/\n/g, '<br>');
    bubbleDiv.innerHTML = formattedText;
    
    messageDiv.appendChild(bubbleDiv);
    
    // Insert before typing indicator if it's active
    if (typingIndicator.parentNode === chatBody) {
      chatBody.insertBefore(messageDiv, typingIndicator);
    } else {
      chatBody.appendChild(messageDiv);
    }
    
    scrollToBottom();
  }

  function showTyping() {
    chatBody.appendChild(typingIndicator);
    typingIndicator.classList.add('active');
    scrollToBottom();
  }

  function hideTyping() {
    if (typingIndicator.parentNode === chatBody) {
      chatBody.removeChild(typingIndicator);
    }
    typingIndicator.classList.remove('active');
  }

  function scrollToBottom() {
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  chatForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const text = messageInput.value.trim();
    if (!text) return;

    // Add user message to UI and history
    appendMessage('user', text);
    conversation.push({ role: 'user', text: text });
    
    // Clear input
    messageInput.value = '';
    
    // Show bot is typing
    showTyping();

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ conversation })
      });

      const data = await response.json();
      hideTyping();

      if (response.ok) {
        // Add bot response to UI and history
        appendMessage('bot', data.result);
        conversation.push({ role: 'model', text: data.result });
      } else {
        appendMessage('bot', 'Maaf, sepertinya saya sedang mengalami gangguan (Error: ' + (data.error || 'Server sibuk') + ').');
        // Remove the failed message from history so user can try again
        conversation.pop();
      }
    } catch (error) {
      hideTyping();
      appendMessage('bot', 'Maaf, koneksi terputus. Silakan coba lagi.');
      conversation.pop();
    }
  });
});
