const addDoctor = document.getElementById("addDoctor");

const modal = document.getElementById("modal");

const cancel = document.getElementById("cancel");

const save = document.getElementById("save");

const doctorList = document.getElementById("doctorList");



addDoctor.onclick = ()=>{

modal.style.display="flex";

};



cancel.onclick = ()=>{

modal.style.display="none";

};



save.onclick = ()=>{


let name=document.getElementById("doctorName").value;

let speciality=document.getElementById("speciality").value;

let department=document.getElementById("department").value;

let phone=document.getElementById("phone").value;



if(name=="" || speciality==""){

alert("Please enter doctor details");

return;

}



let card = `

<div class="doctor-card">


<img src="https://i.pravatar.cc/150">


<div class="doctor-info">


<h2>${name}</h2>


<p class="speciality">

${speciality}

</p>


<p>
📞 ${phone}
</p>


<p>
🏥 ${department}
</p>


<span class="available">

Available

</span>


<button class="profile">

View Profile

</button>


</div>


</div>

`;



doctorList.innerHTML += card;


modal.style.display="none";


};





// Search doctor

document.getElementById("search")
.addEventListener("keyup",function(){


let text=this.value.toLowerCase();


document.querySelectorAll(".doctor-card")
.forEach(card=>{


let name=card.querySelector("h2")
.textContent.toLowerCase();


card.style.display =
name.includes(text) ? "flex":"none";


});


});