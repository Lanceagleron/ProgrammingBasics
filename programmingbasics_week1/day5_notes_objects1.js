// object
// an object is a collection of key-value pairs

var sampleobject = {'key1': 98, 'key2': 234, 'key3': 72};

console.log(sampleobject);
console.log(sampleobject['key1']);
// providing a key in the square brackets returns the value for that key
// proving a key that does not exist in the object returns undefined

// modifying keys and values
sampleobject['key1'] = -4;

console.log(sampleobject);

//adding keys to object
sampleobject['newkey'] = true;

console.log(sampleobject);
// we should not consider the keys in an object to be ordered
// data where we care about order - use an array
// order for keys is not (always) guaranteed

// remove keys from objects with the delete keyword
delete sampleobject['key1'];

console.log(sampleobject);

