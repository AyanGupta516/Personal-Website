import React from 'react';
import { Container, Typography, Grid, Paper, Link, Box, Chip } from '@mui/material';

export default function NeuralNetworks() {
    const projects = [
        {
            title: "Dog Breed Classifier (CNN)",
            description:
                "Developed a convolutional neural network to classify over 100 dog breeds using the Stanford Dogs Dataset. Applied data augmentation techniques to enhance generalization and mitigate overfitting. Evaluated model performance on both real and cartoon images, benchmarking results against ResNet-50.",
            github: "https://github.com/AyanGupta516/dog-breed-classification",
        },
        {
            title: "Flight Delay Prediction",
            description:
                "Developed multiple models to predict flight delays using historical flight data. Implemented feature engineering techniques to improve model accuracy and interpretability. Evaluated model performance using various metrics, including accuracy, precision, and recall.",
            github: "https://github.com/AyanGupta516/MLProjectPlanes",
        }
    ];

    const techStack = [
        'Python', 'Pytorch', 'NumPy', 'Pandas', 'Matplotlib', 'Scikit-Learn'
    ];

    return (
        <Container maxWidth="md" sx={{ py: 6 }}>
            <Typography variant="h3" align="center" gutterBottom color='#5596e6 ' sx={{ fontWeight: 500 }} fontFamily={'monospace'}>
                Neural Networks Projects
            </Typography>
            <Typography variant="subtitle1" align="center" paragraph color='FFFFFF' fontFamily={'monospace'}>
                These are some Machine Learning projects I've worked on, focusing on real-world classification problems.
            </Typography>

            <Grid container spacing={4} sx={{ mt: 2 }}>
                {projects.map((project, idx) => (
                    <Grid item xs={12} key={idx}>
                        <Paper elevation={3} sx={{ p: 3, borderRadius: 8 }}>
                            <Typography variant="h5" gutterBottom>
                                {project.title}
                            </Typography>
                            <Typography variant="body1" color="text.secondary" paragraph>
                                {project.description}
                            </Typography>
                            <Box>
                                <Link
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener"
                                    underline="hover"
                                    sx={{ fontWeight: 'bold' }}
                                >
                                    View on GitHub →
                                </Link>
                            </Box>
                        </Paper>
                    </Grid>
                ))}
            </Grid>

            <Box sx={{ mt: 6 }}>
                <Typography variant="h5" gutterBottom color='#FFFFFF' fontWeight='bold'>
                    Technologies Used
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
                    {techStack.map((tech, idx) => (
                        <Chip key={idx} label={tech} variant="outlined" sx={{ color: '#3BBA9C', borderColor: '#3BBA9C' }} />
                    ))}
                </Box>
            </Box>
        </Container>
    );
}
