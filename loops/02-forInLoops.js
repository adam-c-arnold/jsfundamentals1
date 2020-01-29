/*
    -great for counting key/value pairs in an object. Properties in an object 
    are what is called enumerable
    -for in loops will iterate over an objects numerable properties

*/

let student={
    name:"peter",
    awesome:true,
    degree:"JavaScript",
    week: 1
console.log(student.degree); //dot notation
}
for (let item in student){
    console.log(student{item})
    //console.log(item);

}
//grabbing value of dog
  //              (1)        (2)        (3)            (4)      (5)
let dogArray=['great dane','husky','border collie','dalmation','pug'];

for(dog in dogArray){
    //console.log(dog);
    console.log(dogArray[dog])
}

let name ='aDAM';
let capName;

for(let i in name) {
    if (i==0){
        capName=name[i].toUpperCase();
    }else{
        capName+= name[i].toLowerCase();
    }
}
console.log(capName);

/*for loops take in 3 parameters:
1.initial expression
2.condition
3.increment expression*/



