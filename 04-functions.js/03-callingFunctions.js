function hi(){
    console.log('hello');

}

hi;
hi();
console.log(hi);
console.log(hi());

//as soon as our parser see's that there is a function invocation, that happens immediately.

function numbers(){
    for(leti=1; i<11; i++){
        console.log(i)
    }
}

numbers()

//

let arr=['this','is','really','cool'];

function arrlist(){



for(let word of arr){
    console.log(word);

}
}

arrlist();

