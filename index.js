let input=document.querySelector(".input1");
let img1=document.querySelector("img");
let btn=document.querySelector(".btn");
let qrimg=document.querySelector(".qrimg");
let container=document.querySelector(".container");
let prevInput;


btn.addEventListener("click", function(){
    let inputE1=input.value.trim();

    if(!inputE1 || inputE1 ===prevInput){
        alert("Enter text");
    }
    else{
        prevInput=inputE1;
        btn.innerHTML="Generating QR Code.....";
        img1.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputE1}`;
        console.log(qrimg);
        img1.onload=function(){
           img1.style.height="160px";
           img1.style.width="240px";
           qrimg.style.margin="50px";
           container.style.height="600px";
           img1.style.border="1px solid violet";
            img1.style.padding="40px";
            qrimg.style.display="flex";
            qrimg.style.justifyContent="center";
            qrimg.style.alignItems="center"
            btn.innerHTML="Generate QR Code";
            console.log(this)
        }
        
    }
})