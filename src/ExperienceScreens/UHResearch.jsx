import React from 'react';
import myVideo from '../assets/SUMO.mp4';
import { Container, Typography, Box, Paper, Divider, Chip } from '@mui/material';

const techStack = [
  'Python', 'SUMO', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'
];

export default function UHResearch() {
  return (
    <Container maxWidth="md" sx={{ mt: 6, mb: 8 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        fontWeight="bold"
        sx={{ color: '#5596e6' }}
        fontFamily="monospace"
      >
        University of Houston Real-Time Systems Lab
      </Typography>

      <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="body1" color="text.secondary" paragraph>
          At the University of Houston’s Real-Time Systems Lab, I worked on optimizing traffic routing through simulation and algorithmic enhancement. I used the Simulation of Urban Mobility (SUMO) framework to create and simulate custom traffic networks, configuring scenarios with varying vehicle densities, start-end locations, and road configurations.
        </Typography>

        <Typography variant="body1" color="text.secondary" paragraph>
          I developed a Python-based routing system that enhanced Dijkstra’s algorithm by incorporating edge weights that factored in traffic congestion and vehicle deadlines. The updated heuristic resulted in up to a 20% reduction in average travel time across simulations. I also began exploratory work toward implementing a Deep Reinforcement Learning model to enable adaptive, real-time routing decisions based on live traffic patterns.
        </Typography>

        <Box sx={{ my: 4, display: 'flex', justifyContent: 'center' }}>
          <video muted controls style={{ width: '100%', maxWidth: '720px', borderRadius: '12px' }}>
            <source src={myVideo} type="video/mp4" />
          </video>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom>
          Technologies Used
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
          {techStack.map((tech, idx) => (
            <Chip
              key={idx}
              label={tech}
              variant="outlined"
              sx={{ color: '#3BBA9C', borderColor: '#3BBA9C' }}
            />
          ))}
        </Box>
      </Paper>
    </Container>
  );
}
