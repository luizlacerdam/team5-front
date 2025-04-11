import { redirect } from 'react-router-dom';
import getUserToken from '../../../auth/getUserToken';
import { requestDataWithToken } from '../../../utils/requests';
// This function is used to check if the user is authenticated before loading the app
export default async function signInLoader() {
  try {
    const response = await requestDataWithToken(
      '/users/validate',
      getUserToken(),
    );
    if (response.status === 'OK') {
      return redirect('/dashboard');
    }
    return response;
  } catch (er) {
    console.log(er);
    return null;
  }
}
