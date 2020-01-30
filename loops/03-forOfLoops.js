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

    blah = function () {
        return lala;
        lala = "hi";
      };
      console.log(blah());

      function sum(a, b) {
        return a + b;
      }
      console.log(sum(1, 2, 3, 4));

      function foo () {
        return bar();
        function bar() {
          return "Poppin' bottles";
        }
      }
      console.log(foo());

      function whatDoesItDo(val) {
        return val ? 1 : 2;
      }; 

      function whatDoesItDo(val) {
        return val ? 1 : 2;
      }; 


     