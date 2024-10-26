import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AdminSignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log('Admin Sign In:', { username, password });
    navigate('/admin');
  };

  return (
    <Container maxWidth="xs">
      <Box
        component="form"
        onSubmit={handleSignIn}
        sx={{
          mt: 8,
          p: 4,
          boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
          borderRadius: 2,
          backgroundColor: '#fff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
          Admin Sign In
        </Typography>
        <TextField
          margin="normal"
          required
          fullWidth
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
          Sign In
        </Button>
      </Box>
    </Container>
  );
};

export default AdminSignIn;
