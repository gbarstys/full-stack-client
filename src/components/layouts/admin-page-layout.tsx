import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import AdminNavbar from '../../admin/adminNavbar/admin-navbar';

const AdminPageLayout: React.FC = () => (
  <>
    <AdminNavbar />
    <Box component="main">
      <Outlet />
    </Box>
  </>
);

export default AdminPageLayout;
