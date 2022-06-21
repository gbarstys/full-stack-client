import React from 'react';
import {
  Container, Typography, Box, TextField, Button,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const DeliveryPage: React.FC = () => (
  <Container sx={{
    my: 5,
    p: 2,
    border: '1px solid grey',
    background: '#fff',
  }}
  >
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>

      <Typography>
        <PersonIcon />
      </Typography>
      <Typography variant="h6" sx={{ mx: 1 }}>
        Jūsų duomenys
      </Typography>
    </Box>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '40ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Box>
        <TextField
          id="outlined-textarea"
          label="Vardas"
          placeholder="Vardas"
          multiline
        />
        <TextField
          id="outlined-textarea"
          label="Pavardė"
          placeholder="Pavardė"
          multiline
        />
        <TextField
          id="outlined-textarea"
          label="El. paštas"
          placeholder="El. paštas"
          multiline
        />
      </Box>
    </Box>
    <Box sx={{ display: 'flex', flexDirection: 'row', my: 1 }}>
      <Typography>
        <LocalShippingIcon />
      </Typography>
      <Typography variant="h6" sx={{ mx: 1 }}>
        Pristatymo Adresas
      </Typography>
    </Box>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '40ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Box>
        <TextField
          id="outlined-textarea"
          label="Adresas"
          placeholder="Adresas"
          multiline
        />
        <TextField
          id="outlined-textarea"
          label="Šalis"
          placeholder="Šalis"
          multiline
        />
        <TextField
          id="outlined-textarea"
          label="Pašto kodas"
          placeholder="Pašto kodas"
          multiline
        />
        <TextField
          id="outlined-textarea"
          label="Miestas"
          placeholder="Miestas"
          multiline
        />
        <TextField
          id="outlined-textarea"
          label="Mobilus telefonas"
          placeholder="Mobilus telefonas"
          multiline
        />
      </Box>
      <Button variant="contained" startIcon={<ShoppingCartIcon />} sx={{ my: 2, width: 360 }}>
        Pirkti
      </Button>
    </Box>
  </Container>
);

export default DeliveryPage;
