//object literals are collection of properties 
//like (key,value)
const student ={
    rollno : "A9",
    class : "it-b",
    cgpa : [9.2,"1st sem"],


}

//to access inside values 
//syntax is student["rollno"] or student.rollno;
//the key value ie roll no and class cgpa are first converted into strings and then matched to 
//values 
console.log(student.rollno);

//to modify values in objlit
student.cgpa = "9.5";

console.log(student);

//to delete 
delete student.rollno;
console.log(student);

//object of objects
const students={
         smaran :{
            rollno:"a9",
            city:"Hyd",
         },
         abhinav : {
            rollno : "xyz",
            city : "bglr",
         }
}
console.log(students);

console.log(students.smaran.rollno);

//array of objects

const stud =[
{
    rollno: "a9", 
    class : "it-b",
},
{
    rollno:"xyz",city : "bglr",
}


]
console.log(stud[0].class); 