import React from 'react';
import { Typography, Box } from '@mui/material';

const AdminPage = () => {
  return (
    <Box
      sx={{
        padding: 3,
        borderRadius: 2,
        backgroundColor: '#f4f6f8',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        maxWidth: '500px',
        margin: 'auto',
        mt: 5,
      }}
    >
      <Typography variant="h4">Welcome, Admin!</Typography>
      <Typography variant="body1" sx={{ marginTop: 2, color: '#666' }}>
        Use the menu to manage buses and confirm seat bookings.
      </Typography>
    </Box>
  );
};

export default AdminPage;
