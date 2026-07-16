const saveBtn = document.getElementById("saveBtn");


saveBtn.addEventListener("click",()=>{


saveBtn.textContent="Saving...";


setTimeout(()=>{


saveBtn.textContent="✓ Changes Saved";


},1000);



});





const securityBtn =
document.getElementById("securityBtn");


securityBtn.addEventListener("click",()=>{


if(securityBtn.textContent==="Enable"){

securityBtn.textContent="Enabled";
securityBtn.style.background="#16a34a";


}

else{

securityBtn.textContent="Enable";
securityBtn.style.background="#10b981";

}


});