//this refers ot current object 
const student = {
   name :"sai",
   rollno :"a9",
   m:99,
   p:98,
   getavg(){
      return (this.m + this.p) / 2;
   }
}

console.log(student.getavg()); // 98.5

//try and catch 

console.log("hello");
try {console.log(a);
} catch{
   console.log("a is not defined");
}
console.log("hello");  // these statements dont print due to prev line showed error 
//to solve this try and catch bascially if else 
console.log("hello");
console.log("hello");


//misc 
//arrow func 
const sum =(a,b)=> {
   console.log(a+b);
}
console.log(sum(2,3));

//function expressions
      let hello = function (){
        console.log(hello);
      }