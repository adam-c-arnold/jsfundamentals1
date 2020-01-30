let long=[1, 2, 3,4,5,6,7,8,9,10];

console.log(long.length)//simply counts how many items are present, does not start counting at 0.

let arr=['blue', 25, true, ['string'], {key: 'value'}];
//console.log(arr.length);
console.log(arr.toString());

let array1=[1,2,3,4,5];
console.log('array1',array1);
const reversed =array1.reversed();
console.log('reversed', reversed);
console.log('array1;', array1);


//const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);
// expected output: "array1:" Array ["one", "two", "three"]

const reversed = array1.reverse();
console.log('reversed:', reversed);
// expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', array1);
// expected output: "array1:" Array ["three", "two", "one"]

let arr=[1,2,3,4,5];

if(arr instanceof Array=== true){
    let revArr=arr.reverse();
    revArr.forEach(num=>console.log(num));
    
}else{
    console.log('not an array')
}








