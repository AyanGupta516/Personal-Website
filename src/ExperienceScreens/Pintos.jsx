import React from 'react';
import { Container, Typography, Box, Paper, Chip, Divider } from '@mui/material';
import PintOSDiagram from '../assets/PintOSDiagram.png'; // use relative path if needed

const techStack = [
  'C', 'Thread Scheduling', 'Semaphores', 'System Calls', 'Virtual Memory', 'File Systems'
];

const PintOSProject = () => {
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
        PintOS
      </Typography>

      <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="body1" color="text.secondary" paragraph>
          Using C, I developed and enhanced core operating system features for PintOS, a lightweight teaching OS used to learn low-level systems programming. This project gave me deep insight into how operating systems manage concurrency, memory, and hardware abstraction.
        </Typography>

        <Typography variant="body1" color="text.secondary" paragraph>
          I implemented thread scheduling algorithms and synchronization primitives like semaphores to ensure race-free execution. I also developed system call interfaces to enable user programs to interact with kernel space, and designed a virtual memory system featuring paging and swap-based memory management.
        </Typography>

        <Typography variant="body1" color="text.secondary" paragraph>
          Finally, I built a functional file system with a hierarchical directory structure, implementing key operations such as file creation, deletion, and data reading.
        </Typography>

        {/* Diagram Image */}
        <Box sx={{ my: 4, display: 'flex', justifyContent: 'center' }}>
          <img
            src={PintOSDiagram}
            alt="PintOS Architecture Diagram"
            style={{ width: '100%', maxWidth: 700, borderRadius: 8, boxShadow: '0 2px 12px rgba(0,0,0,0.1)' }}
          />
        </Box>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom>
          Technologies & Concepts
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
};

export default PintOSProject;
