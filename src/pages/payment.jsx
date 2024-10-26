import React, { useState } from 'react';
import { Box, Typography, Button, TextField, FormControl, RadioGroup, FormControlLabel, Radio } from '@mui/material';

const Payment = ({ handlePaymentSuccess }) => {
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCVC, setCardCVC] = useState('');
  const [upiId, setUpiId] = useState('');

  const handlePayment = () => {
    if (paymentMethod === 'creditCard' && (cardNumber && cardExpiry && cardCVC)) {
      alert('Payment Successful with Credit/Debit Card!');
      handlePaymentSuccess();
    } else if (paymentMethod === 'upi' && upiId) {
      alert('Payment Successful with UPI!');
      handlePaymentSuccess();
    } else {
      alert('Please fill out all payment details.');
    }
  };

  return (
    <Box sx={{ padding: 3, boxShadow: 3, borderRadius: 2 }}>
      <Typography variant="h5" sx={{ marginBottom: 3 }}>Payment</Typography>
      
      <FormControl component="fieldset">
        <Typography variant="h6" sx={{ marginBottom: 1 }}>Select Payment Method</Typography>
        <RadioGroup
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          sx={{ marginBottom: 3 }}
        >
          <FormControlLabel value="creditCard" control={<Radio />} label="Credit/Debit Card" />
          <FormControlLabel value="upi" control={<Radio />} label="UPI" />
        </RadioGroup>
      </FormControl>

      {paymentMethod === 'creditCard' && (
        <Box>
          <TextField
            fullWidth
            label="Card Number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            fullWidth
            label="Expiry Date (MM/YY)"
            value={cardExpiry}
            onChange={(e) => setCardExpiry(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            fullWidth
            label="CVC"
            type="password"
            value={cardCVC}
            onChange={(e) => setCardCVC(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
        </Box>
      )}

      {paymentMethod === 'upi' && (
        <TextField
          fullWidth
          label="UPI ID"
          value={upiId}
          onChange={(e) => setUpiId(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
      )}

      <Button variant="contained" color="primary" onClick={handlePayment}>
        Pay Now
      </Button>
    </Box>
  );
};

export default Payment;
