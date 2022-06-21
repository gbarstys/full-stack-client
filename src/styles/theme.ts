import { createTheme } from '@mui/material';

const theme = createTheme();

const createColor = (color: string) => theme.palette.augmentColor({ color: { main: color } });

const customTheme = createTheme(theme, {
  palette: {
    crimson: createColor('#DC143C'),
    green: createColor('#7fff00'),
    blue: createColor('#008080'),
    primary: createColor('#ebeae9'),
    brown: createColor('#7f797e'),

    background: {
      default: '#DFDFDE',
    },
  },

  mixins: {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 56,
    },
    section: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      display: 'flex',
      gap: 5,
    },
  },
});

export default customTheme;
