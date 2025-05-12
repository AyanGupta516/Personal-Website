import React from 'react';
import { Container, Typography, Box, Paper, Chip, Divider, Link } from '@mui/material';

const techStack = [
  'TensorFlow', 'Keras', 'Scikit-learn', 'Python'
];

const UTResearchProject = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 6, mb: 8 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        fontWeight="bold"
        sx={{ color: '#5596e6', mb: 4 }}
        fontFamily="monospace"
      >
        Geometry of Space Research Lab
      </Typography>

      <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="body1" color="text.secondary" paragraph>
          My team and I developed both a Dense Neural Network and a Support Vector Machine to classify emission-line galaxies into four distinct types: Seyferts, Star-Forming, Composite, and LINERs. We sourced spectroscopic data from the Sloan Digital Sky Survey and processed it using Python-based ML pipelines.
        </Typography>

        <Typography variant="body1" color="text.secondary" paragraph>
          Using TensorFlow, Keras, and Scikit-learn, we trained both models to achieve classification accuracy above 92%. The models provided insights into emission line diagnostics, contributing to more precise galaxy type classification. Our paper was published by the American Astronomical Research Society in March 2024.
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

        {/* Paper & GitHub Links */}
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            📄{' '}
            <Link
              href="https://iopscience.iop.org/article/10.3847/2515-5172/ad3422"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ fontWeight: 'bold', color: '#5596e6' }}
            >
              View Published Paper →
            </Link>
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            💻{' '}
            <Link
              href="https://github.com/AyanGupta516/AstronomyResearch"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ fontWeight: 'bold', color: '#5596e6' }}
            >
              View on GitHub →
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default UTResearchProject;
