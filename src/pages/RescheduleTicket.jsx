import React, { useState, useEffect } from 'react';
import { Box, Typography, Select, MenuItem, Button, TextField } from '@mui/material';

const RescheduleTicket = () => {
  const [bookedTickets, setBookedTickets] = useState([]);
  const [selectedTicketId, setSelectedTicketId] = useState('');
  const [newDate, setNewDate] = useState('');
  const [newTime, setNewTime] = useState('');
  const [message, setMessage] = useState('');

  const sampleBookedTickets = [
    { id: 1, busName: 'Bus A', date: '2024-09-10', time: '10:00 AM' },
    { id: 2, busName: 'Bus B', date: '2024-09-12', time: '02:00 PM' },
    { id: 3, busName: 'Bus C', date: '2024-09-14', time: '06:00 PM' },
  ];

  useEffect(() => {
    setBookedTickets(sampleBookedTickets);
  }, []);

  const handleReschedule = () => {
    if (selectedTicketId && newDate && newTime) {
      const ticketToReschedule = bookedTickets.find(ticket => ticket.id === parseInt(selectedTicketId));
      if (ticketToReschedule) {
        setMessage(`Ticket for ${ticketToReschedule.busName} has been rescheduled to ${newDate} at ${newTime}.`);
      }
    } else {
      setMessage('Please select a valid ticket, new date, and time.');
    }
  };

  return (
    <Box sx={{ padding: 3, boxShadow: 3, borderRadius: 2 }}>
      <Typography variant="h5" sx={{ marginBottom: 3 }}>Reschedule Ticket</Typography>

      <Typography>Select a Ticket to Reschedule:</Typography>
      <Select
        fullWidth
        value={selectedTicketId}
        onChange={(e) => setSelectedTicketId(e.target.value)}
        displayEmpty
        sx={{ marginBottom: 3 }}
      >
        <MenuItem value="">
          <em>Select a ticket</em>
        </MenuItem>
        {bookedTickets.map(ticket => (
          <MenuItem key={ticket.id} value={ticket.id}>
            {`Bus: ${ticket.busName}, Date: ${ticket.date}, Time: ${ticket.time}`}
          </MenuItem>
        ))}
      </Select>

      <TextField
        fullWidth
        label="New Date"
        type="date"
        InputLabelProps={{ shrink: true }}
        value={newDate}
        onChange={(e) => setNewDate(e.target.value)}
        sx={{ marginBottom: 2 }}
      />

      <TextField
        fullWidth
        label="New Time"
        type="time"
        InputLabelProps={{ shrink: true }}
        value={newTime}
        onChange={(e) => setNewTime(e.target.value)}
        sx={{ marginBottom: 3 }}
      />

      <Button variant="contained" color="primary" onClick={handleReschedule}>
        Reschedule Ticket
      </Button>

      {message && <Typography sx={{ marginTop: 2 }}>{message}</Typography>}
    </Box>
  );
};

export default RescheduleTicket;
