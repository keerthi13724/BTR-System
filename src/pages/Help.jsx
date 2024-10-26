import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const Help = () => {
  const [query, setQuery] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmitQuery = () => {
    if (query.trim()) {
      setMessage('Your query has been submitted. We will contact you soon.');
      setQuery('');
    } else {
      setMessage('Please enter a valid query.');
    }
  };

  return (
    <Box sx={{ padding: 3, backgroundColor: '#fafafa', borderRadius: 2, boxShadow: 3 }}>
      <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>Help & Support</Typography>

      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>Frequently Asked Questions</Typography>
        <Typography><strong>Q:</strong> How do I book a ticket?</Typography>
        <Typography>A: You can book a ticket by selecting a bus and filling in the details on the booking page.</Typography>

        <Typography sx={{ mt: 2 }}><strong>Q:</strong> How can I cancel my booking?</Typography>
        <Typography>A: Go to the "Cancel Ticket" page, select your ticket, and confirm the cancellation.</Typography>

        <Typography sx={{ mt: 2 }}><strong>Q:</strong> What are the available payment methods?</Typography>
        <Typography>A: We accept credit/debit cards, net banking, UPI, and digital wallets.</Typography>
      </Box>

      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="h6">Contact Us</Typography>
        <Typography sx={{ mb: 1 }}>For urgent queries, please call our helpline at 1800-123-4567 or email us at support@busapp.com.</Typography>
      </Box>

      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="h6">Submit a Query</Typography>
        <TextField
          fullWidth
          label="Enter your query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          multiline
          rows={4}
          sx={{ marginBottom: 2 }}
        />
        <Button variant="contained" color="primary" onClick={handleSubmitQuery}>
          Submit Query
        </Button>
        {message && <Typography sx={{ marginTop: 2 }}>{message}</Typography>}
      </Box>
    </Box>
  );
};

export default Help;
