import React from 'react';
import { Container, Typography, Box, Paper, Chip, Divider, Link } from '@mui/material';

const techStack = [
  'React Native', 'FastAPI', 'PostgreSQL', 'ChatGPT API', 'Google Places API'
];

const QuestProject = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 6, mb: 8 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        fontWeight="bold"
        sx={{ color: '#5596e6', mb: 1 }}
        fontFamily="monospace"
      >
        Quest
      </Typography>

      <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="body1" color="text.secondary" paragraph>
          As part of HackTX, my team and I created a React Native mobile application that gives users daily challenges to step out of their comfort zone. We implemented a personalized feed and leaderboard system to gamify the experience and encourage social participation.
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Using onboarding responses, we called the ChatGPT API to generate tailored challenges. The Google Places API was integrated to identify nearby locations for completing tasks. Data was stored and managed using FastAPI and PostgreSQL.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom>
          Technologies Used
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
          {techStack.map((tech, idx) => (
            <Chip key={idx} label={tech} variant="outlined" sx={{ color: '#3BBA9C', borderColor: '#3BBA9C' }} />
          ))}
        </Box>

        {/* GitHub Link */}
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            View the code on{' '}
            <Link
              href="https://github.com/AyanGupta516/Quest"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: '#5596e6', fontWeight: 'bold', textDecoration: 'none' }}
            >
              GitHub →
            </Link>
          </Typography>
        </Box>

        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: 0,
            paddingTop: '56.25%',
            mt: 5,
            borderRadius: 2,
            boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
            overflow: 'hidden',
            willChange: 'transform',
          }}
        >
          <iframe
            src="https://docs.google.com/presentation/d/19DyWyPqF6YeVp7Qv8iMvSZc1MfaJD84fBETd430PHCo/embed?start=false&loop=true&delayms=5000"
            frameBorder="0"
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              top: 0,
              left: 0,
              border: 'none',
            }}
            allowFullScreen
            title="Quest Slideshow"
          />
        </Box>
      </Paper>
    </Container>
  );
};

export default QuestProject;
