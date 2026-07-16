const addBtn = document.getElementById("addPatientBtn");

const modal = document.getElementById("patientModal");

const closeBtn = document.getElementById("closeModal");

const saveBtn = document.getElementById("savePatient");

const table = document.getElementById("patientTable");



// Open modal

addBtn.onclick = () => {

    modal.style.display="flex";

};



// Close modal

closeBtn.onclick = () => {

    modal.style.display="none";

};



// Add patient

saveBtn.onclick = () => {


    let name = document.getElementById("name").value;

    let age = document.getElementById("age").value;

    let gender = document.getElementById("gender").value;

    let phone = document.getElementById("phone").value;



    if(name=="" || age=="" || gender==""){

        alert("Please fill patient details");

        return;

    }



    let row = `

    <tr>

    <td>#003</td>

    <td>${name}</td>

    <td>${age}</td>

    <td>${gender}</td>

    <td>${phone}</td>

    <td>

    <span class="status active-status">

    Active

    </span>

    </td>

    <td>

    <button class="view">

    View

    </button>

    </td>

    </tr>

    `;



    table.innerHTML += row;


    modal.style.display="none";


};



// Search patients

document.getElementById("searchInput")
.addEventListener("keyup",function(){


let value=this.value.toLowerCase();


let rows=document.querySelectorAll("#patientTable tr");


rows.forEach(row=>{


let name=row.children[1].textContent.toLowerCase();


if(name.includes(value)){

    row.style.display="";

}

else{

    row.style.display="none";

}


});


});