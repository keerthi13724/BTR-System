import React, { useState } from 'react';
import { Box, Typography, FormControl, InputLabel, Select, MenuItem, Button, TextField } from '@mui/material';

const Settings = () => {
  const [language, setLanguage] = useState('English');
  const [country, setCountry] = useState('India');
  const [newPassword, setNewPassword] = useState('');

  const handlePasswordReset = () => {
    alert('Password reset functionality to be implemented.');
  };

  return (
    <Box sx={{ padding: 3, boxShadow: 3, borderRadius: 2 }}>
      <Typography variant="h5" sx={{ marginBottom: 3 }}>Settings</Typography>

      <Box sx={{ marginBottom: 3 }}>
        <Typography variant="h6">Language</Typography>
        <FormControl fullWidth sx={{ marginTop: 2 }}>
          <InputLabel>Language</InputLabel>
          <Select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            label="Language"
          >
            <MenuItem value="English">English</MenuItem>
            <MenuItem value="Telugu">Telugu</MenuItem>
            <MenuItem value="Hindi">Hindi</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ marginBottom: 3 }}>
        <Typography variant="h6">Country</Typography>
        <FormControl fullWidth sx={{ marginTop: 2 }}>
          <InputLabel>Country</InputLabel>
          <Select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            label="Country"
          >
            <MenuItem value="India">India</MenuItem>
            <MenuItem value="USA">USA</MenuItem>
            <MenuItem value="UK">UK</MenuItem>
            <MenuItem value="Canada">Canada</MenuItem>
            <MenuItem value="Australia">Australia</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ marginBottom: 3 }}>
        <Typography variant="h6">Reset Password</Typography>
        <TextField
          label="New Password"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          fullWidth
          sx={{ marginTop: 2 }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handlePasswordReset}
          sx={{ marginTop: 2 }}
        >
          Reset Password
        </Button>
      </Box>
    </Box>
  );
};

export default Settings;
