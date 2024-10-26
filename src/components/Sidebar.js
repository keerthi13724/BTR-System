// src/components/SideBar.js

import React from 'react';
import { List, ListItem, ListItemText, Divider } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const SideBar = ({ toggleDrawer }) => {
  const location = useLocation();
  const isCustomer = location.pathname.startsWith('/customer');
  const isAdmin = location.pathname.startsWith('/admin');

  return (
    <div
      role="presentation"
      onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}
      style={{ width: 250 }}
    >
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        {isCustomer && (
          <>
            <ListItem button component={Link} to="/customer/book-ticket">
              <ListItemText primary="Book Ticket" />
            </ListItem>
            <ListItem button component={Link} to="/customer/cancel-ticket">
              <ListItemText primary="Cancel Ticket" />
            </ListItem>
            {/* <ListItem button component={Link} to="/customer/offers">
              <ListItemText primary="Offers" />
            </ListItem> */}
            <ListItem button component={Link} to="/customer/reschedule-ticket">
              <ListItemText primary="Reschedule Ticket" />
            </ListItem>
            <ListItem button component={Link} to="/customer/help">
              <ListItemText primary="Help" />
            </ListItem>
            <ListItem button component={Link} to="/customer/settings">
              <ListItemText primary="Settings" />
            </ListItem>
          </>
        )}
        {isAdmin && (
          <>
            <ListItem button component={Link} to="/admin/manage-buses">
              <ListItemText primary="Manage Buses" />
            </ListItem>
            <ListItem button component={Link} to="/admin/confirm-bookings">
              <ListItemText primary="Confirm Bookings" />
            </ListItem>
            {/* <ListItem button component={Link} to="/admin/help">
              <ListItemText primary="Help" />
            </ListItem> */}
          </>
        )}
      </List>
      <Divider />
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </div>
  );
};

export default SideBar;
