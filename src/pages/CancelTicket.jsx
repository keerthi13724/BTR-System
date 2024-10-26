import React, { useEffect, useState } from 'react'; 
import { Box, Typography, Select, MenuItem, Button } from '@mui/material';

const CancelTicket = () => {
  const [selectedTicketId, setSelectedTicketId] = useState('');
  const [message, setMessage] = useState('');
  const [bookedTickets, setBookedTickets] = useState([]);

  const sampleBookedTickets = [
    { id: 1, busName: 'Bus A', date: '2024-09-10', cancellationCharge: 10.00 },
    { id: 2, busName: 'Bus B', date: '2024-09-12', cancellationCharge: 15.00 },
    { id: 3, busName: 'Bus C', date: '2024-09-14', cancellationCharge: 20.00 },
  ];

  useEffect(() => {
    setBookedTickets(sampleBookedTickets);
  }, []);

  const handleCancel = () => {
    const ticketToCancel = bookedTickets.find(ticket => ticket.id === parseInt(selectedTicketId));
    if (ticketToCancel) {
      setMessage(`Ticket for ${ticketToCancel.busName} on ${ticketToCancel.date} has been canceled. Cancellation Charge: $${ticketToCancel.cancellationCharge}.`);
    } else {
      setMessage('Please select a valid ticket to cancel.');
    }
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h5" sx={{ marginBottom: 2 }}>Cancel Ticket</Typography>
      <Typography>Select a Ticket to Cancel:</Typography>
      <Select
        fullWidth
        value={selectedTicketId}
        onChange={(e) => setSelectedTicketId(e.target.value)}
        displayEmpty
        sx={{ marginBottom: 2 }}
      >
        <MenuItem value="">
          <em>Select a ticket</em>
        </MenuItem>
        {bookedTickets.map(ticket => (
          <MenuItem key={ticket.id} value={ticket.id}>
            {`Bus: ${ticket.busName}, Date: ${ticket.date}, Cancellation Charge: $${ticket.cancellationCharge}`}
          </MenuItem>
        ))}
      </Select>
      <Button variant="contained" color="error" onClick={handleCancel}>
        Cancel Ticket
      </Button>
      {message && <Typography sx={{ marginTop: 2 }}>{message}</Typography>}
    </Box>
  );
};

export default CancelTicket;
