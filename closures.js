// closures and lexical scoping

// global scope varsiabkles are accessed by function
const name = "vikas";
function vikas() {
  console.log(name); // vikas is accesable as it was in globakl scope
  function vikas1() {
    console.log(name); // yes eveen inner functions can have acces to global scope
  }
  vikas1();
}

vikas();

// const name="vikas";
// function vikas(){
//     console.log(name)    // name is undefine as name was in function context so function wull se its own context not theglobakl and also var gets hoist so namw will be undefine
//     var name ="vikas singh"
//     function vikas1(){
//         console.log(name);   // yes now inner function will have access to the variable of the its pasrent function

//     }
//     vikas1()
// };

// vikas();

// closures    ability of  a funtion thorugh which it can access the reffrence of its prent functon

function cars() {
  const name = "g-Wagon";
  function cars1() {
    console.log(name);
  }
  return cars1;
}

cars(); //cars has a function declarayion cars1

const car1fn = cars();
car1fn(); // g wagon printed

// closure chaining

function parent(v) {
  // 10
  function child1(n) {
    console.log(n);
    console.log(v); // so yes we have have access of parameter as well
    return function (p) {
      return function (z) {
        console.log(v + n + p + z);
      };
    };
  }
  return child1;
}
parent(10)(20)(40)(10);

// this is closure chaining

// quues 1 op based what will be the output in console

let count = 0;
(function printcount() {
  if (count === 0) {
    let count = 1;
    console.log(count); // 1 as it will look for its own context variale
  }
  console.log(count); // 0  as let is block so it will not be able to access outside of the if
})();

// write a function that would allow you to do this

var addSix = createBase(6);
addSix(10); // 16
addSix(21); //27

// yes heres the example it was easy hahaha

function createBase(n) {
  // 6
  return function (p) {
    //10
    console.log(n + p); //10+6
  };
}

// qustion set time out output

function a() {
  for (var i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(i); // what is logged in i ?      2 as var is  o=not a block scope so same var is going to share to settimeout
    }, 1000);
  }
}

a();

// as settimeout is a async js function so it allows loop to get itertstd so the last value of var is 2 so settime out get 2 for all time

// but for let it is 0,1,2 why....??
// well simple let is a block scope so everytime loop get executed it takes its own settimeout and set i and for second iteration second sec=timeout is the block for second iteration so yes thats te df key df is df let is going to use by all settimeout

// qustion do the same question output will be 0,1,2 without lt andc const

console.log("ejlfefberbforb");
function b() {
  for (var i = 0; i < 3; i++) {
    function inner(i) {
      setTimeout(() => {
        console.log(i);
      }, 1000);
    }
    inner(i);
  }
}

b();

// question make this run only once

let view;
function zara() {
  view = "zara noobie ";
  console.log(view);
}

zara();
zara();
zara();
zara();

// so solution is use closure and return the console fun ction om

let view1;
function newZara() {
  let count = 0;
  console.log(count)

  return function () {
   
    if (count > 0) {
      console.log("already invoked",count);
    } else {
      count++;
      view = "cinnamon noob";
      console.log("hey", view);
    }
  };
}
//so what happen is when newZAra function runs ir see a count which is 0 now it goes and see a function which is returned
// newZara()
let final = newZara();
final();
final();
final();
