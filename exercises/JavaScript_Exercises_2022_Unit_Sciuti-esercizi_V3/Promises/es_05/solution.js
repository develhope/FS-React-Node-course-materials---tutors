  
  function promisifiedFunction(arg1, arg2) {
    return new Promise((resolve, reject) => {
      callback_BasedFunction(arg1, arg2, (error, result) => {
        if (error) {
          reject(error); // Reject the Promise with the error
        } else {
          resolve(result); // Resolve the Promise with the result
        }
      });
    });
  }
  
  // Usage example:
  promisifiedFunction(2, 3)
    .then(result => {
      console.log('Result:', result);
    })
    .catch(error => {
      console.log('Error:', error.message);
    });
  
  promisifiedFunction(2, 4)
    .then(result => {
      console.log('Result:', result);
    })
    .catch(error => {
      console.log('Error:', error.message);
    });