
function fetchDataFromAPI() {
  return new Promise((resolve, reject) => {
      setTimeout(function() {
          const data = { name: "John", age: 30 };
          if (data) {
              resolve(data);
          } else {
              reject("Data retrieval failed.");
          }
      }, 2000);
  });
}

fetchDataFromAPI()
  .then(data => console.log("Received data: " + JSON.stringify(data)))
  .catch(error => console.error("Error: " + error));