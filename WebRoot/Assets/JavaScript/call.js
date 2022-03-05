


// This is an example to explain how 'Function.call(caller)' changes the scope  
// of the keyword 'this' that gets used inside the called function.
function logCaller() { console.log(this); }



// here it logs the window global object.
logCaller();

// here it logs the new instance of the function object.
const instance = new logCaller();

// here it logs whatever caller we pass.
logCaller.call('Hey there, I am the new caller and I am being logged :)');
