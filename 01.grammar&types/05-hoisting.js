/*
    -javascript is interpereted line by line (read top to bottom), and performs
    2 passes of our code.
        -the first pass of the code recognizes when we have declared variables 
        and stores them away in memory
            -looks at ANYTHING ON THE LEFT SIDE OF OUR assignment operator
            
        -the second pass of the code is where the values we ahve given our 
        vaariables are actually assigned.

    -NOTE: functions are also hoisted

    */

console.log(name);
let name='adam'

b();

function b(){
    console.log('I have been hoisted');
}