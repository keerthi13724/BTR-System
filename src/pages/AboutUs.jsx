import React from 'react';
import { Box, Typography } from '@mui/material';

const AboutUs = () => {
  return (
    <Box
      sx={{
        p: 4,
        borderRadius: 2,
        backgroundColor: '#f4f6f8',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" sx={{ color: '#666' }}>
        Bus Ticket Reservation System helps passengers easily book tickets online. Our goal is to
        make traveling by bus a smooth and simple experience. Whether you're commuting or taking a
        long journey, we ensure that you have a hassle-free experience.
      </Typography>
    </Box>
  );
};

export default AboutUs;
