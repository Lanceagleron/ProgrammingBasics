//MVP Story: 
//A local fitness coach and mechanical engineer is building an IoT device that pops out a piece of candy every time a runner reaches 2 miles on a treadmill
//but stops giving candy out at mile 6. We're tasked with building the loop functionality to know when to give a piece of candy and when to stop.

//How do we know we need a loop here? 
//What's the starting point of the loop?
//When should the loop stop?
//How will it know to stop?
//What's the incrementing for each iteration of the loop?
//What variables do we need?

//We need a loop here to determine when the runner will reach its goal to give the candy
//starting point would be 0 mile
//the loop will end at mile 6
//it will stop when it stops giving out candy
//increment would be 2
// variable is the runner 

var runner = 0


//for (var i = runner; i<=6; i+=2) {
//    console.log(i);
//}


for (var i = runner; i <= 6; i += 1) {
    if (i == 0) {
        console.log(i + ' start here!');
    }

    else if (i % 2 == 0) {
        console.log(i + " you reached your goal, here's a candy!");
    }

    else {
        console.log(i + " keep going!")
    }

}

console.log('that was the last candy!')

