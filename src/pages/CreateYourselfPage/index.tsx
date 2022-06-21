import React from 'react';
import {
  Container,
  Box,
  Typography,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Button,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const CreateYourselfPage: React.FC = () => (
  <Container sx={{
    mt: 3,
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid grey',
    background: '#fff',
  }}
  >
    <Box sx={{ mt: 3 }}>
      <Typography component="h2" variant="h5">
        Šioje skiltyje galite susikurti savo pavadėlį
      </Typography>
    </Box>
    <Box sx={{ display: 'flex', flexDirection: 'column', p: 5 }}>
      <FormControl sx={{ m: 1, minWidth: 420 }}>
        <InputLabel>Ilgis</InputLabel>
        <Select
          autoWidth
          label="Ilgis"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>20 cm</MenuItem>
          <MenuItem value={21}>40 cm</MenuItem>
          <MenuItem value={22}>60cm</MenuItem>
          <MenuItem value={22}>80cm</MenuItem>
          <MenuItem value={22}>100 cm</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 420 }}>
        <InputLabel>Dydis</InputLabel>
        <Select
          autoWidth
          label="Dydis"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>S dydis</MenuItem>
          <MenuItem value={21}>M dydis</MenuItem>
          <MenuItem value={22}>L dydis</MenuItem>
          <MenuItem value={22}>XL dydis</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 420 }}>
        <InputLabel>Pavadėlio spalva</InputLabel>
        <Select
          autoWidth
          label="Pavadėlio spalva"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Juoda</MenuItem>
          <MenuItem value={21}>Raudona</MenuItem>
          <MenuItem value={22}>Mėlyna</MenuItem>
          <MenuItem value={22}>Ruda</MenuItem>
          <MenuItem value={22}>Pilka</MenuItem>
          <MenuItem value={22}>Smėlio</MenuItem>
          <MenuItem value={22}>Balta</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 420 }}>
        <InputLabel>Karoliukų spalva</InputLabel>
        <Select
          autoWidth
          label="Karoliukų spalva"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Juoda</MenuItem>
          <MenuItem value={21}>Raudona</MenuItem>
          <MenuItem value={22}>Mėlyna</MenuItem>
          <MenuItem value={22}>Ruda</MenuItem>
          <MenuItem value={22}>Pilka</MenuItem>
          <MenuItem value={22}>Smėlio</MenuItem>
          <MenuItem value={22}>Balta</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" size="large" startIcon={<AddIcon color="success" />}>Sukurti! </Button>
    </Box>
  </Container>
);

export default CreateYourselfPage;
