//PUSH
let food =['peacn pie','shrimp','quesadilla','cheese cake','hot dog'];
console.log('original aray:', food);


food.push('pizza');//appends or 'pushes' an item into the array
console.log('push:', food);

//SPLICE
// (position)
  food.splice(1, 1, 'bananas');
        //  what to delete, how many, what to replace with

        console.log('splice', food);

food.splice(2,0,'sweet potato pie'); //(position/how many to delete(0)/what to add in its place)
console.log('splice 2:', food);

//POP-removes last item of array
food.pop();
console.log('pop:', food);

//SHIFT- removes first element of array
food.shift(); 
console.log('shift:', food);

//UNSHIFT-adds 1 or mor items to beginning of array

food.unshift('popcorn', 'steak');
console.log('unshift:', food);

