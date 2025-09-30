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

