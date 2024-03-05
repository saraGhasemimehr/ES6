/**
 * Promises - Challenge
 * Create a promise that returns some user data and throws an error when not found.
 * Log the user data when listening to the promise as well as log the error.
 * 
 * Docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
*/
const userData = {
  id: 123,
  name: 'Alice',
  email: 'alice@example.com'
};

const getUserData = (userId) => {
  return new Promise( (resolve,reject) => {

      if(userId === userData.id){
        resolve(userData);
      } else {
        reject('user not found');
      }

  });
};

  getUserData(123)
  .then( user => console.log('User data:', user))
  .catch(error => console.log('Error:', error.message));


