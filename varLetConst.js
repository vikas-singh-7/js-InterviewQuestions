// origin var camw into existene wheen js was inveented 
// const and let came later when es 6 arrived 

// var let const difference 


// var can be redeclared reassigned again 

var a = 10;
var a =11;
console.log(a)    // 11 

a = "vikas";
console.log(a);  // again reassigned to vikas

// let can be re assigned or re initialize again but cannot be re declared again

let b = 11;
console.log(b);   // 11
b="zara";
console.log(b);    // zara as let can be reassigned again

// let b = 12; // error let can not be re declared again 


const name="vikas";
console.log(name);
// name="zara";   // error assignment to constat variable  canot reassigned a const 
// console.log(name);
// const name="kalu" ; // e rror cannot be redeclared again 


// declarations of let const var 

// let and var can be declared without a assignmnet or without being initialisation 
var c;
console.log(c);   // undefine but declared
let d;
console.log(d);    // undefine same declsred

// const f;    // error const can nt get declared without being initialization 
// console.log(f)




// shadowing

function vikas(){
    let a = 10;
    function vikas1 (){
    var a = 11;
    console.log(a)
    };
    vikas1();
    console.log(a)
}

vikas();


// function vikas3(){
//     let a = 10;
//     if(true){
//         var a =11;    // why this ant be deeclaed woith same name as var is hoisted and override let a 
//         console.log(a)

//     };
//     console.log(a)
// };
// vikas3();

 
// hoisting  behaviour of js in which js move all the varibles nd function on the top of the code
// but the behaviour of var let and const are df


console.log(clash);   // udefine as var clash is hoisted and not assigned
var clash="hey";
console.log(clan);   // cannot access clan before intiliaztion
let clan="hey"


console.log(pekk)    // can not access pekk before intiliaztion
const pekk="pekka";


// simple tearms 


// see we have a var like 
var aa;    // it is undefine i mean not initialzide right 

console.log(aa); // undefine

let bb;
console.log(bb);   // undefine 

// var gets intialize to undefine at top when hoisted thats why we are able to get them print
// but const and ;let doesnt get intialozxe as undefine when hoisyted 

// var jab hoisted hote hai to automatically wo undefine initalizxe ho jate hai jabki let and const wutomativly initalise nhi hote
