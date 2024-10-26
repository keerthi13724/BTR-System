import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', marginTop: 8 }}>
      <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#3f51b5', mb: 4 }}>
        Bus Reservation App
      </Typography>
      <Typography variant="h6" sx={{ mb: 4 }}>
        Welcome to the Bus Reservation App. Please select your role to continue.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/customer-options"
          sx={{ fontSize: '16px', padding: '10px 20px' }}
        >
          Customer
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          component={Link}
          to="/admin-signin"
          sx={{ fontSize: '16px', padding: '10px 20px' }}
        >
          Admin
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
