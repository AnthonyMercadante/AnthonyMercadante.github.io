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

    const handleSendMessage = () => {
        // Add message to the chat display and clear input
        if (input.trim()) {
            setMessages([...messages, { text: input, sender: 'user' }]);
            setInput('');

            // Here, you can also send the message to your Python backend and get the response
        }
    };

    return (
        <Box sx={{ padding: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', bgcolor: 'background.default', color: 'text.primary', height: '100vh' }}>
            <IconButton onClick={handleBack} sx={{ position: 'absolute', top: 20, left: 20, zIndex: 1 }}>
                <ArrowBackIcon />
            </IconButton>
            <Typography variant="h4" gutterBottom>
                Real Estate AI Bot Interaction
            </Typography>
            <Box sx={{ width: '100%', maxWidth: 600, minHeight: 400, bgcolor: 'background.paper', borderRadius: 2, padding: 2, marginTop: 2 }}>
                <List sx={{ maxHeight: 300, overflow: 'auto' }}>
                    {messages.map((message, index) => (
                        <ListItem key={index}>
                            <ListItemText primary={message.text} sx={{ wordBreak: 'break-word' }} />
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
