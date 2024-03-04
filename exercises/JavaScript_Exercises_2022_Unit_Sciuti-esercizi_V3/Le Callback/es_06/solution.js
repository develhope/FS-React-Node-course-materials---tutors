
function fetchDataFromAPI(callback) {
  setTimeout(function () {
    const data = { name: "John", age: 30 };
    callback(data);
  }, 2000);
}

function handleData(data) {
  console.log("Received data: " + JSON.stringify(data));
}

fetchDataFromAPI(handleData);