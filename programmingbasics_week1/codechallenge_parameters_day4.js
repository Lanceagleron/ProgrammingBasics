function greet(name, time,) {

    var hello = ('Good day, ' + name + '! ');
    var timeofday = ('the Time is ' + time + '. ');
    var result = hello + timeofday

    if (name == 'Count Dooku') {
        //console.log("I'm coming for you, Dooku!");
        result = "I'm coming for you Dooku";
    }
    //else {
    //    console.log(result);
    //}
    return result;

}

function Showmeresult(){
console.log(greet('Count Dooku', '11:04AM'));
}


Showmeresult()
