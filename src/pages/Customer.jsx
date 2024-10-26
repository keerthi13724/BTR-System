import React from 'react';
import { Button, Box, Typography } from '@mui/material';

const CustomerDashboard = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Customer Dashboard
      </Typography>
      <Button variant="contained" sx={{ mb: 2 }} color="primary">
        Book Ticket
      </Button>
      <Button variant="contained" color="secondary">
        Cancel Ticket
      </Button>
    </Box>
  );
};

export default CustomerDashboard;
