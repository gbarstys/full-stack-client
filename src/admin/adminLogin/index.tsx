import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useFormik, FormikConfig } from 'formik';
import {
  TextField,
} from '@mui/material';
import * as Yup from 'yup';
import { useRootSelector } from '../../store';
import { selectAuthLoading } from '../../store/features/auth/auth-selectors';
import AuthForm from './auth-form';
import { createLoginActionThunk } from '../../store/features/auth/auth-action-creators';
import { useRootDispatch } from '../../store/hooks';

type LoginValues = {
  email: string,
  password: string,
};

type LoginFormikConfig = FormikConfig<LoginValues>;

const initialValues: LoginValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  email: Yup.string()
    .required('El. paštas yra privalomas')
    .min(4, 'Min 4 symbols')
    .max(32, 'Max 32 symbols'),
  password: Yup.string()
    .required('Password is required')
    .min(4, 'Min 4 symbols')
    .max(32, 'Max 32 symbols'),
});

const AdminLoginPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const loading = useRootSelector(selectAuthLoading);
  const dispatch = useRootDispatch();

  const handleLogin: LoginFormikConfig['onSubmit'] = ({ email, password }) => {
    const redirect = searchParams.get('redirect') ?? '/';
    console.log('-');
    const loginAction = createLoginActionThunk({ email, password }, redirect);
    dispatch(loginAction);
  };

  const {
    values,
    touched,
    errors,
    dirty,
    isValid,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik<LoginValues>({
    initialValues,
    onSubmit: handleLogin,
    validationSchema,
  });

  return (
    <AuthForm
      formTitle="Login"
      submitText="Login"
      onSubmit={handleSubmit}
    >
      <TextField
        name="email"
        type="email"
        label="Email"
        fullWidth
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.email && Boolean(errors.email)}
        helperText={touched.email && errors.email}
        disabled={loading}
      />
      <TextField
        name="password"
        type="password"
        label="Password"
        fullWidth
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.password && Boolean(errors.password)}
        helperText={touched.password && errors.password}
        disabled={loading}
      />
    </AuthForm>
  );
};

export default AdminLoginPage;
