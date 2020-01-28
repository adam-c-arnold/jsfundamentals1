/*
    SCOPE

        -how a computer keeps track of variablesin a progam
        -scopes can be nested , where theres an outer scope (global), and an
        inner scope (local)
    */

let x=12; //globally scoped variable

function scope() {
    let x= 33; //locally scoped variable
    console.log(x);
}

scope();
console.log(x);


 let y= 12;
function scope(){
    y=33;
    console.log(y);

}

scope();
console.log(y);

/*

    -const is a constant that cannot be re-expressed or re-intialized as another value
    -var is scoped to nearest function block
    -let is scoped to the nearest enclosed block
*/

var x=12;

function varTest(){
    var x=33;

    if (1==1){
        var x=45;
        console.log(x);
    }
    console.log(x);


}   

varTest();
console.log();

let x=12;
function letTest(){
    var x=33;
    
    if (true){
        let x=45;
        console.log(x);

    }
    console.log(x);


}

letTest();
console.log(x);

//

function constTest(){
    const scope=1;

    if (true){
        const scope=2;
        console.log(scope);

    }

    console.log(scope);

}

constTest();






