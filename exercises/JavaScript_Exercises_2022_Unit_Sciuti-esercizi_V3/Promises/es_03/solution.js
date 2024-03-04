const delayPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Resolved after 2 seconds');
    }, 2000);
  });
  
  delayPromise.then((result) => {
    console.log(result);
  });
  