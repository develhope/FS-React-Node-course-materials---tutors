function performOperation(a, b, callback) {
    try {
        const result = a + b;
        callback(result);
    } catch (error) {
        console.error("An error occurred: " + error.message);
    }
}

function displayResult(result) {
    if (result < 0) {
        throw new Error("Result is negative.");
    }
    console.log("Result is: " + result);
}

performOperation(5, 3, displayResult);
