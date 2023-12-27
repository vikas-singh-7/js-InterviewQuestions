// // what are functions
// // a peice of code which can be used again and again for doing the same kind of tasks
// // what is a function declrartion ?
// function vikas(){
//     console.log("hey vikas")
// };
// vikas()

// // this is a function declaration

// // what is a function expression ?
// // so when we add a function as a value toa  variable that means function expressiion

// const noob = function(){
//     console.log("hey")
// };  
// //this is a function expression 

// noob();

// // what are first class functions?
// // simple that functions which can be passses into anothr function like we pass variables in js every function is s sfrst vlass function

// function dog(fn){
//     return fn();

// }
// dog(noob);

// console.log(noob);


// // iife  imidaitely invoked function
// (function deer(name){
//     console.log("hey",name)
// })("db connected");


// // question 

// for(let i =0; i<5; i++){
//     setTimeout(() => {
//         console.log(i);
//     },i*1000);
// };


// // let is a block scope so it will give its value as 0 for one scope and create another scope for i=1 and so on

// // but if there is var it is not a block scope so same value of var will delover to set time out

// // question function hoisting 

// boom()  // as calling is before initialization but it still has value of function it can still excecute the function  this is known as function hoisting 
// function boom(){
//     console.log("hey boom boom")
// }


// // variable hoisting
// console.log(boomm);   // undefine as var is hoisted but initialise as undefine 
// var boomm="vikas"

// var x = 20;
// const fun = function(){
//     console.log(x)     // function excecution context will add var x on top and assigned undefine then log x as undefine and then put x as 21 
//     var x = 21;

// };
// fun()


// // arraow vs normal

// //  1 syntax

// const normal=function(){

// }

// const arrow=()=>{

// };


// // impliict return vs ecplicit return

// const nromalreturn=function(){
//     return "hello"    // explicit return 
// } 

// const arrowREturn=()=>"hey" // implicit return 

//     arrowREturn();


//     // arguments keywprd
//     function hp(){
//         console.log(arguments)    // arguments works amnd return aray of arguments
//     } 

//     hp(1,2,3,4,5)


//     // arrow function deost sipport arguents

//     const banana=()=>{
//         console.log(arguments)
//     }
//     banana(1,2,3);

//     // this keyword normal function can use this key word but arrow function doesnt use it 

    function parent(name){
        let name1 =name
      
        function child1(){
            let age=22
            console.log(name1,age)
        };
        child1();
        
        const child2=()=>{
            let age =22
            console.log(this.name1,age)
        }
        child2()
    }
parent("vikas noob")