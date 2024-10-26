import React, { useState } from 'react';
import { TextField, IconButton, Box, MenuItem, Select, InputLabel, FormControl, Typography, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { buses, sources, destinations } from '../Data'; 

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSource, setSelectedSource] = useState('');
  const [selectedDestination, setSelectedDestination] = useState('');
  const [filteredBuses, setFilteredBuses] = useState([]);
  const [showNoResults, setShowNoResults] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    // Filter buses based on selected source, destination, and search query
    const results = buses.filter(bus =>
      (selectedSource ? bus.route.toLowerCase().includes(selectedSource.toLowerCase()) : true) &&
      (selectedDestination ? bus.route.toLowerCase().includes(selectedDestination.toLowerCase()) : true) &&
      (searchQuery ? bus.name.toLowerCase().includes(searchQuery.toLowerCase()) : true)
    );
    setFilteredBuses(results);
    setShowNoResults(results.length === 0);
  };

  return (
    <Box component="form" onSubmit={handleSearch} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 2 }}>
      <FormControl sx={{ minWidth: 120, marginBottom: 2 }}>
        <InputLabel>Source</InputLabel>
        <Select
          value={selectedSource}
          onChange={(e) => setSelectedSource(e.target.value)}
          label="Source"
        >
          <MenuItem value=""><em>None</em></MenuItem>
          {sources.map((source) => (
            <MenuItem key={source} value={source}>{source}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{ minWidth: 120, marginBottom: 2 }}>
        <InputLabel>Destination</InputLabel>
        <Select
          value={selectedDestination}
          onChange={(e) => setSelectedDestination(e.target.value)}
          label="Destination"
        >
          <MenuItem value=""><em>None</em></MenuItem>
          {destinations.map((destination) => (
            <MenuItem key={destination} value={destination}>{destination}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        label="Search Bus"
        variant="outlined"
        sx={{ marginBottom: 2 }}
      />
      <IconButton type="submit" color="primary">
        <SearchIcon />
      </IconButton>

      {/* Display filtered results */}
      <Box sx={{ marginTop: 2, width: '100%' }}>
        {showNoResults ? (
          <Typography>No results found</Typography>
        ) : (
          filteredBuses.map((bus) => (
            <Box key={bus.id} sx={{ padding: 1, borderBottom: '1px solid #ccc' }}>
              <Typography variant="h6">{bus.name}</Typography>
              <Typography>Route: {bus.route}</Typography>
              <Typography>Type: {bus.type}</Typography>
              <Typography>Departure: {bus.departure}</Typography>
              <Typography>Arrival: {bus.arrival}</Typography>
              <Button variant="contained" color="primary">Book Tickets</Button>
            </Box>
          ))
        )}
      </Box>
    </Box>
  );
};

export default SearchBar;

