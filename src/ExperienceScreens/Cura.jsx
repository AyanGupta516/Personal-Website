import React from 'react';
import { Container, Typography, Box, Paper, Chip, Divider } from '@mui/material';

const techStack = [
  'React Native', 'FastAPI', 'Python', 'GPT (RAG)', 'PostgreSQL',
];

const CuraProject = () => {
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
        Cura
      </Typography>

      <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="body1" color="text.secondary" paragraph>
          As part of TX Convergent, my team and I developed a React Native app for a local startup called Cura, aimed at personalizing treatment plans for patients with schizophrenia. The app leverages a Retriever-Augmented Generation (RAG) model integrated with GPT, using medically approved treatment plans as contextual data to generate personalized care recommendations. This ensures that the recommendations align with established medical guidelines while being tailored to the unique needs of each patient.
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          I helped implement backend API endpoints using FastAPI and designed key frontend components in React Native to streamline caregiver workflows and enhance user experience.
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

        {/* Canva Embed */}
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
          }}
        >
          <iframe
            loading="lazy"
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              top: 0,
              left: 0,
              border: 'none',
              padding: 0,
              margin: 0
            }}
            src="https://www.canva.com/design/DAGDFWFyJck/whiLNdQ3-fKoISHiMpU9UQ/view?embed"
            allowFullScreen
            title="Cura Project Presentation"
          />
        </Box>
      </Paper>
    </Container>
  );
};

export default CuraProject;
