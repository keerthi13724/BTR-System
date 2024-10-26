import React from 'react';
import { Box, Typography, Card, CardContent, Button } from '@mui/material';

const Offers = () => {
  const offers = [
    { id: 1, title: 'Summer Special', description: 'Get 20% off on all bookings this summer!' },
    { id: 2, title: 'Weekend Bonanza', description: 'Flat 15% discount on weekend travel!' },
    { id: 3, title: 'Refer & Earn', description: 'Refer a friend and earn travel credits.' },
  ];

  const handleApplyOffer = (offerTitle) => {
    alert(`Offer "${offerTitle}" has been applied to your booking!`);
   
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h5" sx={{ marginBottom: 2 }}>Current Offers</Typography>
      {offers.map((offer) => (
        <Card key={offer.id} sx={{ marginBottom: 2 }}>
          <CardContent>
            <Typography variant="h6">{offer.title}</Typography>
            <Typography sx={{ marginBottom: 1 }}>{offer.description}</Typography>
            <Button 
              variant="contained" 
              color="primary" 
              onClick={() => handleApplyOffer(offer.title)}
            >
              Apply Offer
            </Button>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default Offers;
