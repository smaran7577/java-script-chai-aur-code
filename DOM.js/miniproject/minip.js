let btn= document.querySelector("button");
let ul= document.querySelector("ul");
let inp= document.querySelector("input");

btn.addEventListener("click",function(){
    let item = document.createElement("li");
    let dlt = document.createElement("button");
    dlt.classList.add("dlt");
    dlt.innerText = "Delete"
    item.innerText = inp.value;
    ul.appendChild(item);
    item.appendChild(dlt)
    inp.value = "";





})

ul.addEventListener("click", function(event){
    if (event.target.nodeName == "BUTTON"){
        let deleted = event.target.parentElement;
        deleted.remove();
        console.log("Deleted!")
    }
}); 