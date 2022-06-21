import React from 'react';
import {
  Typography, Container, Box, List, Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Container sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box>
        <Typography>
          Welcome to Admin dashboard! In the menu you can choose youre actions
        </Typography>
        <List sx={{ display: 'flex', flexDirection: 'column', maxWidth: 400 }}>
          <Button color="warning" onClick={() => navigate('/admin/editorders')}>
            You can view your orders
          </Button>
          <Button color="warning" onClick={() => navigate('/admin/editproducts')}>
            You can edit, add and remove products
          </Button>
          <Button color="warning" onClick={() => navigate('/admin/editgallery')}>
            You can edit, add and remove gallery cards
          </Button>
        </List>
      </Box>
    </Container>
  );
};

export default AdminDashboard;
