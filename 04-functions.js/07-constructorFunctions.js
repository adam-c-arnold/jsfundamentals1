let person1={
    name:'Mancy',
    age:24,
    canVote: true
}
//  (1)    (2)         (3)
function Person(name, age, canVote){
//   (4)  (5)  (6)
    this.name=name;
    this.age=age;
    this.canVote=canVote;

}

let person4=new Person('James',80, true);
console.log(person4);

/*
    1.the function keyword
    2.the function name. Name should be capitalized
    3.the pparameters. these will be the values for the keys in our objectonce a new 'Person' is created
    4.the 'this' keyword refers back to whatever calle dit, or whatever aactivates it. In this case,
    '.this' refers back to 'Person'.
    5.the keys of the new object we're creating.
    6. the argumemt we pass through our function call will resolveas the values
    7 & 8. the new keyword creates a new instance of our 'Person' object, with the values we pass into
    that function when invoking it.

*/

( let j = 0;  j <  5; j++ ) {
    console.log(j + " ")
  }

  let count = 0;
  for ( ;  count < 9; ++count ) {
    console.log(count);
  }