/*

    -arrays are containers that hold a list of items
    -denoted by []
    -can hold multiple data types 
    -each, regardless of data type, is separated by a comma
    
*/

let list = ['orange', 'banana', 'apple'];
console.log(list[1]);

/*
    -when calling an array, we can append square brackets onto the end of our arraywitht hte index numberwe want to reference
    -this is called square bracket notation.
    -js counts starting at 0

*/
let students=['Matt','Bob','Jeff','AB',23,true, ['Kris','Taylor','Will']];
console.log(typeof students);
console.log(students instanceof Object);//instenceof operator is used to checkthe type of a variable
//we're working with

console.log(students[2]);

let students=['Matt','Bob','Jeff','AB',23,true, ['Kris','Taylor','Will']];

console.log(students [6][2]);
let name=students[6][2];
console.log('hello ${name}');








