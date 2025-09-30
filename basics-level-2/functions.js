/*functions are block of code that is used to do 
some action in our code basically reduces the re writing of the code
also scope is same in java  */

//function defination

function print1to5 (){
    for(let i=1;i<=5;i++){
    console.log(i);
    }
}

//function calling 
console.log(print1to5());

//function with arguments

function info(className, section) {
  console.log(`Smaran's ${className} is section ${section}`);
}

info("IT", "B");
//multiplication table 

function table(num){
    for(let i=num;i<=num*10;i=i+num){
        console.log(i);
    }
}
console.log(table(5));

//return 
function sumofn(n){
    let sum=(n*(n+1))/2;
    return sum;
}
console.log(sumofn(10));
//scope
let greet = "hello";

        function changeGreet () {
                    let greet = "namaste";
                console. log (greet) ;
              function innerGreet() {
                     console. log (greet);
              }
            }
           console. log (greet);
      changeGreet ();
                        //function expressions
      let hello = function (){
        console.log(hello);
      }
      //higher order function 
       function multiplegreet(func,cn){
        for(let i=0;i<cn;i++){
            func();
        }
       }



      let greet1=function () {
    console.log("hello");
      }
    console.log(multiplegreet(greet1,2));


    //types of functions 
    console.log("-----------------");

    console.log("type 1");
    function sums(a,b) {
        console.log(a+b);
    }
    console.log(sums(2,3));


    console.log("type 2");

    let sums1=function(a,b){
      console.log(a+b);
    }
    console.log(sums(2,3));



    console.log("type 3");

    //arrow function
    const sums2=(a,b) =>{
      console.log(a+b);
    }
  console.log(sums(2,3));
