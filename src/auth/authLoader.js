import authRequire from './authRequire';
// This loader is used to check if the user is authenticated before loading the app
// It is used in the root route of the app
// It will redirect the user to the login page if they are not authenticated
// It will also check if the user is authenticated before loading the app
export default async function appLoader() {
  await authRequire();
  return null;
}
