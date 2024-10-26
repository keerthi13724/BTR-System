import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Table, TableBody, TableCell, TableHead, TableRow, Snackbar, Alert } from '@mui/material';
import axios from 'axios';

const ConfirmBookings = () => {
  const [bookings, setBookings] = useState([
    {
      id: 1,
      busName: 'Express Line',
      customerName: 'John Doe',
      seats: 3,
      status: 'Pending',
      date: '2024-10-26',
    },
    {
      id: 2,
      busName: 'City Express',
      customerName: 'Jane Smith',
      seats: 2,
      status: 'Confirmed',
      date: '2024-10-25',
    },
    {
      id: 3,
      busName: 'Green Travel',
      customerName: 'Alice Johnson',
      seats: 1,
      status: 'Pending',
      date: '2024-10-24',
    },
  ]);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    // fetchBookings(); 
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/bookings');
      setBookings(response.data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  const handleConfirmBooking = async (id) => {
    try {
      await axios.put(`http://localhost:8080/api/bookings/${id}/confirm`);

      setBookings((prevBookings) =>
        prevBookings.map((booking) =>
          booking.id === id ? { ...booking, status: 'Confirmed' } : booking
        )
      );

      setSuccessMessage('Booking confirmed successfully!');
    } catch (error) {
      console.error('Error confirming booking:', error);
    }
  };

  const handleCloseSnackbar = () => {
    setSuccessMessage('');
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h5" sx={{ marginBottom: 2 }}>Confirm Bookings</Typography>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Bus Name</TableCell>
            <TableCell>Customer Name</TableCell>
            <TableCell>Seats</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bookings.map((booking) => (
            <TableRow key={booking.id}>
              <TableCell>{booking.busName}</TableCell>
              <TableCell>{booking.customerName}</TableCell>
              <TableCell>{booking.seats}</TableCell>
              <TableCell>{booking.date}</TableCell>
              <TableCell>{booking.status}</TableCell>
              <TableCell>
                {booking.status === 'Pending' ? (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleConfirmBooking(booking.id)}
                  >
                    Confirm
                  </Button>
                ) : (
                  <Typography color="green">Confirmed</Typography>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {bookings.length === 0 && <Typography>No pending bookings.</Typography>}

      <Snackbar
        open={!!successMessage}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          {successMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ConfirmBookings;
