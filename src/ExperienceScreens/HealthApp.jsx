import React from 'react';
import { Container, Typography, Box, Chip, Divider, Paper } from '@mui/material';

const techStack = [
    'Python', 'Swift', 'Flask', 'Supabase', 'Apple HealthKit', 'Fitbit API'
];

const ResearchAppProject = () => {
    return (
        <Container maxWidth="md" sx={{ mt: 6, mb: 8 }}>
            <Typography variant="h4" gutterBottom align="center" fontWeight="bold" sx={{ color: '#5596e6', mb: 4 }} fontFamily={'monospace'}>
                Research App for Wearable Health Data
            </Typography>

            <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>
                <Typography variant="body1" color="text.secondary" paragraph>
                    I developed Python and Swift applications to support a research study at UT, assisting a professor in collecting and analyzing data from wearable activity devices like Fitbit and Apple Watch.
                </Typography>

                <Typography variant="body1" color="text.secondary" paragraph>
                    On the backend, I implemented services using Flask and Supabase, securely storing and retrieving API authentication tokens to ensure continuous access to user data. On iOS, I built a clean and user-friendly interface in Swift that integrates Apple’s HealthKit to gather real-time health metrics.
                </Typography>

                <Divider sx={{ my: 3 }} />

                <Typography variant="h6" gutterBottom>
                    Key Features
                </Typography>
                <ul>
                    <li><Typography variant="body2">End-to-end integration with Fitbit and Apple Watch APIs</Typography></li>
                    <li><Typography variant="body2">Secure token handling using Supabase backend</Typography></li>
                    <li><Typography variant="body2">Real-time data collection via Apple HealthKit</Typography></li>
                    <li><Typography variant="body2">Designed Swift-based UI for ease of use by research participants</Typography></li>
                </ul>



                <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                    Technologies Used
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
                    {techStack.map((tech, idx) => (
                        <Chip key={idx} label={tech} variant="outlined" sx={{ color: '#3BBA9C', borderColor: '#3BBA9C' }} />
                    ))}
                </Box>

                <Box sx={{ mt: 4, textAlign: 'center' }}>
                    <Typography variant="body2" color="text.secondary">
                        View the code on{' '}
                        <a
                            href="https://github.com/AyanGupta516/FitBit"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: '#5596e6', fontWeight: 'bold', textDecoration: 'none' }}
                        >
                            GitHub →
                        </a>
                    </Typography>
                </Box>

            </Paper>
        </Container>
    );
};

export default ResearchAppProject;
