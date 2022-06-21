import React from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import Leash from '../../types/leash';

type LeashCardProps = Omit<Leash, 'id'>;

const LeashCard: React.FC<LeashCardProps> = ({
  title, description, price, img,
}) => (
  <Card sx={{ height: 400, width: 345, textAlign: 'center' }}>
    <CardMedia
      component="img"
      height="240"
      image={img}
      alt={title}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: '0 auto' }}>
      <CardActions>
        <Button disableRipple sx={{ color: 'black' }}>
          {price}
          {' '}
          €
        </Button>
        <Button variant="outlined" size="small" color="success">Užsakyti</Button>
      </CardActions>
    </Box>
  </Card>
);

export default LeashCard;
