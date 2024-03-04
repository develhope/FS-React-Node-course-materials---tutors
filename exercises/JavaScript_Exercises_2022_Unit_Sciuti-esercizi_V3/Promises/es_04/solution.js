
function fetchDataFromAPI() {
  return new Promise((resolve, reject) => {
    const success = Math.random() < 0.5;
    setTimeout(() => {
      if (success) {
        resolve('Data retrieved successfully');
      } else {
        reject('Error: Failed to fetch data');
      }
    }, 2000);
  });
}

fetchDataFromAPI()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
