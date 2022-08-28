//arrays are collection of data - in a specific orders
var samplearray = ['alex', 'brad', 'charlie', 'devon', 'erik'];
console.log(samplearray);
//array will always start at index 0 - the first item is in the 0th index,
// the second item is in the 1st index. so on and so forth
console.log(samplearray[0]); //code will print out alex

//if we want to add an item in the array we want to use push
samplearray.push('francis')
console.log(samplearray);
//use .length if we want to know how many items are in the array
console.log(samplearray.length)
//remove the last item from the array with the .pop() method
var removedname = samplearray.pop()

console.log(samplearray)
console.log(removedname)

console.log(samplearray.length)