// map filter reduce are the higher order fn=unctions and array methods
// map tramsfrom the array elemets and returns a new array of updated elemenets
// filter filter out the elements fro the array which pass a certain test an rturn that filtred values in new array 
// rduce as the name says reuce the lements of the array into one it,

// basic map 

const num = [1,2,3,4,5];
console.log(num)

const multinum=num.map((item)=>{
    return item *2
});

console.log(multinum)   // 2,4,6,8,10

// basic filter

const hero=["superman","marvel iron man","kingkong","strange marvel","fishman","fish marvel"];
console.log(hero)
const filterhero=hero.filter((item)=>{
    return item.includes("marvel")
})
console.log(filterhero);

// basic reduce

const int=[1,2,4,5,6,7,8,9];
const total = int.reduce((accum,item)=>{
    return accum+item;


},0)

console.log(total);

// df betweeen map an foreach

// both are array methods but map return us a new array and doesnt transfrom the orivinal array  
// foreacsh doesnt return us new array and it directly transfrom the ne array 

const numm = [1,2,3,4,5];
const newnnn=numm.forEach((item,i)=>{
   return numm[i]=( item*2);
});

console.log(numm);

/////////////++++++++++++++++++++++++++++++++++++++++++++++++++++++//////////////////////////////////


let students=[
    {name:"Piyush",rollno:31 ,marks:80},
    {name:"jenny",rollno:15 ,marks:69},
    {name:"koaushal",rollno:16 ,marks:35},
    {name:"dilpreet",rollno:7 ,marks:55}
];

// question 1 give the output of name in capiytal 
// question 2 return onlyb details of thosw qho scire more than 60
// question 3 return details of student who has marks more than 60 and rollno greeater than 15
// qustion 4 sum pf marks of all students
// question 5 return only names of the students who scored more than 60 
// qustion 6 rturn total marks for the stuents with marks greeater than 60 after 20 marks have been added to those who scored less than 60

////////////++++++++++++++++++++++++++++++++//////////////////////


// solution of question one 

const capname=students.map((item)=>{
    return item.name.toUpperCase();
});
console.log(capname)

// solution of question 2 

const highermarks=students.filter((item)=>{
    return item.marks>60;
});
console.log(highermarks)


// solution for ques 3

const f2=students.filter((item)=>{
    return item.marks>60
}).filter((item)=>{
    return item.rollno>15;
});


console.log(f2)


// solution for ques 4 

const sum = students.reduce((accum,item)=>{
    return accum + item.marks
},0);


console.log(sum);


// solution for question 5 

const nameOf=students.filter((item)=>item.marks>60).map((item)=>(item.name));

console.log(nameOf)


// solution for question 6 

const complex = students.filter((item)=>item.marks<60)
.map((item)=>item.marks + 20)
.filter((item)=>item>60)
.reduce((accum,item)=>{
    return accum + item
},0)

console.log(complex)