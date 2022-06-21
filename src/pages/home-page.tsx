import {
  Container,
  Typography,
  Box,
  Button,

} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/leashlogo.png';
import Section from '../components/section';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Container sx={{
      display: 'flex',
      '@media(maxWidth: 1100px)': {
        flexWrap: 'wrap',
      },
      alignItems: 'center',
      justifyContent: 'space-around',
      minWidth: 600,
      gap: 15,
      margin: 'auto',
      width: 1 / 1,
    }}
    >
      <Box
        component="img"
        src={logo}
        sx={{
          maxWidth: '600px',
          boxShadow: 3,
          borderRadius: 3,
          height: 600,
          my: 5,
        }}
      />

      <Box sx={{

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: 2,
        border: '1px solid grey',
        borderRadius: 3,
        background: '#7f797e',
        boxShadow: 3,
        padding: 5,
        my: 5,
        height: 600,
      }}
      >
        <Typography gutterBottom variant="h4" component="h1" color="white" fontFamily="Quicksand">
          Rankų darbo minimalistiniai pavadėliai
        </Typography>
        <Typography variant="body2" color="white" fontFamily="Quicksand" fontSize="20px">
          Noli design pavadėliai skirti šunų parodoms ir kasdieninėms veikloms. Jūs galite rinktis iš jau pagamintų arba susikurti savo pasirinkdami (spalvą, ilgį, dydį ir t.t..)
        </Typography>
        <Section fontFamily="Quicksand" sx={{ gap: 3 }}>
          <Button variant="contained" color="primary" onClick={() => navigate('/create')}>Susikurk pats!</Button>
          <Button variant="contained" color="primary" onClick={() => navigate('/products')}>Rinkis iš jau pagamintų</Button>
        </Section>
      </Box>
    </Container>
  );
};

export default HomePage;
