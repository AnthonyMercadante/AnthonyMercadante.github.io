import React from 'react';
import { Box, Typography, IconButton, Grid } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LandscapeOverlay from '../../components/LandscapeOverlay'; 
import { useNavigate } from 'react-router-dom';
import Starfield from '../../components/Starfield';

const style = {
    container: {
        padding: '3rem',
        color: '#E0E0E0', 
        backgroundColor: '#1C1C1E', 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '600px',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '12px',
        '@media (max-width: 600px)': {
            maxWidth: '100%',
            padding: '1rem',
        }, 
    },
    header: {
        marginBottom: '2rem',
        textAlign: 'center',
        fontSize: '2rem',
        color: '#FFFFFF', 
    },
    paragraph: {
        marginBottom: '1rem',
        textAlign: 'left',
        lineHeight: '1.6', 
    },
    featureBox: {
        marginTop: '4rem',
        textAlign: 'left',
    },
    featureHeading: {
        marginBottom: '1rem',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    backButton: {
        position: 'absolute', 
        top: '20px', 
        left: '20px', 
        zIndex: 1,
    },
    codeSnippet: {
        backgroundColor: '#333',
        color: '#ddd',
        padding: '1rem',
        borderRadius: '8px', 
    },
    link: {
        color: '#0a84ff', 
        textDecoration: 'none', 
        '&:hover': {
            textDecoration: 'underline', 
        },
    }
};


const BattleShipBot = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1); // Navigate back to the previous page
    };

    return (
        <Box sx={style.container}>
            <Starfield/>
            <IconButton onClick={handleBack} sx={style.backButton}>
                <ArrowBackIcon />
            </IconButton>

            <Grid container spacing={2}>
                <ProjectOverview />
                <YourApproach />
                <TechnicalImplementation />
                <Results />
                <LearningsReflections />
                <CodeAccessibility />
                <ContactInformation />
            </Grid>

            <LandscapeOverlay />
        </Box>
    );
};

const ProjectOverview = () => {
    return (
        <Grid item xs={12}>
            <Typography variant="h2" sx={style.header}><br></br><br></br>
                Battleship Strategy Bot
            </Typography>
            <Typography variant="body1" sx={style.paragraph}>
                The BattleShipBot, is an advanced Battleship game bot designed to play against an opponent with strategic precision. 
                This bot utilizes a unique combination of probabilistic and targeted strategies to enhance its gameplay, aiming to achieve the 
                lowest average number of shots across multiple games on a 10x10 grid.
            </Typography>
            <Typography variant="body1" sx={style.paragraph}>
                Objective: Minimize the number of shots required to sink all enemy ships across 10,000 games.
            </Typography>
        </Grid>
    );
}

const YourApproach = () => {
    return (
        <Grid item xs={12}>
            <Typography variant="h4" sx={style.featureHeading}>My Approach</Typography>
            <Typography variant="body1" sx={style.paragraph}>
                BattleShipBot implements a hybrid strategy, integrating both probabilistic and targeted approaches. 
                It leverages historical data to make educated guesses in the early game and switches to a 
                more focused approach once a ship is hit, targeting specific areas to effectively sink ships.
            </Typography>
            <Typography variant="body1" sx={style.paragraph}>
                The bot employs arrays, sets, maps, and priority queues to manage the game state, track ship placements, 
                and calculate shot probabilities. This selection of data structures ensures efficient data management 
                and optimal decision-making during gameplay.
            </Typography>
        </Grid>
    );
}

const TechnicalImplementation = () => {
    return (
        <Grid item xs={12}>
            <Typography variant="h4" sx={style.featureHeading}>Technical Implementation</Typography>
            <Typography variant="body1" sx={style.paragraph}>
                One challenge was efficiently managing the probabilistic calculations for shot selection. 
                This was solved by using a priority queue to rank cells based on their likelihood of containing a ship, 
                significantly optimizing the shot selection process.
            </Typography>
            <pre style={{ backgroundColor: '#333', color: '#ddd' }}><code>
                {`// Example: Method to Update Probability Map
private void updateProbabilityMap() {
    // Reset the probability map to zero for all points...
}`}
            </code></pre>
        </Grid>
    );
}

const Results = () => {
    return (
        <Grid item xs={12}>
            <Typography variant="h4" sx={style.featureHeading}>Results</Typography>
            <Typography variant="body1" sx={style.paragraph}>
                The BattleShip bot achieved an impressive average shot count well below the goal target, showcasing its 
                effectiveness in strategically playing Battleship. The precise combination of algorithms and data 
                structures played a pivotal role in this achievement.
            </Typography>
        </Grid>
    );
}

const LearningsReflections = () => {
    return (
        <Grid item xs={12}>
            <Typography variant="h4" sx={style.featureHeading}>Learnings and Reflections</Typography>
            <Typography variant="body1" sx={style.paragraph}>
                This project enhanced my understanding of algorithm efficiency and data structure selection. 
                The importance of choosing the right strategy based on game context was a key takeaway, 
                offering insights into adaptive algorithm design.
            </Typography>
        </Grid>
    );
}

const CodeAccessibility = () => {
    return (
        <Grid item xs={12}>
            <Typography variant="h4" sx={style.featureHeading}>Code Accessibility</Typography>
            <Typography variant="body1" sx={style.paragraph}>
                <a href="https://github.com/yourusername/titanbot" style={{ color: '#0a84ff' }}>
                    View the full code on GitHub
                </a>
            </Typography>
        </Grid>
    );
}

const ContactInformation = () => {
    return (
        <Grid item xs={12}>
            <Typography variant="h4" sx={style.featureHeading}>Contact Information</Typography>
            <Typography variant="body1" sx={style.paragraph}>
                Anthony Mercadante - Software Development Student<br />
                Email: Anthony.Mercadante@ProtonMail.com
            </Typography>
        </Grid>
    );
}

export default BattleShipBot;
