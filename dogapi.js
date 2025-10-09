

let bt= document.querySelector("#btn");
let url="https://dog.ceo/api/breeds/image/random";




bt.addEventListener("click",async ()=>{
 let link = await getimage(); //image url stored in link
 let img= document.querySelector("#result");
 img.setAttribute("src",link); //image url converts into image in the image html.


});

async function getimage(){
try {
    let res=await axios.get(url); //data extraction
    return res.data.message; //getting the image from the data
} catch(e){
    console.log("error -",e);
    return "/";
}

}