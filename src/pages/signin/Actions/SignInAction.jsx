import { redirect } from 'react-router-dom';
import { setItem } from '../../../utils/localStorageHandling';
import { requestLogin } from '../../../utils/requests';
// This function is used to handle the sign-in action
// It is used in the sign-in route to handle the form submission
export default async function SignInAction({ request }) {
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');
  try {
    const response = await requestLogin('/users/login', { email, password });
    setItem('user', { token: response.token, ...response.user });
    return redirect('/dashboard');
  } catch (er) {
    console.log(er);
    return er;
  }
}
