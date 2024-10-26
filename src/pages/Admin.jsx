import React from 'react';
import { Button, Box, Typography } from '@mui/material';

const AdminDashboard = () => {
  return (
    <Box
      sx={{
        p: 3,
        borderRadius: 2,
        backgroundColor: '#f4f6f8',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px',
        margin: 'auto',
        mt: 5,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>
      <Button variant="contained" sx={{ mb: 2 }} color="primary" fullWidth>
        Manage Buses
      </Button>
      <Button variant="contained" color="secondary" fullWidth>
        Confirm Seats
      </Button>
    </Box>
  );
};

export default AdminDashboard;
