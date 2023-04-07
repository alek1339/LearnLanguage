import { ILoginUser } from '../types/User';


export const validateUserData = (userData: ILoginUser) => {
  const errors: { [key: string]: string } = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!userData.email || !emailRegex.test(userData.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!userData.password || userData.password.length < 6) {
    errors.password = 'Password must be at least 6 characters.';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};