let func = function() {
    console.log("printed after 7 sec");
};

setTimeout(func, 7000);

/// inline function
setTimeout(() => {
    console.log("printed after 4 sec");
}, 4000);

//setinterval prints after every time u give 

let id=setInterval(() => {
    console.log("printed after 4 sec");
}, 4000);
clearInterval(id);