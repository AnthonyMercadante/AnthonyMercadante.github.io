// React imports
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Material UI components and icons
import { Box, Typography, IconButton, useTheme, Button, } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ChatIcon from '@mui/icons-material/Chat';

const RealEstateBot = () => {
    const navigate = useNavigate();
    const theme = useTheme();

    const handleBack = () => {
        navigate(-1); // Navigate back to the previous page
    };

    const handleBotInteraction = () => {
        // Navigate to the bot interaction page. Update the route as needed.
        navigate('/BotInteraction');
    };

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
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto',
            [theme.breakpoints.down('md')]: {
                maxWidth: '90%',
                padding: theme.spacing(1),
            },
        },
        header: {
            marginBottom: theme.spacing(2),
        },
        paragraph: {
            marginBottom: theme.spacing(1),
            textAlign: 'left',
        },
        featureBox: {
            marginTop: theme.spacing(4),
            textAlign: 'left',
        },
        featureHeading: {
            marginBottom: theme.spacing(1),
        },
    };

    return (
        <Box sx={style.container}>
            <IconButton onClick={handleBack} sx={{ position: 'absolute', top: 20, left: 20, zIndex: 1 }}>
                <ArrowBackIcon />
            </IconButton>
            <Typography variant="h2" sx={style.header}><br></br><br></br>Real Estate AI Bot</Typography>

            <Typography variant="body1" sx={style.paragraph}>
                The Real Estate AI Bot, demonstrates an advanced application of OpenAI's GPT models tailored for real estate inquiries. Initially designed for the Toronto and Ontario markets, this bot is capable of processing complex user queries and maintaining conversation histories for contextual coherence.
            </Typography>

            <Typography variant="body1" sx={style.paragraph}><br></br>
                Its core functionalities include analyzing word frequency vectors, classifying utterances based on emotional tone or speech act, and employing OpenAI's completion and chat models for dynamic response generation. The bot's intelligent design ensures relevance and redundancy checks to optimize response quality, making it a robust tool for real estate queries.
            </Typography>

            <Box sx={style.featureBox}>
                <Typography variant="h4" sx={style.featureHeading}>Key Technical Features:</Typography>
                <ul>
                    <li><Typography variant="body1">Advanced integration with OpenAI's GPT models for insightful responses.</Typography></li>
                    <li><Typography variant="body1">Deployment on Azure App Service using Flask and CORS.</Typography></li>
                    <li><Typography variant="body1">Session-based conversation history management with inactivity timeout for context-aware interactions.</Typography></li>
                    <li><Typography variant="body1">Word frequency analysis for nuanced query understanding.</Typography></li>
                    <li><Typography variant="body1">Utilization of both completion and chat models for varied and appropriate responses.</Typography></li>
                    <li><Typography variant="body1">Sophisticated relevance and redundancy evaluation for response optimization.</Typography></li>
                </ul>
            </Box>


            <Box sx={style.featureBox}>
                <Typography variant="h4" sx={style.featureHeading}>Project Motivation:</Typography>
                <Typography variant="body1">
                    The inception of this bot was driven by the ambition to innovate in the real estate sector through AI. A key motivation behind this project was exploring the possibility of replacing the traditional real estate agent with an AI bot, provided it is trained on the correct data. This bot exemplifies the potential of AI in automating and enhancing customer interactions in real estate, offering a more efficient and data-driven alternative to conventional methods.
                </Typography>
            </Box>



            <Box sx={style.featureBox}>
                <Typography variant="h4" sx={style.featureHeading}>Technical Stack and Dependencies:</Typography>
                <ul>
                    <li><Typography variant="body1">OpenAI Python client library for interfacing with GPT models.</Typography></li>
                    <li><Typography variant="body1">Python 3.6 or higher for backend development.</Typography></li>
                    <li><Typography variant="body1">spaCy and sklearn for advanced NLP and machine learning tasks.</Typography></li>
                    <li><Typography variant="body1">Flask as the web framework for handling HTTP requests and serving the API.</Typography></li>
                </ul>
            </Box>
            <Button
                variant="contained"
                color="primary"
                endIcon={<ChatIcon />}
                onClick={handleBotInteraction}
                sx={{
                    marginTop: theme.spacing(4),
                    padding: theme.spacing(1, 4),
                    fontSize: '1rem',
                    marginBottom: '2em',
                }}
            >
                Interact with the AI Bot
            </Button>
        </Box>
    );

};

export default RealEstateBot;
