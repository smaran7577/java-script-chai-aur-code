

//foreach applies the function on every element till the end of the array 

let arr=[1,2,3,4,5];
arr.forEach(function(el) {
    console.log(el);
})
arr.forEach((el)=> {
    console.log(el);
})

//arr.map 

let ar=[1,2,3,4];
let double= ar.map((el)=>{
    return el*2;
})
console.log(double);

//arrr.filter
let a=[1,2,3,4,5,6,7,8,9,10];
let ans=a.filter((el)=> {
    return el%2!=0 //add if true and doent if false;
})
console.log(ans);

//every 
let b=[1,2,3,4];
let c=b.every((el)=>{
    return el%2==0 //returns only t or f true if all the elements satisfy the condition or false.
})
console.log(c);

///reduce
let d=[1,2,3,4];
let final=d.reduce((res,el)=> { return res+el});
console.log(final);

//spread spreads the array 

let r=[1,2,3,0,-25];
console.log(Math.min(...r));
let e=[...r,...a];  ///spread in array
console.log(e);

///rest opposite of spread it collects all the ele and stores in one array called arguments
let t=[1,2,3,4];
function fi(...args) { 
    return args.reduce((res,ele) =>{
        res+ele
    })
}
console.log(fi);

console.log("----------");
//destructuring
let s= ["tony","peter","banner","steve","thor"];
let [winner,runner,...others]=s; ///stores winnner=s[0] and runner=s[1] and rest in others (rest)
console.log(winner);

//in objects 
const stud={
    name :"sai",
    rollno :"a9",
}

let {name }= stud;  //here name should be match with literal in obj
console.log(name);
//or 
let {name : user }=stud;
console.log(user);