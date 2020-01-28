/*
- a variable is a named cotainer for storing data
-we name variables so that we can refer to these again
*/

let a =2;

    let     b    =    1;
/*  (1)    (2)   (3)  (4)

    1.javascript keyword
    2.variable name 
    3.assignment operator
    4.variable value


*/

console.log(a + b);

let hello="test one";
let Heloo="test two";




/*
    notes on variables:
        -a variable name must begin with a letter, underscore, or dollar sign
        -numbers may follow the above characters, but they cant come first
        -javascript is case sensitive= hello & Hello are two separate variables
        -no spaces allowed in variable name
        -camelCase-first word umdercase, second word is capitalized-best practice for naming variables
         with multiple words
         -helps with readability


*/

// let thisismyvariable = 'test';
//let thisIsMyVariable='test';

/*

    var:'old' keyword for variables in javascript

    -let:'new' keyword introduced for variables in ES6
    (newer version of JS)

    -const:unchangeable variable once declared

*/

/*
declaration vs initialization:

    -declarations are the LEFT SIDE of a variable
        -let x  
        - declarations are on the left side of the assignment operator (=)

    -initializations are the RIGHT SIDE of the variable
        -it sets the value of the variable 
        -the value we intitialize our variables as is what is on the right side of the assignment operator (=)



*/

let x;
console.log('declaration:', x);// declaration: undefined

x = 10;
console.log('initialization:',x);//initialization:10

x=100;
console.log('reinitialization:',x);

let y = 'hello';
console.log(x,y);

const today='great';
console.log(today);

// ÷today='wonderful';
console.log(today);






