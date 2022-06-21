import ApiService, { formatError } from './api-service';
import { Crudentials, Admin } from '../types';

export type AuthResponseBody = {
  admin: Admin,
  token: string,
};

export const login = async (crudentials: Crudentials): Promise<AuthResponseBody> => {
  try {
    const response = await ApiService.post<AuthResponseBody>('/api/auth/login', crudentials);

    return response.data;
  } catch (err) {
    throw new Error(formatError(err));
  }
};

export const register = async (crudentials: Crudentials): Promise<AuthResponseBody> => {
  try {
    const response = await ApiService.post<AuthResponseBody>('/api/auth/register', crudentials);

    return response.data;
  } catch (err) {
    throw new Error(formatError(err));
  }
};

export const authenticate = async (token: string): Promise<AuthResponseBody> => {
  try {
    const response = await ApiService.post<AuthResponseBody>('/api/auth/authenticate', {}, {
      headers: {
        Authorization: token,
      },
    });

    return response.data;
  } catch (err) {
    throw new Error(formatError(err));
  }
};

export const checkEmailAvailability = async (email: string): Promise<boolean> => {
  try {
    const response = await ApiService.get<{ valid: boolean }>(`/api/auth/check-email?email=${email}`);

    return response.data.valid;
  } catch (err) {
    throw new Error(formatError(err));
  }
};

const AuthService = {
  login,
  register,
  authenticate,
  checkEmailAvailability,
};

export default AuthService;
