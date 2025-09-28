let mixedarray=["hello",54,'h'];
console.log(mixedarray);

//push and pop
 mixedarray.push("olaa");
console.log(mixedarray);
mixedarray.pop("olaa");
console.log(mixedarray);


//indexOf and includes
console.log(mixedarray.indexOf(54));
console.log(mixedarray.includes("olaa"));


//// concatination and reverse 
let w= [23,23,22];
let e=[24,24,24];
console.log(w.concat(e));
console.log(w.reverse());


///slice gets required part of the array 
 let r=[1,2,3,4,5];
 console.log(r.slice(2,4));

 //splice array modification 
 //splice returns deteleted elements 
 console.log(r.splice(2));
 console.log(r.splice(1,3,45,35));
 console.log(r);

 //sort
 //doesnt work always like stringds due to it 
 //converts numbers to strings first and then sort so
 r=r.sort();
 console.log(r.sort());

 //array references 
 // [1]==[1] returns falses due to address is different.
 let arr=[1,2,3];
 let arrcopy=arr;
 //here if you change arr then arrcopy also changes 
 //since arrcopy and arr have same adress so...
 arr.push(10);
 console.log(arrcopy);
 arrcopy.pop(2);
 console.log(arr);

 //const array
 const ar=[1,2,3,4];
  ar.pop();
  
 ar.push(10);

 console.log(ar);