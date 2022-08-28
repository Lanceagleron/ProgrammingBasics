// objects in objects (and vice versa)

// each employee has certain areas they can or cannot access
// the program stores this as an accesslevel
// nuclear facility example

//also, we can all line breaks to make this easier to read/modify
var exampleEmployeeObject = {
    'firstName': 'Alex',
    'lastName': 'Smith',
    'employeeId': 'AS12345',
    'accessLevels': {
        'frontOffice': true,
        'serverRoom': true,
        'managementOffice': false,
        'nuclearMaterials': false
    }
};

//var employeeAccess = exampleEmployeeObject['accessLevels'];
//console.log(employeeAccess['frontOffice']);

console.log(exampleEmployeeObject['accessLevels']['frontOffice']);