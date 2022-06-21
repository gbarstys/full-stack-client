import React from 'react';
import {
  Container, Typography, Box, TextField, Button,
} from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';

const ContactsPage: React.FC = () => (
  <Container>
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        mt: 2,
        p: 2,
        border: '1px solid grey',
        background: '#fff',
      }}
    >

      <Typography component="h3" variant="h5"> Susisiekime!</Typography>
      <TextField
        required
        label="Vardas"
        variant="outlined"
      />
      <TextField
        required
        id="outlined-multiline-static"
        label="Įveskite tekstą"
        multiline
        rows={4}
      />
      <Button variant="contained" size="large" startIcon={<MailIcon color="success" />}>Siųsti</Button>
    </Box>
    <Box sx={{
      p: 2,
      border: '1px solid grey',
      background: '#fff',
    }}
    >
      <Box>
        <Typography component="h3" variant="h5">Kontaktai</Typography>
      </Box>
      <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="body1" color="theme.palette.green">Vardas Pavardė</Typography>
        <Typography variant="body1">email@email.com</Typography>
        <Typography variant="body1">+37060000000</Typography>
      </Box>
    </Box>

  </Container>
);

export default ContactsPage;
