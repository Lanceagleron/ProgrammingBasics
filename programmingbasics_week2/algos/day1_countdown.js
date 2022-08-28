// console.log(5);
// console.log(4);
// console.log(3);
// console.log(2);
// console.log(1);

//a loop is used whenever we want to repeat a process a certain number of times
//a function is a set of instruction that we can execute and we can pass in data to it as inputs

//create a function that will accept a number as an input to count down from, and it will cout fown from that number until it hits 0
function countDown(num) {//num is the parameter
    //this is the body of the function
    for (let i = num; i >= 1; i--) {
        //this is the body of the for loop
        console.log(i);
    }
    console.log('finished!')
}

//this is us calling the function (in other words: invoking the function/executing the function)
countDown(20);//20 is the argument
countDown(3);//3 is the argument
countDown(8);//8 is the argument

//in a for loop, inside the parethesis, there are three parts:
    //let  i = 5 --> where to start our loop from.
    // middle part ( i>=1) --> when to stop the looping process.
    //third part (i--) --> what to do with our variable after each iteration.


