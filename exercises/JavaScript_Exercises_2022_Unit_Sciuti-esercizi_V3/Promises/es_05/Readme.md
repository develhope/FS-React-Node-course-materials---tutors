Convertire la seguente funzione basata su callback in una funzione basata su Promise.

function callback_BasedFunction(arg1, arg2, callback) { 
  setTimeout(() => { 
  const result = arg1 + arg2; 
  if (result % 2 !== 0) { 
  callback(null, result); 
  } else { 
  callback(new Error('Result is not odd!'), null); } }, 1000);
  }