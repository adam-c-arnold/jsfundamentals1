/*
    BOOLEANS
    //a boolean has two possible values of either true or false
*/

let on=true;
console.log(on);

let off=false;
console.log(off);

/*
    -NULL
        -null is an empty value. Think of it like an empty container:nothing 
        is in it, but it still exists as a space to fill


*/
let empty=null;
console.log(empty);

/*
    UNDEFINED
        - no value has been assigned and it does not act as an
        empty container, whereas null does

 */

 let undef=undefined;
 console.log(undef);

 let correct; 
 console.log(correct);

 /*
    -Null is liek a container with nothing in it
    -undefined is when a varible has never been set, or hasnt been created yet

 */

 /*
    NUMBERS
        -numebrs are literally just numbers. Dont need anything
        special to write them
*/

let degrees=33;
console.log(degrees);

let precise=999999999999999;//15 9's
console.log(precise);

let rounded=9999999999999999; //16 9's
console.log(rounded);

let decimal=0.2;
console.log(decimal);

/*
    STRINGS
    -strings are datatypes esed to represent text and are 
    wrapped in either single or double quotes
*/

let stringOne="double qoutes";
let stringTwo='single quotes';

console.log(stringOne, stringTwo);

//numbers vs strings
let first=1050+100;
let second='1050' + '100';

console.log(first);
console.log(second);

console.log(typeof first);
console.log(typeof second);

//if one data type is a string, and one is a Number, the compiler
//will assume you are trying to work with strings and convert the number to a string


/*
    OBJECTS
        -objects are used to store many values instead
        of a singular value
        -hold what are known as key/value pairs
*/

let frodo={
    race:'hobbit',
    rings:1,
    cloak:true

}

console.log(frodo);
console.log(typeof frodo);

/*
    ARRAYS
        -arrays are containers that hold a list of items

        let list=  [   'item1', 'item2', 'item3'];
              (1)  (2)      (3)

              1.name of array, or variable
              2.square brackets denote that it is an array
              3.rach item, regardless of data type, is always separated by a comma

*/

let burritos=['large',4,true];
console.log(burritos);

console.log(typeof burritos);

/*
    Challenge:
    Set 7 (or 8) variables:
    firstName
    lastName
    houseNumber
    aptNumber (if applicable)
    street
    city
    state
    zipcode
    Set each variable to its respective type.
    console.log your whole address (with a space between variables).
*/


let firstName='adam';
let lastName='arnold';
let houseNumber='1234';
let street='kingsley dr';
let city='indianapolis';
let state='IN';
let zipcode='46220';

console.log(firstName, lastName+',',houseNumber, street+',',
city+',',state,zipcode);

/*
    STRINGS
        -properties are qualities associated with a specific
        datatype
        -strings have propertior qualities
        associated specifically with strings
        */

        let myName='adam';
        console.log(myName.length)//length will not start counting at  0


/*
    STRING: METHODS
        -methodsare tolls that can help us manipulate certain
        data
        -.property&.method()
            -no parenthesis for properties

*/

let myNameIs='adam';
            console.log(myNameIs.toUpperCase());//toUpperCase()is a method that
            //changes a string to all uppercase

let home='my home is indianapolis';
            console.log(home.includes('indianapolis'));


//Challenge:use google, find MDN documentation for Strings,
//research and use the split method to get an array back from this string

let sent='this sentence will be split into individual parts';
console.log(sent.split(' '));














