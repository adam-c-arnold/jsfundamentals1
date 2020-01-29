/*
    -forOf Loops look at the iterable properties on an array
    -cant use forOf loops on objects because objects are enumerable,
    not
    iterable
*/

/*let student={
    name:"Peter",
    awesome:true,
    degree:"JavaScript",
    weeek:1

}

for (let item of student){
    console.log(item);

}*/

let dogArray=['great dane','husky','border collie','dalmation','pug'];

//console.log(dogArray[1]) //bracket notation

for(let dog in dogArray){
    //console.log(dog);
    console.log(dog 'dog goes bark');
