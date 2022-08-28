var RequiredHeight = 42; 
//Rider must be at least 42 inches tall to ride
var RequiredAge = 10;
//Rider must be over at the age of 10 to ride
var RiderHeight = 51;
var RiderAge = 13;
//If the rider's height is greater than 52, the console.log should say "Get on that ride, kiddo!". Otherwise, console.log should say "Sorry kiddo. Maybe next year."
var RequiredHeight = (RequiredHeight + 10);

if (RiderHeight > RequiredHeight) {
    console.log("Get on that ride, kiddo!");
}
else if (RiderAge > RequiredAge) {
    console.log("Get on that ride, kiddo!");
}
else {
    console.log("Sorry kiddo. Maybe next year.");
}