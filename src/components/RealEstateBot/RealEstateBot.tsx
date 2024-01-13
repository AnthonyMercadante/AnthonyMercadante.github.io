import React from 'react';
import { Box, Button, Typography, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const RealEstateBot = () => {
    const navigate = useNavigate();
    const theme = useTheme();

    const pythonCode = `
    """
    core_bot.py
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
        prompt = introduction + f"Question: {utterance}Response:"
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
            return f"Response 1: {completion_response}Response 2: {chat_response}"
    
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
        return redundancy_ratio > threshold`;

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
            <Typography variant="h2" sx={style.header}>RealEstate AI Bot</Typography>
            
            <Typography variant="body1" sx={style.paragraph}>
                This script defines the core functionality of a Real Estate Assistant Discord Bot. It integrates with OpenAI's GPT models to process user inquiries related to the real estate market, focusing on the Toronto and Ontario regions. The bot maintains a conversation history for context management, analyzes word frequency vectors, classifies utterances for emotional tone or speech act, and uses two different OpenAI API calls (completion and chat models) to generate informative and relevant responses.
            </Typography>
            
            <Typography variant="body1" sx={style.paragraph}>
                The script handles the construction of prompts for the OpenAI API, manages conversation history, analyzes word frequency, classifies utterances, determines the relevance and redundancy of responses, and decides the final response to be sent to the user. It is designed to be integrated with a Discord bot client for interaction in a Discord server environment.
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

            <Box sx={style.codeBox}>
                <Typography variant="h4" sx={style.featureHeading}>Python Code:</Typography>
                <SyntaxHighlighter language="python" style={dark}>
                    {pythonCode}
                </SyntaxHighlighter>
            </Box>
        </Box>
    );
};

export default RealEstateBot;
