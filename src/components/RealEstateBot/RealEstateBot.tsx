import React from 'react';
import { Box, Button, Typography, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const RealEstateBot = () => {
    const navigate = useNavigate();
    const theme = useTheme();

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
                To enhance the development of the RealEstate AI Bot, we integrated it with Discord. This decision significantly accelerated the initial setup by eliminating the need to create a custom GUI. Utilizing Discord's existing chat interface allowed for immediate and efficient interaction with the bot, saving considerable time and focusing on its core functionalities.
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
        </Box>
    );
};

export default RealEstateBot;
