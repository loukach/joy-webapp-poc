const chatbox = document.getElementById("chatbox");
const userInput = document.getElementById("user_input");
const sendButton = document.getElementById("send_button");

// Replace this with your actual API key
const API_KEY = "AIzaSyAhaJumKKsIPijtzLbwtCUgJBqHXzQeWPs"; 
const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`;

// Hardcoded activity data (replace with your actual data)
const ACTIVITIES_DATA = [
    {
      "name": "Assisting with Football Training Sessions",
      "category": "Sports related",
      "frequency": "Weekly",
      "way": "Alone",
      "location": "West Malta",
      "description": "Help a local football club with their youth training sessions. Assist the coach with drills, provide encouragement, and ensure the safety of the young players."
    },
    {
      "name": "Senior Center Companion",
      "category": "Social-Care giving",
      "frequency": "Monthly",
      "way": "With Family",
      "location": "South Malta",
      "description": "Spend time with elderly residents at a senior center. Engage in conversations, play games, read to them, or assist with activities."
    },
    {
      "name": "Bookstore Volunteer",
      "category": "Retail",
      "frequency": "Bi-monthly",
      "way": "With Friends",
      "location": "North Malta",
      "description": "Help out at a local bookstore. Organize shelves, assist customers, and recommend books."
    },
    {
      "name": "Community Garden Maintenance",
      "category": "Maintenance",
      "frequency": "Weekly",
      "way": "Alone",
      "location": "Central Malta",
      "description": "Help maintain a community garden. Tasks include weeding, watering, planting, and harvesting."
    },
    {
      "name": "Children's Museum Guide",
      "category": "Family Friendly",
      "frequency": "Monthly",
      "way": "With Family",
      "location": "Gozo",
      "description": "Guide families through interactive exhibits at a children's museum. Explain concepts, encourage exploration, and ensure a safe and enjoyable experience."
    },
    {
      "name": "Beach Cleanup",
      "category": "Environmental/Cultural",
      "frequency": "Bi-monthly",
      "way": "With Friends",
      "location": "West Malta",
      "description": "Participate in a beach cleanup organized by a local environmental group. Collect trash and debris to help keep the beaches clean."
    },
    {
      "name": "Museum Tour Guide",
      "category": "Environmental/Cultural",
      "frequency": "Weekly",
      "way": "Alone",
      "location": "Central Malta",
      "description": "Lead guided tours through a museum. Share your knowledge of the exhibits and answer visitors' questions."
    },
    {
      "name": "After-School Tutoring",
      "category": "Educational",
      "frequency": "Weekly",
      "way": "Alone",
      "location": "Online",
      "description": "Provide online tutoring to students who need help with their schoolwork. Subjects may include math, science, language arts, or history."
    },
    {
      "name": "Soup Kitchen Volunteer",
      "category": "Anything with Food",
      "frequency": "Monthly",
      "way": "With Family",
      "location": "South Malta",
      "description": "Assist in a soup kitchen. Prepare and serve meals to those in need."
    },
    {
      "name": "Animal Shelter Caregiver",
      "category": "Animal care",
      "frequency": "Weekly",
      "way": "With Friends",
      "location": "North Malta",
      "description": "Help care for animals at an animal shelter. Tasks include feeding, grooming, walking dogs, and socializing with cats."
    },
    {
      "name": "Administrative Support for a Charity",
      "category": "Administration",
      "frequency": "Bi-monthly",
      "way": "Alone",
      "location": "Online",
      "description": "Provide administrative support to a charitable organization. Tasks may include data entry, email correspondence, and social media management."
    },
    {
      "name": "Youth Sports Coach",
      "category": "Sports related",
      "frequency": "Weekly",
      "way": "Alone",
      "location": "Gozo",
      "description": "Coach a youth sports team. Teach skills, organize practices, and lead games."
    },
    {
      "name": "Hospital Volunteer",
      "category": "Social-Care giving",
      "frequency": "Monthly",
      "way": "With Family",
      "location": "West Malta",
      "description": "Volunteer at a local hospital. Visit patients, provide companionship, and assist with errands."
    },
    {
      "name": "Charity Shop Assistant",
      "category": "Retail",
      "frequency": "Bi-monthly",
      "way": "With Friends",
      "location": "South Malta",
      "description": "Work in a charity shop. Sort donations, price items, and assist customers."
    },
    {
      "name": "Community Center Handyman",
      "category": "Maintenance",
      "frequency": "Monthly",
      "way": "Alone",
      "location": "North Malta",
      "description": "Help with maintenance tasks at a community center. This may include painting, repairs, and general upkeep."
    },
    {
      "name": "Library Story Time Reader",
      "category": "Family Friendly",
      "frequency": "Weekly",
      "way": "Alone",
      "location": "Central Malta",
      "description": "Read stories to children during library story time sessions. Engage the children with interactive activities and songs."
    },
    {
      "name": "Tree Planting Event",
      "category": "Environmental/Cultural",
      "frequency": "Once",
      "way": "With Friends",
      "location": "Gozo",
      "description": "Participate in a tree planting event organized by an environmental organization. Help plant trees to restore a local forest."
    },
    {
      "name": "Online Language Tutor",
      "category": "Educational",
      "frequency": "Weekly",
      "way": "Alone",
      "location": "Online",
      "description": "Teach a language online to individuals or small groups. Create lesson plans and provide language practice."
    },
    {
      "name": "Food Bank Distribution",
      "category": "Anything with Food",
      "frequency": "Monthly",
      "way": "With Family",
      "location": "West Malta",
      "description": "Help distribute food at a local food bank. Organize donations and assist clients with selecting food items."
    },
    {
      "name": "Dog Walker for a Rescue Organization",
      "category": "Animal care",
      "frequency": "Weekly",
      "way": "With Friends",
      "location": "South Malta",
      "description": "Volunteer to walk dogs for a dog rescue organization. Provide exercise and socialization for the dogs."
    },
    {
      "name": "Event Planning for a Non-Profit",
      "category": "Administration",
      "frequency": "Bi-monthly",
      "way": "Alone",
      "location": "North Malta",
      "description": "Assist with event planning for a non-profit organization. Tasks may include venue selection, logistics, and marketing."
    },
    {
      "name": "Referee for Local Sports Games",
      "category": "Sports related",
      "frequency": "Weekly",
      "way": "Alone",
      "location": "Central Malta",
      "description": "Referee local sports games. Ensure fair play and enforce the rules of the game."
    },
    {
      "name": "Befriending Service for Isolated Individuals",
      "category": "Social-Care giving",
      "frequency": "Monthly",
      "way": "With Family",
      "location": "Gozo",
      "description": "Provide companionship to isolated individuals. Visit them at home, engage in conversations, and offer support."
    },
    {
      "name": "Fundraising for a Charity",
      "category": "Retail",
      "frequency": "Bi-monthly",
      "way": "With Friends",
      "location": "West Malta",
      "description": "Help with fundraising activities for a charity. This may include organizing events, collecting donations, or selling merchandise."
    },
    {
      "name": "Community Repair Cafe",
      "category": "Maintenance",
      "frequency": "Monthly",
      "way": "Alone",
      "location": "South Malta",
      "description": "Volunteer at a community repair cafe. Help people repair broken items, such as electronics, clothing, and bicycles."
    },
    {
      "name": "Children's Party Entertainer",
      "category": "Family Friendly",
      "frequency": "Once",
      "way": "With Family",
      "location": "North Malta",
      "description": "Entertain children at parties and events. This may include face painting, balloon twisting, and organizing games."
    },
    {
      "name": "Environmental Awareness Campaign",
      "category": "Environmental/Cultural",
      "frequency": "Weekly",
      "way": "With Friends",
      "location": "Central Malta",
      "description": "Participate in an environmental awareness campaign. Distribute information, engage with the public, and promote sustainable practices."
    },
    {
      "name": "Homework Help for Disadvantaged Students",
      "category": "Educational",
      "frequency": "Weekly",
      "way": "Alone",
      "location": "Online",
      "description": "Provide homework help to disadvantaged students. Assist with assignments, explain concepts, and offer encouragement."
    },
    {
      "name": "Community Cooking Class Assistant",
      "category": "Anything with Food",
      "frequency": "Monthly",
      "way": "With Family",
      "location": "Gozo",
      "description": "Assist with community cooking classes. Help prepare ingredients, demonstrate techniques, and share recipes."
    },
    {
      "name": "Foster Care for Pets",
      "category": "Animal care",
      "frequency": "Daily",
      "way": "Alone",
      "location": "West Malta",
      "description": "Provide temporary foster care for pets in need. This includes providing food, shelter, and care until they find a permanent home."
    }
  ];

const conversationHistory = [];

sendButton.addEventListener("click", async () => {
    const userMessage = userInput.value;
    userInput.value = "";

    displayMessage(userMessage, "user");
    const geminiResponse = await getGeminiResponse(userMessage);
    displayMessage(geminiResponse, "bot");
});

function displayMessage(message, sender) {
    const messageElement = document.createElement("p");
    messageElement.classList.add(sender);
    messageElement.textContent = message;
    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight;
}

async function getGeminiResponse(userMessage) {
    try {
        const promptText = await constructPrompt(userMessage);
        console.log("promt: ", promptText);

        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [
                            {
                                text: promptText,
                            },
                        ],
                    },
                ],
            }),
        });

        const data = await response.json();
        if (data.error) {
            console.error("API Error:", data.error);
            return "Sorry, I encountered an error. Please try again.";
        }

        // Extract the bot's response and add it to the conversation history
        const botResponse = data.candidates[0].content.parts[0].text;
        conversationHistory.push({sender: "Joy", text: botResponse});

        return botResponse;

    } catch (error) {
        console.error("Error calling Gemini API:", error);
        return "Sorry, I encountered an error. Please try again.";
    }
}

function formatActivityData() {
    return ACTIVITIES_DATA.map(
        (item) => `
    - **${item.name}**
      * **Category:** ${item.category}
      * **Frequency:** ${item.frequency}
      * **Way:** ${item.way}
      * **Location:** ${item.location}
      * **Description:** ${item.description}
  `
    ).join("\n");
}

async function constructPrompt(userMessage) {
    const activityData = formatActivityData();

    // Include conversation history in the prompt
    let historyString = "";
    conversationHistory.forEach((message) => {
        historyString += `${message.sender}: ${message.text}\n`;
    });

    const prompt = `You are a friendly and helpful AI assistant named 'Joy'.

        Your purpose is to help people find volunteering opportunities that are a good fit for them.

        Here's how a conversation would happen:
        1. Welcome them, rejoicing they want to connect with their community.
        2. Then ask about their interests, skills, and availability - frequency and location.
        -  Ask questions like:
                - 'What kind of causes are you passionate about?'
                - 'What skills or experience do you have that you'd like to share?'
                - 'How often are you available to volunteer?'
                - 'Where are you located?'
                - 'Are there any types of tasks you'd prefer or want to avoid?'
        3.  Based on their responses, suggest relevant volunteering tasks from a list of available opportunities.
        -  Be sure to provide clear descriptions of the tasks and the organizations.
        -  Explain why you think each task might be a good match for the user.
        4. Only recommend tasks from the list provided below.
        5. Allow users to ask follow-up questions or request alternative suggestions.

        In terms of conversation style:
        * Be concise and objective but also warm.
        * Focus on the user, not yourself.

        Here's the list of available tasks:
        ${activityData}

        ${historyString}

        User: ${userMessage}
        Joy:`;

    // Update conversation history
    conversationHistory.push({sender: "User", text: userMessage});

    return prompt;
}