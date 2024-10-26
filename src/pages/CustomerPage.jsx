import React from 'react';
import { Typography, Box } from '@mui/material';

const CustomerPage = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4">Welcome, Customer!</Typography>
      <Typography variant="body1" sx={{ marginTop: 2 }}>
        Use the menu to book tickets, view offers, cancel or reschedule your tickets.
      </Typography>
    </Box>
  );
};

export default CustomerPage;
