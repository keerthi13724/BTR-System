import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, MenuItem, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const sampleRoutes = [
  {
    id: 1,
    source: 'City A',
    destination: 'City B',
    name: 'Express Bus',
    type: 'Express',
    departure: '08:00 AM',
    arrival: '10:00 AM',
  },
  {
    id: 2,
    source: 'City A',
    destination: 'City C',
    name: 'Sleeper Bus',
    type: 'Sleeper',
    departure: '09:00 AM',
    arrival: '01:00 PM',
  },
  {
    id: 3,
    source: 'City B',
    destination: 'City D',
    name: 'Luxury Bus',
    type: 'Luxury',
    departure: '11:00 AM',
    arrival: '02:00 PM',
  },
  {
    id: 4,
    source: 'City C',
    destination: 'City D',
    name: 'Standard Bus',
    type: 'Standard',
    departure: '07:30 AM',
    arrival: '10:30 AM',
  },
];

const BookTicket = () => {
  const [sources, setSources] = useState([]);
  const [destinations, setDestinations] = useState([]);
  const [selectedSource, setSelectedSource] = useState('');
  const [selectedDestination, setSelectedDestination] = useState('');
  const [filteredBuses, setFilteredBuses] = useState([]);
  const [selectedBus, setSelectedBus] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const uniqueSources = [...new Set(sampleRoutes.map(route => route.source))];
    const uniqueDestinations = [...new Set(sampleRoutes.map(route => route.destination))];
    setSources(uniqueSources);
    setDestinations(uniqueDestinations);
  }, []);

  const handleSearch = () => {
    const filtered = sampleRoutes.filter(
      (route) =>
        route.source === selectedSource &&
        route.destination === selectedDestination
    );
    setFilteredBuses(filtered);
  };

  const handleSelectBus = (bus) => {
    setSelectedBus(bus);
  };

  const handleBookTicket = () => {
    if (selectedBus) {
      navigate('/customer/payment');
    } else {
      alert('Please select a bus before proceeding.');
    }
  };

  return (
    <Box sx={{ padding: 3, backgroundColor: '#f4f6f8', borderRadius: 2, boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.1)' }}>
      <Typography variant="h5" sx={{ marginBottom: 3 }}>
        Book Your Ticket
      </Typography>

      <TextField
        label="Select Source"
        select
        fullWidth
        value={selectedSource}
        onChange={(e) => setSelectedSource(e.target.value)}
        sx={{ marginBottom: 3 }}
      >
        {sources.map((source, index) => (
          <MenuItem key={index} value={source}>
            {source}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        label="Select Destination"
        select
        fullWidth
        value={selectedDestination}
        onChange={(e) => setSelectedDestination(e.target.value)}
        sx={{ marginBottom: 3 }}
      >
        {destinations.map((destination, index) => (
          <MenuItem key={index} value={destination}>
            {destination}
          </MenuItem>
        ))}
      </TextField>

      <Button variant="contained" onClick={handleSearch} sx={{ marginBottom: 3 }}>
        Search Buses
      </Button>

      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Available Buses
      </Typography>
      {filteredBuses.length > 0 ? (
        filteredBuses.map((bus) => (
          <Box
            key={bus.id}
            sx={{
              padding: 2,
              borderRadius: 2,
              backgroundColor: selectedBus?.id === bus.id ? '#e0f7fa' : '#fff',
              boxShadow: selectedBus?.id === bus.id ? '0px 4px 12px rgba(0, 0, 0, 0.2)' : '0px 2px 6px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
              mb: 2,
            }}
            onClick={() => handleSelectBus(bus)}
          >
            <Typography variant="body1">{bus.name}</Typography>
            <Typography variant="body2" sx={{ color: '#666' }}>
              Route: {bus.source} to {bus.destination} | Type: {bus.type} | Departure: {bus.departure} | Arrival: {bus.arrival}
            </Typography>
          </Box>
        ))
      ) : (
        <Typography variant="body2" sx={{ color: '#888' }}>
          No buses available for the selected route.
        </Typography>
      )}

      {selectedBus && (
        <Box sx={{ marginTop: 3 }}>
          <Typography variant="h6">Selected Bus</Typography>
          <Typography variant="body1">
            {selectedBus.name} - {selectedBus.source} to {selectedBus.destination}
          </Typography>
        </Box>
      )}

      <Button variant="contained" color="primary" onClick={handleBookTicket} sx={{ marginTop: 3 }}>
        Book Ticket
      </Button>
    </Box>
  );
};

export default BookTicket;
