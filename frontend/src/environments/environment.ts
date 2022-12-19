/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    url: 'dev-shsudh1hrsyk82dk.us', // the auth0 domain prefix
    audience: 'myshop', // the audience set for the auth0 app
    clientId: 'RNetkdcY6Ch12whS8kEv2CiZdUlRbJlX', // the client id generated for the auth0 app
    callbackURL: 'http://localhost:4200', // the base url of the running ionic application. 
  }
};
