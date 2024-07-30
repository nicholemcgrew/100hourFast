import React from 'react';
import { CssBaseline, Container, Typography, Box } from '@mui/material';
import FastingTracker from './components/FastingTracker'; // Adjust the import path if necessary

const App: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Fasting Tracker
        </Typography>
        <FastingTracker />
      </Container>
    </Box>
  );
};

export default App;
