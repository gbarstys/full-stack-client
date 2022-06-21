import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material';

const NavbarLink = styled(NavLink)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  color: theme.palette.common.white,
  textDecoration: 'none',
  alignSelf: 'stretch',
  padding: theme.spacing(0, 2),
  transition: theme.transitions.create('color'),
  fontFamily: 'Quicksand',

  '&.active': {
    background: theme.palette.grey[800],
    boxShadow: `inset 0 -4px 0 0 ${theme.palette.primary.main}`,
  },

  ':hover': {
    color: theme.palette.primary.main,
  },
}));

export default NavbarLink;
