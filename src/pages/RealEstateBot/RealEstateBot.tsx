// React imports
import React from 'react';
import { Link } from 'react-router-dom';
import PageShell from '../../components/PageShell';

// Material UI components and icons
import { Box, Typography, useTheme, Grid } from '@mui/material';
import StoryLink from '../../components/StoryLink';

const RealEstateBot = () => {
  const theme = useTheme();

  const style = {
    paragraph: {
      marginBottom: theme.spacing(1),
      textAlign: 'left',
    },
    featureBox: {
      marginTop: theme.spacing(2),
      textAlign: 'left',
    },
    featureHeading: {
      marginBottom: theme.spacing(1),
    },
  };

  return (
    <PageShell
      title="Real Estate Bot"
      eyebrow="Bots / Conversational systems"
      parent={{ to: '/Bots', label: 'Bot projects' }}
      className="mui-case-study"
    >
      {/* Main Grid Container */}
      <Grid container spacing={2}>
        {/* Header */}
        <Grid item xs={12}>
          <StoryLink chapter="the-bot" label="I thought it would be funny to automate my sister" />
        </Grid>

        {/* Text Content */}
        <Grid item xs={12}>
          <Typography variant="body1" sx={style.paragraph}>
            The Real Estate Bot demonstrates an advanced application of OpenAI's GPT models tailored
            for real estate inquiries. Initially designed for the Toronto and Ontario markets, this
            bot is capable of processing complex user queries and maintaining conversation histories
            for contextual coherence.
          </Typography>

          <Typography variant="body1" sx={style.paragraph}>
            Its core functionalities include analyzing word frequency vectors, classifying
            utterances based on emotional tone or speech act, and employing OpenAI's completion and
            chat models for dynamic response generation. The bot's intelligent design ensures
            relevance and redundancy checks to optimize response quality, making it a robust tool
            for real estate queries.
          </Typography>
        </Grid>

        {/* Key Technical Features */}
        <Grid item xs={12}>
          <Box sx={style.featureBox}>
            <Typography variant="h2" sx={style.featureHeading}>
              Key Technical Features
            </Typography>
            <ul>
              <li>
                <Typography variant="body1">
                  Advanced integration with OpenAI's GPT models for insightful responses.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Deployment on Azure App Service using Flask and CORS.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Session-based conversation history management with inactivity timeout for
                  context-aware interactions.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Word frequency analysis for nuanced query understanding.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Utilization of both completion and chat models for varied and appropriate
                  responses.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Sophisticated relevance and redundancy evaluation for response optimization.
                </Typography>
              </li>
            </ul>
          </Box>
        </Grid>

        {/* Project Motivation */}
        <Grid item xs={12}>
          <Box sx={style.featureBox}>
            <Typography variant="h2" sx={style.featureHeading}>
              Project Motivation
            </Typography>
            <Typography variant="body1">
              The inception of this bot was driven by the ambition to innovate in the real estate
              sector through AI. A key motivation behind this project was exploring the possibility
              of replacing the traditional real estate agent with an AI bot, provided it is trained
              on the correct data. This bot exemplifies the potential of AI in automating and
              enhancing customer interactions in real estate, offering a more efficient and
              data-driven alternative to conventional methods.
            </Typography>
          </Box>
        </Grid>

        {/* Technical Stack and Dependencies */}
        <Grid item xs={12}>
          <Box sx={style.featureBox}>
            <Typography variant="h2" sx={style.featureHeading}>
              Technical Stack and Dependencies
            </Typography>
            <ul>
              <li>
                <Typography variant="body1">
                  OpenAI Python client library for interfacing with GPT models.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Python 3.6 or higher for backend development.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  spaCy and sklearn for advanced NLP and machine learning tasks.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Flask as the web framework for handling HTTP requests and serving the API.
                </Typography>
              </li>
            </ul>
          </Box>
        </Grid>

        {/* Interaction Button */}
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Link className="action-link" to="/BotInteraction">
              Try the interactive demo <span aria-hidden="true">↗</span>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </PageShell>
  );
};

export default RealEstateBot;
