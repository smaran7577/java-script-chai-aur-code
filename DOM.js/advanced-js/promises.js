//promises 
function savetodb(data){
 return new Promise((resolve, retract) => {
          let no = Math.floor(Math.random()*10 )+1;
   if(no>5){
    resolve("resolved");
    console.log("ok");
   }
   else {
   retract("try next time");
   }

 });
}
