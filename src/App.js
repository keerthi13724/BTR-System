// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Drawer, CssBaseline } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SideBar from './components/Sidebar';

// Import Pages
import Home from './pages/Home';
import CustomerOptions from './pages/CustomerOptions';
import CustomerSignIn from './pages/CustomerSignIn';
import CustomerSignUp from './pages/CustomerSignUp';
import AdminSignIn from './pages/AdminSignIn';
import CustomerPage from './pages/CustomerPage';
import AdminPage from './pages/AdminPage';
import BookTicket from './pages/BookTicket';
import CancelTicket from './pages/CancelTicket';
import Offers from './pages/Offers';
import RescheduleTicket from './pages/RescheduleTicket';
import Help from './pages/Help';
import Settings from './pages/Settings';
import ManageBuses from './pages/ManageBuses';
import ConfirmBookings from './pages/ConfirmBookings';
import Payment from './pages/payment';  // Newly added Payment page

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Toggle Drawer
  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  return (
    <Router>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={() => toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Bus Reservation App</Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer anchor="left" open={drawerOpen} onClose={() => toggleDrawer(false)}>
        <SideBar toggleDrawer={toggleDrawer} />
      </Drawer>

      {/* Main Content */}
      <div style={{ marginTop: '64px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/customer-options" element={<CustomerOptions />} />
          <Route path="/customer-signin" element={<CustomerSignIn />} />
          <Route path="/customer-signup" element={<CustomerSignUp />} />
          <Route path="/admin-signin" element={<AdminSignIn />} />
          <Route path="/customer" element={<CustomerPage />} />
          <Route path="/customer/book-ticket" element={<BookTicket />} />
          <Route path="/customer/payment" element={<Payment />} /> {/* Added Payment Route */}
          <Route path="/customer/cancel-ticket" element={<CancelTicket />} />
          <Route path="/customer/offers" element={<Offers />} />
          <Route path="/customer/reschedule-ticket" element={<RescheduleTicket />} />
          <Route path="/customer/help" element={<Help />} />
          <Route path="/customer/settings" element={<Settings />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/manage-buses" element={<ManageBuses />} />
          <Route path="/admin/confirm-bookings" element={<ConfirmBookings />} />
          <Route path="/customer/help" element={<Help />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
