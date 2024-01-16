// React imports
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, IconButton, TextField, Button, List, ListItem, ListItemText, ListItemIcon, CircularProgress, Paper } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SendIcon from '@mui/icons-material/Send';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

type Message = {
    text: string;
    sender: string;
};

const BotInteraction = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleBack = () => {
        navigate(-1); // Navigate back to the previous page
    };

    const messagesEndRef = useRef<HTMLLIElement | null>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);
    

    const handleExampleQuestion = async (question: string) => {
        // Add the example question to the chat display as a user message
        setMessages(messages => [...messages, { text: question, sender: 'user' }]);

        setIsLoading(true);

        try {
            // Send the messageto the Flask backend
            const response = await fetch('https://realestateassistantapi.azurewebsites.net/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: question }),
            });
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const data = await response.json();

            // Add the bot's response to the chat display
            setMessages(messages => [...messages, { text: data.response, sender: 'bot' }]);
        } catch (error) {
            console.error('Failed to send message:', error);
        } finally {
            setIsLoading(false);
        }
    };



    const handleSendMessage = async () => {
        const userInput = input.trim();
        if (userInput) {
            // Add the user's message to the chat display
            setMessages(messages => [...messages, { text: userInput, sender: 'user' }]);
            setInput('');
            setIsLoading(true);

            try {
                // Send the message to the Flask backend
                const response = await fetch('https://realestateassistantapi.azurewebsites.net/chat', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ message: userInput }),
                });


                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }

                const data = await response.json();

                // Add the bot's response to the chat display
                setIsLoading(false);
                setMessages(messages => [...messages, { text: data.response, sender: 'bot' }]);
            } catch (error) {
                console.error('Failed to send message:', error);
                setIsLoading(false);
            }
        }
    };


    return (
        <Box sx={{
            padding: 4.5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            bgcolor: 'background.default',
            color: 'text.primary',
            height: '100vh',
        }}>
            <IconButton onClick={handleBack} sx={{ position: 'absolute', top: 20, left: 20, zIndex: 1 }}>
                <ArrowBackIcon />
            </IconButton>
            <Typography variant="h4" gutterBottom><br></br>
                Real Estate AI Bot Interaction
            </Typography>
            <Box sx={{ width: '100%', maxWidth: 600, minHeight: 400, bgcolor: 'background.paper', borderRadius: 2, padding: 2, marginBottom: 2 }}>
                <List sx={{ maxHeight: 300, overflow: 'auto' }}>
                {messages.map((message, index) => (
    <ListItem 
        key={index} 
        style={{ alignSelf: message.sender === 'user' ? 'flex-end' : 'flex-start' }}
        ref={index === messages.length - 1 ? messagesEndRef : null}
    >
        <ListItemText
            primary={message.text}
            sx={{ wordBreak: 'break-word', background: message.sender === 'user' ? '#525050' : '#333769', borderRadius: '10px', padding: '10px' }}
        />
    </ListItem>
))}
                </List>
                <Box component="form" sx={{ display: 'flex', alignItems: 'center', marginTop: 1 }}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        placeholder="Type your message here..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        sx={{ mr: 1, bgcolor: 'background.paper' }}
                    />
                    <Button variant="contained" endIcon={<SendIcon />} onClick={handleSendMessage}>
                        Send
                    </Button>
                </Box>
                {isLoading && <CircularProgress />}
            </Box>
            {/* Example Questions Section */}
            <Paper sx={{ width: '100%', maxWidth: 600, padding: 2, bgcolor: 'background.paper' }} elevation={3}>
                <Typography variant="h6" gutterBottom sx={{ marginLeft: 2 }}>
                    Example Questions:
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <Button
                        variant="outlined"
                        startIcon={<HelpOutlineIcon />}
                        sx={{ justifyContent: 'flex-start', borderRadius: '20px', borderColor: 'primary.main' }}
                        onClick={() => handleExampleQuestion("Can you explain how down payments work in real estate transactions?")}
                    >
                        Can you explain how down payments work in real estate transactions?
                    </Button>
                    <Button
                        variant="outlined"
                        startIcon={<HelpOutlineIcon />}
                        sx={{ justifyContent: 'flex-start', borderRadius: '20px', borderColor: 'primary.main' }}
                        onClick={() => handleExampleQuestion("What should first-time homebuyers know before purchasing a property?")}
                    >
                        What should first-time homebuyers know before purchasing a property?
                    </Button>
                </Box>
            </Paper>

        </Box>
    );

};

export default BotInteraction;
