import setAuthToken from "./setAuthToken";

export const storeToken = (token: string) => {
  localStorage.setItem('jwtToken', token);
  setAuthToken(token);
}