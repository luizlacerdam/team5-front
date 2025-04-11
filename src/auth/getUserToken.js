import { getItem } from '../utils/localStorageHandling';
// This function is used to get the user token from local storage
// It is used in the authRequire function to check if the user is authenticated
export default function getUserToken() {
  const userLocal = getItem('user');

  if (userLocal) {
    return userLocal.token;
  }
  return null;
}
