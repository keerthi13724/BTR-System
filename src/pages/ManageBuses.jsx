import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button, Table, TableBody, TableCell, TableHead, TableRow, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';

const ManageBuses = () => {
  const [buses, setBuses] = useState([]);
  const [newBus, setNewBus] = useState({ busName: '', route: '', seats: '' });
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchBuses();
  }, []);

  const fetchBuses = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/buses');
      setBuses(response.data);
    } catch (error) {
      console.error('Error fetching buses:', error);
    }
  };

  const handleAddBus = async () => {
    if (newBus.busName && newBus.route && newBus.seats) {
      try {
        if (editMode) {
          await axios.put(`http://localhost:8080/api/buses/${editId}`, newBus);
          setEditMode(false);
          setEditId(null);
        } else {
          await axios.post('http://localhost:8080/api/buses', newBus);
        }
        setNewBus({ busName: '', route: '', seats: '' });
        fetchBuses();  
      } catch (error) {
        console.error('Error adding/updating bus:', error);
      }
    }
  };

  const handleEditBus = (bus) => {
    setNewBus(bus);
    setEditMode(true);
    setEditId(bus.id);
  };

  const handleDeleteBus = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/buses/${id}`);
      fetchBuses();  
    } catch (error) {
      console.error('Error deleting bus:', error);
    }
  };

  return (
    <Box sx={{ padding: 2, backgroundColor: '#f0f0f0', borderRadius: 2, boxShadow: 3 }}>
      <Typography variant="h5" sx={{ marginBottom: 2, fontWeight: 'bold' }}>Manage Buses</Typography>

      <Box sx={{ marginBottom: 3 }}>
        <TextField
          fullWidth
          label="Bus Name"
          value={newBus.busName}
          onChange={(e) => setNewBus({ ...newBus, busName: e.target.value })}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          fullWidth
          label="Route"
          value={newBus.route}
          onChange={(e) => setNewBus({ ...newBus, route: e.target.value })}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          fullWidth
          label="Seats"
          value={newBus.seats}
          onChange={(e) => setNewBus({ ...newBus, seats: e.target.value })}
          sx={{ marginBottom: 2 }}
        />
        <Button variant="contained" color="primary" onClick={handleAddBus}>
          {editMode ? 'Update Bus' : 'Add Bus'}
        </Button>
      </Box>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Bus Name</TableCell>
            <TableCell>Route</TableCell>
            <TableCell>Seats</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {buses.map(bus => (
            <TableRow key={bus.id}>
              <TableCell>{bus.busName}</TableCell>
              <TableCell>{bus.route}</TableCell>
              <TableCell>{bus.seats}</TableCell>
              <TableCell>
                <IconButton onClick={() => handleEditBus(bus)}>
                  <EditIcon color="primary" />
                </IconButton>
                <IconButton onClick={() => handleDeleteBus(bus.id)}>
                  <DeleteIcon color="secondary" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default ManageBuses;
