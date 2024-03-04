function runCallbacks(callbacks) {
  callbacks.forEach((callback) => callback());
}
function firstCallback() {
  console.log("First callback");
}
function secondCallback() {
  console.log("Second callback");
}

function thirdCallback() {
  console.log("Third callback");
}
const callbackArray = [firstCallback, secondCallback, thirdCallback];
runCallbacks(callbackArray);
// Should log:
// "First callback"
// "Second callback"
// "Third callback"