let count = 0;

let target = 230;

let patients = document.getElementById("patients");


let timer=setInterval(()=>{

count++;

patients.textContent=count;


if(count===target){

clearInterval(timer);

}


},5);