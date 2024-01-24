import React, { useState } from 'react';
import { ListItem, ListItemText, Collapse, IconButton, Box } from '@mui/material';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css'; 
import FolderIcon from '@mui/icons-material/Folder';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

const FileTreeItem = ({ fileName, codeSnippet }: { fileName: string; codeSnippet?: string }) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <>
            <ListItem button onClick={handleClick} sx={{ pl: 2, '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.08)' }, cursor: 'pointer' }}>
                <IconButton edge="start" disableRipple>
                    {codeSnippet ? (open ? <FolderOpenIcon sx={{ color: '#fff' }} /> : <FolderIcon sx={{ color: '#fff' }} />) : <InsertDriveFileIcon sx={{ color: '#fff' }} />}
                </IconButton>
                <ListItemText primary={fileName} primaryTypographyProps={{ style: { color: '#fff' } }} />
                {codeSnippet && (open ? <ExpandLess sx={{ color: '#fff' }} /> : <ExpandMore sx={{ color: '#fff' }} />)}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <Box sx={{ backgroundColor: '#2d2d2d', color: '#fff', padding: '1rem', fontFamily: 'monospace', borderRadius: '4px', marginLeft: '2rem', marginRight: '2rem', overflow: 'auto', whiteSpace: 'pre-wrap' }}>
                    <div dangerouslySetInnerHTML={{ __html: hljs.highlight(codeSnippet || '', { language: 'java' }).value }} />
                </Box>
            </Collapse>
        </>
    );
};

export default FileTreeItem;
export {}; 
