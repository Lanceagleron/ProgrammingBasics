//why do we use objects?
// arrays have order, objects do not (or, it's not guaranteed)
// object keys are descriptive

var exampleEmployeeObject = { 'firstName': 'Alex', 'lastName': 'Smith', 'EmployeeId': 'AS12345' }

console.log(exampleEmployeeObject['firstName']);

// in theory, we could do this instead...

var exampleEmployeeArray = ['Alex', 'Smith', 'AS12345']

console.log(exampleEmployeeArray[0]);