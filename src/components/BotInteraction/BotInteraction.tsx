// React imports
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, IconButton, TextField, Button, List, ListItem, ListItemText, Paper } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SendIcon from '@mui/icons-material/Send';

type Message = {
    text: string;
    sender: string;
};

const BotInteraction = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<Message[]>([]);

    const handleBack = () => {
        navigate(-1); // Navigate back to the previous page
    };

    const handleSendMessage = async () => {
        const userInput = input.trim();
        if (userInput) {
            // Add the user's message to the chat display
            setMessages(messages => [...messages, { text: userInput, sender: 'user' }]);
            setInput('');

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
                setMessages(messages => [...messages, { text: data.response, sender: 'bot' }]);
            } catch (error) {
                console.error('Failed to send message:', error);
                // Optionally handle the error, e.g., show an error message in the chat
            }
        }
    };


    return (
        <Box sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', bgcolor: 'background.default', color: 'text.primary', height: '80vh', }}>
            <IconButton onClick={handleBack} sx={{ position: 'absolute', top: 20, left: 20, zIndex: 1 }}>
                <ArrowBackIcon />
            </IconButton>
            <Typography variant="h4" gutterBottom>
                Real Estate AI Bot Interaction
            </Typography>
            <Box sx={{ width: '100%', maxWidth: 600, minHeight: 400, bgcolor: 'background.paper', borderRadius: 2, padding: 2, marginTop: 1 }}>
                <List sx={{ maxHeight: 300, overflow: 'auto' }}>
                    {messages.map((message, index) => (
                        <ListItem key={index} style={{ alignSelf: message.sender === 'user' ? 'flex-end' : 'flex-start' }}>
                            <ListItemText
                                primary={message.text}
                                sx={{ wordBreak: 'break-word', background: message.sender === 'user' ? '#e0e0e0' : '#9fa8da', borderRadius: '10px', padding: '10px' }}
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
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        sx={{ mr: 1, bgcolor: 'background.paper' }}
                    />
                    <Button variant="contained" endIcon={<SendIcon />} onClick={handleSendMessage}>
                        Send
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default BotInteraction;
