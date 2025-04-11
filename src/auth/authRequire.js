import { redirect } from 'react-router-dom';
import { getItem } from '../utils/localStorageHandling';
import { requestDataWithToken } from '../utils/requests';
import getUserToken from './getUserToken';
// This function is used to check if the user is authenticated before loading the app
// It is used in the root route of the app
export default async function isLoggedIn() {
  const userLocal = getItem('user');

  if (!userLocal) {
    throw redirect('/sign-in');
  }

  try {
    const response = await requestDataWithToken(
      '/users/validate',
      getUserToken(),
    );
    return response;
  } catch (er) {
    console.log(er);
    throw redirect('/sign-in');
  }
}
