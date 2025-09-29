//to gen random no from 1 to 100
//step1 
let step1=Math.random(); //[0 to 1}
let step2 =step1*100;
let step3=Math.floor(step2);
let step4=step3+1;
console.log(step4);

//one liner
let ran= Math.floor(Math.random()*100)+1;
console.log(ran);
