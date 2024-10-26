import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const CustomerOptions = () => {
  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', marginTop: 8 }}>
      <Typography variant="h4" gutterBottom>
        Customer Options
      </Typography>
      <Box sx={{ marginTop: 4 }}>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/customer-signin"
          sx={{ marginRight: 2 }}
        >
          Sign In
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          component={Link}
          to="/customer-signup"
        >
          Sign Up
        </Button>
      </Box>
    </Container>
  );
};

export default CustomerOptions;
