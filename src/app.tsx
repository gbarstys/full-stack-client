import React from 'react';
import {
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { useRootDispatch, useRootSelector } from './store/hooks';
import { selectAuthLoading, selectAuthLoggedIn, selectAuthToken } from './store/features/auth/auth-selectors';
import { createAuthenticateActionThunk } from './store/action.creators';

import ProductsPage from './pages/ProductsPage';
import ContactsPage from './pages/ContactsPage';
import HomePage from './pages/home-page';
import LandingPageLayout from './components/layouts/landing-page-layout';
import CreateYourselfPage from './pages/CreateYourselfPage';
import AdminLoginPage from './admin/adminLogin';
import DeliveryPage from './pages/DeliveryFormPage';
import AdminDashboard from './admin/adminDashboard';
import AdminPageLayout from './components/layouts/admin-page-layout';
import AdminOrders from './admin/adminOrders/index';
import ProductsEdit from './admin/adminProductsEdit';
import GalleryEdit from './admin/adminGalleryEdit';

import RequireAuth from './routing/require-auth';
import RequireVisitor from './routing/require-visitor';

const App: React.FC = () => {
  const location = useLocation();
  const token = useRootSelector(selectAuthToken);
  const loggedIn = useRootSelector(selectAuthLoggedIn);
  const loading = useRootSelector(selectAuthLoading);
  const dispatch = useRootDispatch();

  if (!loggedIn && token) {
    if (!loading) {
      dispatch(createAuthenticateActionThunk(token, location.pathname));
    }
    return <div />;
  }

  return (
    <Routes>
      <Route path="/" element={<LandingPageLayout />}>
        <Route index element={<HomePage />} />
        <Route path="create" element={<CreateYourselfPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="delivery" element={<DeliveryPage />} />
      </Route>
      <Route path="/" element={<AdminPageLayout />}>
        <Route path="admin" element={<RequireVisitor><AdminLoginPage /></RequireVisitor>} />
        <Route path="admin/dashboard" element={<RequireAuth><AdminDashboard /></RequireAuth>} />
        <Route path="admin/editorders" element={<RequireAuth><AdminOrders /></RequireAuth>} />
        <Route path="admin/editproducts" element={<RequireAuth><ProductsEdit /></RequireAuth>} />
        <Route path="admin/editgallery" element={<RequireAuth><GalleryEdit /></RequireAuth>} />

      </Route>
    </Routes>
  );
};

export default App;
