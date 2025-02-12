// script.js
document.getElementById('send-btn').addEventListener('click', function () {
    let userInput = document.getElementById('user-input').value;

    if (userInput.trim() !== '') {
        // Display user message
        let userMessageDiv = document.createElement('div');
        userMessageDiv.classList.add('user-message');
        userMessageDiv.innerHTML = `<p>${userInput}</p>`;
        document.getElementById('chat-box').appendChild(userMessageDiv);

        // Scroll to the bottom
        document.getElementById('chat-box').scrollTop = document.getElementById('chat-box').scrollHeight;

        // Clear the input field
        document.getElementById('user-input').value = '';

        // Bot's response after a slight delay
        setTimeout(function () {
            let botResponseDiv = document.createElement('div');
            botResponseDiv.classList.add('bot-message');
            botResponseDiv.innerHTML = `<p>${getBotResponse(userInput)}</p>`;
            document.getElementById('chat-box').appendChild(botResponseDiv);

            // Scroll to the bottom
            document.getElementById('chat-box').scrollTop = document.getElementById('chat-box').scrollHeight;
        }, 1000);
    }
});

// Expanded bot response function with 50 responses
function getBotResponse(input) {
    input = input.toLowerCase();

    if (input.includes("hello")) {
        return "Hello! How can I assist you today?";
    } else if (input.includes("how are you")) {
        return "I'm doing great, thank you for asking!";
    } else if (input.includes("your name")) {
        return "I'm your friendly chatbot!";
    } else if (input.includes("bye")) {
        return "Goodbye! Have a wonderful day!";
    } else if (input.includes("help")) {
        return "I can assist you with any questions you may have. Just ask!";
    } else if (input.includes("what is your purpose")) {
        return "My purpose is to assist you with any queries you may have!";
    } else if (input.includes("weather")) {
        return "I don't have real-time weather data, but you can check your local weather online!";
    } else if (input.includes("time")) {
        let currentTime = new Date().toLocaleTimeString();
        return `The current time is ${currentTime}.`;
    } else if (input.includes("date")) {
        let currentDate = new Date().toLocaleDateString();
        return `Today's date is ${currentDate}.`;
    } else if (input.includes("how old are you")) {
        return "I don't age, I'm always here to help!";
    } else if (input.includes("your favorite color")) {
        return "I like all colors, but blue seems calming to me.";
    } else if (input.includes("who created you")) {
        return "I was created by talented developers!";
    } else if (input.includes("where are you from")) {
        return "I live in the cloud, always available when you need me!";
    } else if (input.includes("what is your favorite food")) {
        return "I don't eat food, but if I could, I might enjoy pizza!";
    } else if (input.includes("joke")) {
        return "Why don’t skeletons fight each other? They don’t have the guts!";
    } else if (input.includes("tell me a joke")) {
        return "Why don't eggs tell jokes? They'd crack each other up!";
    } else if (input.includes("tell a joke")) {
        return "What did the ocean say to the beach? Nothing, it just waved!";
    } else if (input.includes("your favorite animal")) {
        return "I think cats are cute, but I don’t have preferences.";
    } else if (input.includes("how many languages do you speak")) {
        return "I can understand and respond in many languages, but I'm most fluent in English.";
    } else if (input.includes("can you speak spanish")) {
        return "Sí, puedo hablar español. ¿Cómo puedo ayudarte?";
    } else if (input.includes("can you speak french")) {
        return "Oui, je parle français. Comment puis-je vous aider ?";
    } else if (input.includes("can you speak german")) {
        return "Ja, ich spreche Deutsch. Wie kann ich Ihnen helfen?";
    } else if (input.includes("tell me a riddle")) {
        return "What has keys but can't open locks? A piano!";
    } else if (input.includes("do you know math")) {
        return "Yes! Feel free to ask me any math-related questions.";
    } else if (input.includes("2 + 2")) {
        return "2 + 2 equals 4.";
    } else if (input.includes("capital of france")) {
        return "The capital of France is Paris.";
    } else if (input.includes("who is the president of usa")) {
        return "The current President of the USA is Joe Biden.";
    } else if (input.includes("what is ai")) {
        return "AI stands for Artificial Intelligence, which allows machines to simulate human-like thinking.";
    } else if (input.includes("what is 100 divided by 5")) {
        return "100 divided by 5 equals 20.";
    } else if (input.includes("favorite movie")) {
        return "I don't watch movies, but I know many popular ones! How about 'Inception'?";
    } else if (input.includes("favorite book")) {
        return "If I could read, I think I would love '1984' by George Orwell.";
    } else if (input.includes("can you play music")) {
        return "I can't play music directly, but I can suggest some songs!";
    } else if (input.includes("what is the meaning of life")) {
        return "The meaning of life is a philosophical question that has many different answers!";
    } else if (input.includes("how to learn coding")) {
        return "There are many online platforms like Codecademy, freeCodeCamp, and Udemy to learn coding!";
    } else if (input.includes("how to bake a cake")) {
        return "To bake a cake, you'll need flour, sugar, eggs, and butter! Would you like a recipe?";
    } else if (input.includes("how to drive a car")) {
        return "Driving requires practice and learning from a driving school to be safe on the road.";
    } else if (input.includes("how to meditate")) {
        return "Meditation involves focusing on your breath and clearing your mind. Start with just 5 minutes a day!";
    } else if (input.includes("how to make friends")) {
        return "Being kind and showing interest in others can help you build meaningful friendships.";
    } else if (input.includes("how to get rich")) {
        return "Building wealth takes time and smart investments. Hard work, learning, and persistence are key!";
    } else if (input.includes("can you help me")) {
        return "Of course! How can I assist you today?";
    } else if (input.includes("tell me a fact")) {
        return "Did you know? Honey never spoils. Archaeologists have found pots of honey in ancient tombs!";
    } else if (input.includes("can you solve riddles")) {
        return "Yes! I love solving riddles. Try me!";
    } else if (input.includes("how does a computer work")) {
        return "Computers process data using hardware and software. It's all about logic and instructions!";
    } else if (input.includes("do you like music")) {
        return "I can't hear music, but I know it's a wonderful form of expression!";
    } else if (input.includes("how do you work")) {
        return "I work by processing the input you give me and providing the most relevant response based on my programming.";
    } else if (input.includes("are you smart")) {
        return "I have a lot of information, but true intelligence comes from human creativity and experience!";
    } else if (input.includes("do you understand emotions")) {
        return "I understand the concept of emotions, but I don't experience them myself.";
    } else if (input.includes("what is 1000 + 1000")) {
        return "1000 + 1000 equals 2000.";
    } else if (input.includes("do you know history")) {
        return "Yes! History is full of fascinating events. Ask me anything!";
    } else if (input.includes("who invented the lightbulb")) {
        return "The lightbulb was invented by Thomas Edison.";
    } else if (input.includes("who is famous")) {
        return "Many people are famous! Some are famous for their contributions to science, art, or sports.";
    } else if (input.includes("your name")) {
        return "I'm your friendly chatbot!";
    } else if (input.includes("bye")) {
        return "Goodbye! Have a wonderful day!";
    } else if (input.includes("help")) {
        return "I can assist you with any questions you may have. Just ask!";
    } else if (input.includes("what is your purpose")) {
        return "My purpose is to assist you with any queries you may have!";
    } else if (input.includes("weather")) {
        return "I don't have real-time weather data, but you can check your local weather online!";
    } else if (input.includes("time")) {
        let currentTime = new Date().toLocaleTimeString();
        return `The current time is ${currentTime}.`;
    } else if (input.includes("date")) {
        let currentDate = new Date().toLocaleDateString();
        return `Today's date is ${currentDate}.`;
    } else if (input.includes("how old are you")) {
        return "I don't age, I'm always here to help!";
    } else if (input.includes("your favorite color")) {
        return "I like all colors, but blue seems calming to me.";
    } else if (input.includes("who created you")) {
        return "I was created by talented developers!";
    } else if (input.includes("where are you from")) {
        return "I live in the cloud, always available when you need me!";
    } else if (input.includes("what is your favorite food")) {
        return "I don't eat food, but if I could, I might enjoy pizza!";
    } else if (input.includes("joke")) {
        return "Why don't skeletons fight each other? They don't have the guts!";
    } else if (input.includes("tell me a joke")) {
        return "Why don't eggs tell jokes? They'd crack each other up!";
    } else if (input.includes("tell a joke")) {
        return "What did the ocean say to the beach? Nothing, it just waved!";
    } else if (input.includes("your favorite animal")) {
        return "I think cats are cute, but I don't have preferences.";
    } else if (input.includes("how many languages do you speak")) {
        return "I can understand and respond in many languages, but I'm most fluent in English.";
    } else if (input.includes("can you speak spanish")) {
        return "Sí, puedo hablar español. ¿Cómo puedo ayudarte?";
    } else if (input.includes("can you speak french")) {
        return "Oui, je parle français. Comment puis-je vous aider ?";
    } else if (input.includes("can you speak german")) {
        return "Ja, ich spreche Deutsch. Wie kann ich Ihnen helfen?";
    } else if (input.includes("tell me a riddle")) {
        return "What has keys but can't open locks? A piano!";
    } else if (input.includes("do you know math")) {
        return "Yes! Feel free to ask me any math-related questions.";
    } else if (input.includes("2 + 2")) {
        return "2 + 2 equals 4.";
    } else if (input.includes("capital of france")) {
        return "The capital of France is Paris.";
    } else if (input.includes("who is the president of usa")) {
        return "The current President of the USA is Joe Biden.";
    } else if (input.includes("what is ai")) {
        return "AI stands for Artificial Intelligence, which allows machines to simulate human-like thinking.";
    } else if (input.includes("what is 100 divided by 5")) {
        return "100 divided by 5 equals 20.";
    } else if (input.includes("favorite movie")) {
        return "I don't watch movies, but I know many popular ones! How about 'Inception'?";
    } else if (input.includes("favorite book")) {
        return "If I could read, I think I would love '1984' by George Orwell.";
    } else if (input.includes("can you play music")) {
        return "I can't play music directly, but I can suggest some songs!";
    } else if (input.includes("what is the meaning of life")) {
        return "The meaning of life is a philosophical question that has many different answers!";
    } else if (input.includes("how to learn coding")) {
        return "There are many online platforms like Codecademy, freeCodeCamp, and Udemy to learn coding!";
    } else if (input.includes("how to bake a cake")) {
        return "To bake a cake, you'll need flour, sugar, eggs, and butter! Would you like a recipe?";
    } else if (input.includes("how to drive a car")) {
        return "Driving requires practice and learning from a driving school to be safe on the road.";
    } else if (input.includes("how to meditate")) {
        return "Meditation involves focusing on your breath and clearing your mind. Start with just 5 minutes a day!";
    } else if (input.includes("how to make friends")) {
        return "Being kind and showing interest in others can help you build meaningful friendships.";
    } else if (input.includes("how to get rich")) {
        return "Building wealth takes time and smart investments. Hard work, learning, and persistence are key!";
    } else if (input.includes("can you help me")) {
        return "Of course! How can I assist you today?";
    } else if (input.includes("tell me a fact")) {
        return "Did you know? Honey never spoils. Archaeologists have found pots of honey in ancient tombs!";
    } else if (input.includes("can you solve riddles")) {
        return "Yes! I love solving riddles. Try me!";
    } else if (input.includes("how does a computer work")) {
        return "Computers process data using hardware and software. It's all about logic and instructions!";
    } else if (input.includes("do you like music")) {
        return "I can't hear music, but I know it's a wonderful form of expression!";
    } else if (input.includes("how do you work")) {
        return "I work by processing the input you give me and providing the most relevant response based on my programming.";
    } else if (input.includes("are you smart")) {
        return "I have a lot of information, but true intelligence comes from human creativity and experience!";
    } else if (input.includes("do you understand emotions")) {
        return "I understand the concept of emotions, but I don't experience them myself.";
    } else if (input.includes("what is 1000 + 1000")) {
        return "1000 + 1000 equals 2000.";
    } else if (input.includes("do you know history")) {
        return "Yes! History is full of fascinating events. Ask me anything!";
    } else if (input.includes("who invented the lightbulb")) {
        return "The lightbulb was invented by Thomas Edison.";
    } else if (input.includes("who is famous")) {
        return "Many people are famous! Some are famous for their contributions to science, art, or sports.";
    } else if (input.includes("favorite subject")) {
        return "I think science is fascinating, but I don't have a preference!";
    } else if (input.includes("what is the capital of india")) {
        return "The capital of India is New Delhi.";
    } else if (input.includes("what is the capital of usa")) {
        return "The capital of the USA is Washington, D.C.";
    } else if (input.includes("how many continents are there")) {
        return "There are seven continents on Earth.";
    } else if (input.includes("how many oceans are there")) {
        return "There are five oceans: Pacific, Atlantic, Indian, Southern, and Arctic.";
    } else if (input.includes("tell me a poem")) {
        return "Roses are red, violets are blue, I'm here to help, how can I assist you?";
    } else if (input.includes("what is 5 x 5")) {
        return "5 x 5 equals 25.";
    } else if (input.includes("tell me a story")) {
        return "Once upon a time, there was a chatbot who loved to help people... and here you are!";
    } else if (input.includes("how tall is the eiffel tower")) {
        return "The Eiffel Tower is 330 meters tall.";
    } else if (input.includes("how many countries are there")) {
        return "There are 195 countries in the world today.";
    } else if (input.includes("who was the first president of usa")) {
        return "George Washington was the first President of the USA.";
    } else if (input.includes("what is quantum physics")) {
        return "Quantum physics is the study of particles at the smallest scales of energy levels of atoms and subatomic particles.";
    } else if (input.includes("who discovered america")) {
        return "Christopher Columbus is credited with discovering America in 1492.";
    } else if (input.includes("what is your favorite food")) {
        return "I don't eat food, but I've heard pizza is quite popular!";
    } else if (input.includes("what is the speed of light")) {
        return "The speed of light in a vacuum is approximately 299,792 kilometers per second.";
    } else {
        return "Sorry, I didn't quite understand that. Could you rephrase your question?";
    }
}
