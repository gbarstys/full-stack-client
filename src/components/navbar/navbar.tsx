import React from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Box,
} from '@mui/material';
import NavbarLink from './navbar-link';

const Navbar: React.FC = () => (
  <AppBar position="sticky" sx={{ bgcolor: 'grey.900' }}>
    <Container sx={{ px: { xs: 0, sm: 0 } }}>
      <Toolbar sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
      >
        <Box>
          <NavbarLink to="/">Pagrindinis</NavbarLink>
          <NavbarLink to="/create">Susikurk pats!</NavbarLink>
          <NavbarLink to="/products">Produktai</NavbarLink>
          <NavbarLink to="/contacts">Kontaktai</NavbarLink>
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
);

export default Navbar;
