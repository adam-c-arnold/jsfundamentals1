/*
for loops take in 3 parameters:
1.initial expression
2.condition
3.increment expression

*/

//      (1)    (2)    (3)
for (let i=0; i<10; i=i+1){  
    console.log(i);
}

//or i++, ori--

for (let i=0; i<20; i+=2){
    console.log(i);
}

for (let i=10; i>=0; i=i-1){
    console.log(i)
}

for (let i=0; i>=-24; i=i-2){
    console.log(i)
}

let name="adam";

for (let i=0; i<name.length; i++){
    console.log(name[i]);
}


let sum=0;

for(let i=1; i<=50; i++){
    sum=sum+i;

}
console.log(sum)