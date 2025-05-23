import React from 'react';
import { Container, Typography, Box, Paper, Chip, Divider } from '@mui/material';

const techStack = [
  'React Native', 'Flask', 'Supabase', 'Retool', 'PostgreSQL'
];

const Qwell = () => {
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
        Qwell
      </Typography>

      <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="body1" color="text.secondary" paragraph>
          Qwell is an Austin-based non-profit that connects LGBTQ+ members with local, inclusive businesses. As part of a cross-functional team of 10 spanning tech, design, and product, I contributed to building a mobile application for the organization.
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          I developed key frontend components using React Native and integrated Flask with Supabase to build and maintain backend services. I also used Retool to design dynamic admin pages, allowing Qwell to efficiently manage business data in real time.
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
            willChange: 'transform',
          }}
        >
          <iframe
            loading="eager"
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              top: 0,
              left: 0,
              border: 'none',
              padding: 0,
              margin: 0,
            }}
            src="https://www.canva.com/design/DAFpIqnWXoM/view?embed"
            allowFullScreen
            title="Qwell Project Presentation"
          />
        </Box>

      </Paper>
    </Container>
  );
};

export default Qwell;
