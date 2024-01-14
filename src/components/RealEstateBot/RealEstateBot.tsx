import React, { useState } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { xonokai } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { IconButton, Tooltip } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import GetAppIcon from '@mui/icons-material/GetApp';
import CodeIcon from '@mui/icons-material/Code';
import { CSSProperties } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';



const RealEstateBot = () => {
    const navigate = useNavigate();
    const theme = useTheme();

    const [showCode, setShowCode] = useState(false);

    // Function to toggle code visibility
    const toggleCodeVisibility = () => {
        setShowCode(!showCode);
    };

    // State for core_bot.py
    const [showCoreBotCode, setShowCoreBotCode] = useState(false);

    // State for discord_real_estate_bot.py
    const [showDiscordBotCode, setShowDiscordBotCode] = useState(false);

    // State for terminal_bot.py
    const [showTerminalBotCode, setShowTerminalBotCode] = useState(false);

    // State for readme.txt
    const [showReadme, setShowReadme] = useState(false);

    // Toggle function for core_bot.py
    const toggleCoreBotCodeVisibility = () => {
        setShowCoreBotCode(!showCoreBotCode);
    };

    // Toggle function for discord_real_estate_bot.py
    const toggleDiscordBotCodeVisibility = () => {
        setShowDiscordBotCode(!showDiscordBotCode);
    };

    // Toggle function for terminal_bot.py
    const toggleTerminalBotCodeVisibility = () => {
        setShowTerminalBotCode(!showTerminalBotCode);
    };

    // Toggle function for readme.txt
    const toggleReadmeVisibility = () => {
        setShowReadme(!showReadme);
    };

    const handleBack = () => {
        navigate(-1); // Navigate back to the previous page
    };

    const buttonStyle = {
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        marginBottom: '10px',
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '10px 20px'
    };

    // Function to download zip file
    const downloadZip = () => {
        const link = document.createElement('a');
        link.href = './real_estate_assistant.zip';
        link.download = 'real_estate_assistant.zip';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // Custom styles for SyntaxHighlighter
    const customStyle: CSSProperties = {
        textAlign: 'left' as 'left', // Explicitly set the type
        lineHeight: '1.5', // This should be fine as a string
        fontSize: '1em', // This should also be fine as a string
        // Add other custom styles as needed
    };

    const discordBotCode = `
"""
discord_real_estate_bot.py

This script creates and runs a Discord bot client that serves as a Real Estate Assistant. The bot 
interfaces with the OpenAI API to respond to queries related to real estate, focusing on the Toronto 
and Ontario markets. It listens for messages in Discord, processes them, and uses OpenAI's language 
models to generate responses.

The bot uses a command prefix to distinguish commands from regular messages and supports splitting 
long responses to adhere to Discord's message length limits.

Dependencies:
- discord.py: A Python library for interacting with Discord's API
- core_bot.py: A custom script for handling OpenAI API calls and response generation

Usage:
1. Set up a Discord bot token in 'bot_token.txt'.
2. Run this script to start the bot.
3. Interact with the bot by sending commands prefixed with '!' in a Discord server.

Anthony Mercadante, November 2023
"""

import discord
from core_bot import ask_openai

class MyClient(discord.Client):
    command_prefix = "!"

    def __init__(self):
        """
        Initializes the Discord client with specific intents required for the bot to function.
        """
        # Define the intents for message and guild events
        intents = discord.Intents.all()
        intents.messages = True
        intents.guilds = True

        # Initialize the client with the defined intents
        super().__init__(intents=intents)

    async def on_ready(self):
        """
        Handles the event when the bot successfully connects to Discord.
        """
        print('Logged on as', self.user)

    async def on_message(self, message):
        """
        Handles incoming messages and responds to commands prefixed with the command_prefix.

        Args:
            message (discord.Message): The message object containing information about the sender and the content.
        """
        # Debug: Print received message and author
        print(f"Received message: '{message.content}' from {message.author}")

        # Ignore messages from the bot itself
        if message.author == self.user:
            print("Message is from the bot itself. Ignoring.")
            return

        # Check if message starts with the command prefix
        if not message.content.startswith(self.command_prefix):
            print(f"Message does not start with the command prefix '{self.command_prefix}'. Ignoring.")
            return

        # Extract the command after the prefix
        command = message.content[len(self.command_prefix):].strip()
        print(f"Extracted command: '{command}'")

        # Fetch response from OpenAI and send back
        try:
            response = await self.loop.run_in_executor(None, ask_openai, command)
            print(f"OpenAI response: '{response}'")
            # Split the response if it's too long and send each chunk
            for chunk in self.split_into_chunks(response, max_length=2000):
                await message.channel.send(chunk)
        except Exception as e:
            error_msg = f"Error while processing message: {e}"
            print(error_msg)
            await message.channel.send(error_msg)

    def split_into_chunks(self, text, max_length):
        """
        Splits a given string into chunks of a specified maximum length.

        Args:
            text (str): The string to be split.
            max_length (int): The maximum length of each chunk.

        Returns:
            list: A list of string chunks.
        """
        return [text[i:i+max_length] for i in range(0, len(text), max_length)]

if __name__ == "__main__":
    # Instantiate the client and run it
    client = MyClient()
    with open("bot_token.txt") as file:
        token = file.read().strip()
    client.run(token)
`;
    const terminalBotCode = `
    """
    terminal_bot.py
    
    This script runs a text-based version of the Real Estate Assistant Bot in the terminal. 
    It allows users to interact with the bot directly through the command line, providing 
    responses to real estate-related inquiries using OpenAI's API. This terminal-based bot 
    is ideal for testing and demonstration purposes.
    
    The bot uses the 'ask_openai' function from the 'core_bot' module to process user inputs 
    and generate responses. Users can interact with the bot by typing their queries and 
    can exit the bot by typing 'quit'.
    
    Dependencies:
    - core_bot.py: A custom script for handling OpenAI API calls and response generation
    
    Usage:
    - Run this script in a terminal to start interacting with the bot.
    - Type a query and press Enter to receive a response.
    - Type 'quit' and press Enter to exit the bot.
    
    Anthony Mercadante, November 2023
    """
    
    from core_bot import ask_openai
    
    def run_terminal_bot():
        """
        Runs the Real Estate Bot in terminal mode, allowing user interaction through text input.
        The function loops to continuously accept user input and provide responses until the user
        decides to exit by typing 'quit'.
        """
        print("Real Estate Bot is running in terminal mode. Type 'quit' to exit.")
    
        # Main loop for user interaction
        while True:
            user_input = input("You: ")
            if user_input.lower() == 'quit':
                break
    
            # Get the response from the core bot module
            response = ask_openai(user_input)
            print("RealEstateBot:", response)
    
    if __name__ == "__main__":
        # Execute the terminal bot function
        run_terminal_bot()
        `;


    const readmeContent = `
    Real Estate Assistant Bot Setup Guide

	This guide provides step-by-step instructions on how to set up and run the Real Estate Assistant Bot. 
	The bot is designed to offer information about the Toronto/Ontario real estate market and can be run in two modes:

	- Terminal-based mode
	- Discord bot mode



Prerequisites
	Before you start, ensure you have the following:

	- Python (version 3.6 or higher) installed on your computer. You can download Python from https://www.python.org/downloads/.
	- An OpenAI API key. You can obtain it by signing up at https://openai.com/.
	- spaCy and sklearn Python libraries for advanced natural language processing and machine learning tasks.



Setting Up
	1. Extract the Files: 
		- Unzip the provided file to a folder on your computer.

	2. Install Required Packages: 
		- Open a terminal or command prompt and navigate to the folder containing the extracted files. 
		- Run the following command to install necessary Python packages:
	   		pip install openai discord.py spacy sklearn
	   
	   Note: You may need to download additional spaCy language models using spacy download en_core_web_sm.

3. Set Up the OpenAI API Key:

   - Windows:
     1. Open Command Prompt and run:
        	setx OPENAI_API_KEY "Your-OpenAI-API-Key"

     2. Replace Your-OpenAI-API-Key with your actual API key.

     3. Restart Command Prompt to apply the changes.

   - macOS/Linux:
     1. Open Terminal and run:
        	export OPENAI_API_KEY="Your-OpenAI-API-Key"

     2. Replace Your-OpenAI-API-Key with your actual API key.

     3. To make this change permanent, add the command to your ~/.bashrc or ~/.bash_profile.



Running the Terminal Bot
	1. In the terminal or command prompt, navigate to the folder containing the bot files.

	2. Run the bot using the command:
	   	python terminal_bot.py

	3. Interact with the bot by typing questions. Type 'quit' to exit the bot.



Setting Up the Discord Bot
	1. Create a Discord Bot Account:
	   - Visit the Discord Developer Portal https://discord.com/developers/applications.
	   - Create a new application and name it.
	   - Go to the "Bot" tab and click "Add Bot".
	   - Note the bot token (you'll need this later).

	2. Add the Discord Bot Token:
	   - Open the bot_token.txt file.
	   - Replace the existing content with your Discord bot token.

	3. Invite the Bot to Your Server:
	   - In the Discord Developer Portal, navigate to the "OAuth2" tab.
	   - Under "Scopes," select "bot".
	   - Under "Bot Permissions," choose the permissions your bot needs.
	   - Use the generated URL to invite the bot to your server.

	4. Run the Discord Bot:
	   - In the terminal or command prompt, run:
	     	python discord_real_estate_bot.py

	   - The bot should now be active on your server.



Using the Discord Bot
	- Use the bot in your server by typing commands prefixed with !, followed by your query about the real estate market.
	- Example: !tell me about the market in Toronto.



Troubleshooting
	If you encounter any issues, ensure that:
		- Python is correctly installed and in your system's PATH.
		- The OpenAI API key is correctly set as an environment variable.
		- The Discord bot token is correctly placed in bot_token.txt.
		- spaCy and sklearn libraries are properly installed.

For further assistance, refer to the official documentation of Python, Discord.py, OpenAI, spaCy, and sklearn.
`;



    const coreBotCode = `
"""
core_bot.py

This script defines the core functionality of a Real Estate Assistant Discord Bot. It integrates 
with OpenAI's GPT models to process user inquiries related to the real estate market, focusing on 
the Toronto and Ontario regions. The bot maintains a conversation history for context management, 
analyzes word frequency vectors, classifies utterances for emotional tone or speech act, and uses 
two different OpenAI API calls (completion and chat models) to generate informative and relevant 
responses.

The script handles the construction of prompts for the OpenAI API, manages conversation history, 
analyzes word frequency, classifies utterances, determines the relevance and redundancy of responses, 
and decides the final response to be sent to the user. It is designed to be integrated with a Discord 
bot client for interaction in a Discord server environment.

Key Features:
- Utilizes OpenAI's powerful language models to answer real estate-related queries.
- Analyzes word frequency vectors for better understanding of queries.
- Classifies utterances based on emotional tone or speech act.
- Maintains conversation context for more coherent and relevant interactions.
- Employs two distinct models (completion and chat) for varied response generation.
- Implements relevance and redundancy checks to optimize response quality.

Dependencies:
- OpenAI Python client library
- Python 3.6 or higher
- Discord.py library for Discord bot integration
- spaCy for NLP tasks
- sklearn for machine learning tasks

Usage:
The functions in this script are intended to be called from a Discord bot client script. It requires
an OpenAI API key set as an environment variable ('OPENAI_API_KEY') for making API requests.

Created by Anthony Mercadante
Date: November 2023
"""

from openai import OpenAI
import os
import spacy
from sklearn.feature_extraction.text import CountVectorizer

# Initialize the OpenAI client with the API key from environment variables
client = OpenAI(api_key=os.environ['OPENAI_API_KEY'])

# Load the spaCy language model
nlp = spacy.load("en_core_web_sm")

# Global variable to maintain the conversation history
conversation_history = []

def analyze_word_frequency(utterance):
    """
    Analyzes the frequency of words in the given utterance.

    Args:
        utterance (str): The user's input message.

    Returns:
        dict: A dictionary of word frequencies.
    """
    doc = nlp(utterance)
    vectorizer = CountVectorizer()
    vectorized_words = vectorizer.fit_transform([utterance])
    word_freq = dict(zip(vectorizer.get_feature_names_out(), vectorized_words.toarray().tolist()[0]))
    return word_freq

def classify_utterance(utterance):
    """
    Classifies the given utterance into categories like emotional tone or speech act.
    Placeholder function - actual implementation required.

    Args:
        utterance (str): The user's input message.

    Returns:
        str: The classified category of the utterance.
    """
    # Placeholder: Implement a classifier or use an existing model
    return "general_inquiry"

def ask_openai(utterance):
    """
    Processes the given user utterance and generates a response using OpenAI's API.

    Args:
        utterance (str): The user's input message.

    Returns:
        str: The generated response from the bot.
    """
    global conversation_history
    # Analyze word frequency and classify utterance
    word_freq = analyze_word_frequency(utterance)
    utterance_category = classify_utterance(utterance)

    # Append the user's utterance and additional info to the conversation history
    conversation_history.append({"role": "user", "content": utterance, "word_freq": word_freq, "category": utterance_category})

    try:
        # Construct a prompt for the completion model
        prompt = create_completion_prompt(utterance)
        # Set a maximum token limit for the prompt
        max_prompt_tokens = 500
        prompt_length = len(prompt.split())
        remaining_tokens = max(20, max_prompt_tokens - prompt_length)

        # Make a call to the completion model
        response_completion = client.completions.create(
            model="text-davinci-003",
            prompt=prompt,
            temperature=0.7,
            max_tokens=remaining_tokens
        )
        # Extract and clean the response
        completion_response = response_completion.choices[0].text.strip()
        # Append the response to the conversation history
        conversation_history.append({"role": "assistant", "content": completion_response})
    except Exception as e:
        # Handle exceptions and return the error message
        completion_response = f"An error occurred: {str(e)}"

    try:
        # Make a call to the chat model
        response_chat = client.chat.completions.create(
            model="gpt-3.5-turbo",
            max_tokens=remaining_tokens,
            messages=create_chat_messages_for_api()
        )
        # Extract and clean the chat model response
        chat_response = response_chat.choices[0].message.content.strip()
        # Append the response to the conversation history
        conversation_history.append({"role": "assistant", "content": chat_response})
    except Exception as e:
        # Handle exceptions and return the error message
        chat_response = f"An error occurred: {str(e)}"

    # Decide which response to return
    return decide_response(completion_response, chat_response)

def create_completion_prompt(utterance):
    """
    Creates a completion prompt with a predefined context for the OpenAI model.

    Args:
        utterance (str): The user's input message.

    Returns:
        str: The constructed prompt for the OpenAI model.
    """
    # Predefined context for the AI model
    introduction = (
        "You are an expert real estate agent well-versed in the Toronto and Ontario housing market. "
        "You have comprehensive knowledge of local real estate laws, regulations, market trends, "
        "property valuations, and lending practices. You provide detailed, accurate, and up-to-date information. "
        "Your responses are professional and adhere to the current legal and market standards."
    )
    # Combine the context with the user's question
    prompt = introduction + f"Question: {utterance} Response:"
    return prompt

def create_chat_messages_for_api():
    """
    Formats the conversation history for the chat model API call.

    Returns:
        list: A list of messages formatted for the chat model, excluding 'category' and 'word_freq'.
    """
    formatted_history = []
    for message in conversation_history:
        formatted_message = {"role": message["role"], "content": message["content"]}
        formatted_history.append(formatted_message)
    
    return formatted_history

def decide_response(completion_response, chat_response):
    """
    Decides which response to use based on relevance and redundancy checks.

    Args:
        completion_response (str): The response from the completion model.
        chat_response (str): The response from the chat model.

    Returns:
        str: The chosen response after evaluation.
    """
    # Evaluate and return the most appropriate response
    if is_response_relevant(completion_response) and not is_response_relevant(chat_response):
        return completion_response
    elif is_response_relevant(chat_response) and not is_response_relevant(completion_response):
        return chat_response
    elif is_response_redundant(completion_response, chat_response):
        return completion_response
    else:
        return f"Response 1: {completion_response} Response 2: {chat_response}"

def is_response_relevant(response):
    """
    Checks if the given response is relevant based on predefined criteria.

    Args:
        response (str): The response to evaluate.

    Returns:
        bool: True if the response is relevant, False otherwise.
    """
    important_keywords = set(["real estate", "market", "property", "Toronto", "Ontario", "laws", "regulations", "lending"])
    response_lower = response.lower()
    for keyword in important_keywords:
        if keyword in response_lower:
            return True
    min_length, max_length = 20, 300
    if len(response) < min_length or len(response) > max_length:
        return False
    return True

def is_response_redundant(response1, response2):
    """
    Checks if two responses are redundant to each other.

    Args:
        response1 (str): The first response.
        response2 (str): The second response.

    Returns:
        bool: True if the responses are redundant, False otherwise.
    """
    words1 = set(response1.lower().split())
    words2 = set(response2.lower().split())
    common_words = words1.intersection(words2)
    threshold = 0.5
    redundancy_ratio = len(common_words) / min(len(words1), len(words2))
    return redundancy_ratio > threshold
`;


    const style = {
        container: {
            padding: theme.spacing(3),
            color: theme.palette.common.white,
            backgroundColor: theme.palette.background.default,
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: '600px', // Set max width to 600px
            marginLeft: 'auto', // Center the container
            marginRight: 'auto',
            [theme.breakpoints.down('md')]: { // Adjust for medium and smaller devices
                maxWidth: '100%',
                padding: theme.spacing(2),
            },
        },
        header: {
            marginBottom: theme.spacing(2),
        },
        paragraph: {
            marginBottom: theme.spacing(1),
            textAlign: 'left', // Align text to the left
        },
        featureBox: {
            marginTop: theme.spacing(4),
            textAlign: 'left',
        },
        featureHeading: {
            marginBottom: theme.spacing(1),
        },
        motivationBox: {
            marginTop: theme.spacing(4),
            textAlign: 'left',
        },
        codeBox: {
            marginTop: theme.spacing(4),
            backgroundColor: '#1e1e1e',
            padding: theme.spacing(2),
            borderRadius: theme.shape.borderRadius,
            boxShadow: theme.shadows[1],
            overflowX: 'auto',
            color: '#f8f8f2', // Adjust the text color if needed
            [theme.breakpoints.down('sm')]: { // Adjust for small devices
                fontSize: '0.8em', // Smaller font size for small devices
                width: '100%'
            },

        },
    };

    return (

        <Box sx={style.container}>
            <IconButton onClick={handleBack} sx={{ position: 'absolute', top: 20, left: 20, zIndex: 1 }}>
                <ArrowBackIcon />
            </IconButton>
            <Typography variant="h2" sx={style.header}><br></br>Real Estate AI Bot</Typography>

            <Typography variant="body1" sx={style.paragraph}>
                This script is the backbone of a Real Estate Assistant Discord Bot, leveraging OpenAI's GPT models for handling real estate inquiries, particularly within the Toronto and Ontario markets. It's adept at maintaining conversation histories to ensure contextually aware interactions, while also utilizing advanced techniques like word frequency analysis and emotional tone classification to understand and respond to user queries effectively.
            </Typography>

            <Typography variant="body1" sx={style.paragraph}><br></br>
                Furthermore, the script is intricately designed to craft detailed prompts for the OpenAI API, ensuring each response is tailored and relevant. Its sophisticated logic not only manages dialogue history but also evaluates the relevance and redundancy of potential responses. This seamless integration with a Discord bot client allows for dynamic interactions in a server environment, enhancing user engagement.
            </Typography>


            <Box sx={style.featureBox}>
                <Typography variant="h4" sx={style.featureHeading}>Key Features:</Typography>
                <ul>
                    <li><Typography variant="body1">Utilizes OpenAI's powerful language models to answer real estate-related queries.</Typography></li>
                    <li><Typography variant="body1">Analyzes word frequency vectors for better understanding of queries.</Typography></li>
                    <li><Typography variant="body1">Classifies utterances based on emotional tone or speech act.</Typography></li>
                    <li><Typography variant="body1">Maintains conversation context for more coherent and relevant interactions.</Typography></li>
                    <li><Typography variant="body1">Employs two distinct models (completion and chat) for varied response generation.</Typography></li>
                    <li><Typography variant="body1">Implements relevance and redundancy checks to optimize response quality.</Typography></li>
                </ul>
            </Box>

            <Box sx={style.motivationBox}>
                <Typography variant="h4" sx={style.featureHeading}>Project Motivation:</Typography>
                <Typography variant="body1">
                    This bot was created as an experiment to see if it's possible to replace the need for a traditional real estate agent with a bot trained on the right data. The goal is to provide instant, accurate, and personalized real estate advice using advanced AI technology.
                </Typography>
            </Box>

            <Box sx={style.motivationBox}>
                <Typography variant="h4" sx={style.featureHeading}>Discord Integration: Streamlining Development</Typography>
                <Typography variant="body1">
                    To enhance the development of the RealEstate AI Bot, I integrated it with Discord. This decision significantly accelerated the initial setup by eliminating the need to create a custom GUI. Utilizing Discord's existing chat interface allowed for immediate and efficient interaction with the bot, saving considerable time and focusing on its core functionalities.
                </Typography>
            </Box>



            <Box sx={style.featureBox}>
                <Typography variant="h4" sx={style.featureHeading}>Dependencies:</Typography>
                <ul>
                    <li><Typography variant="body1">OpenAI Python client library</Typography></li>
                    <li><Typography variant="body1">Python 3.6 or higher</Typography></li>
                    <li><Typography variant="body1">Discord.py library for Discord bot integration</Typography></li>
                    <li><Typography variant="body1">spaCy for NLP tasks</Typography></li>
                    <li><Typography variant="body1">sklearn for machine learning tasks</Typography></li>
                </ul>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                {/* Download Zip Button */}
                <Tooltip title="Download Zip">
                    <IconButton onClick={downloadZip} style={buttonStyle}>
                        <GetAppIcon />
                        <Typography variant="button" style={{ marginLeft: '5px' }}>Download Zip</Typography>
                    </IconButton>
                </Tooltip>

                {/* File Buttons */}
                {/* core_bot.py button */}
                <Tooltip title={showCoreBotCode ? "Hide code" : "View core_bot.py"}>
                    <IconButton onClick={toggleCoreBotCodeVisibility} style={buttonStyle}>
                        <CodeIcon />
                        <Typography variant="button" style={{ marginLeft: '5px' }} >{showCoreBotCode ? 'Hide' : 'View'} core_bot.py</Typography>
                    </IconButton>
                </Tooltip>
                {showCoreBotCode && (
                    <Box sx={style.codeBox}>
                        <SyntaxHighlighter language="python" style={xonokai} customStyle={customStyle} wrapLines={true} showLineNumbers={true}>
                            {coreBotCode}
                        </SyntaxHighlighter>
                    </Box>
                )}

                {/* discord_real_estate_bot.py button */}
                <Tooltip title={showDiscordBotCode ? "Hide code" : "View discord_real_estate_bot.py"}>
                    <IconButton onClick={toggleDiscordBotCodeVisibility} style={buttonStyle}>
                        <CodeIcon />
                        <Typography variant="button" style={{ marginLeft: '5px' }}>{showDiscordBotCode ? 'Hide' : 'View'} discord_real_estate_bot.py</Typography>
                    </IconButton>
                </Tooltip>
                {showDiscordBotCode && (
                    <Box sx={style.codeBox}>
                        <SyntaxHighlighter language="python" style={xonokai} customStyle={customStyle} wrapLines={true} showLineNumbers={true}>
                            {discordBotCode}
                        </SyntaxHighlighter>
                    </Box>
                )}

                {/* terminal_bot.py button */}
                <Tooltip title={showTerminalBotCode ? "Hide code" : "View terminal_bot.py"}>
                    <IconButton onClick={toggleTerminalBotCodeVisibility} style={buttonStyle}>
                        <CodeIcon />
                        <Typography variant="button" style={{ marginLeft: '5px' }}>{showTerminalBotCode ? 'Hide' : 'View'} terminal_bot.py</Typography>
                    </IconButton>
                </Tooltip>
                {showTerminalBotCode && (
                    <Box sx={style.codeBox}>
                        <SyntaxHighlighter language="python" style={xonokai} customStyle={customStyle} wrapLines={true} showLineNumbers={true}>
                            {terminalBotCode}
                        </SyntaxHighlighter>
                    </Box>
                )}

                {/* readme.txt button */}
                <Tooltip title={showReadme ? "Hide" : "View readme.txt"}>
                    <IconButton onClick={toggleReadmeVisibility} style={buttonStyle}>
                        <DescriptionIcon />
                        <Typography variant="button" style={{ marginLeft: '5px' }}>{showReadme ? 'Hide' : 'View'} readme.txt</Typography>
                    </IconButton>
                </Tooltip>
                {showReadme && (
                    <Box sx={style.codeBox}>
                        <SyntaxHighlighter language="" style={xonokai} customStyle={customStyle} wrapLines={true} showLineNumbers={true}>
                            {readmeContent}
                        </SyntaxHighlighter>
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default RealEstateBot;
