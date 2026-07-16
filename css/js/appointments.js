
const modal = document.getElementById("appointmentModal");


function openAppointmentForm(){

    modal.style.display="flex";

}



function closeAppointmentForm(){

    modal.style.display="none";

}




function addAppointment(){

    let patient = document.getElementById("patientName").value;
    let department = document.getElementById("department").value;
    let doctor = document.getElementById("doctor").value;
    let date = document.getElementById("appointmentDate").value;
    let time = document.getElementById("appointmentTime").value;


    if(patient==="" || department==="" || doctor===""){
        alert("Please fill all details");
        return;
    }



    let container=document.querySelector(".appointment-container");


    let card=document.createElement("div");

    card.className="appointment-card";


    card.innerHTML=`

    <div class="patient-info">

        <h3>${patient}</h3>

        <p>🩺 ${department}</p>

        <p>👨‍⚕️ ${doctor}</p>

    </div>


    <div class="date">

        <h4>${date}</h4>

        <p>${time}</p>

    </div>


    <span class="status pending">
        Pending
    </span>


    <button class="view-btn" onclick="viewAppointment('${patient}')">
        View
    </button>

    `;


    container.appendChild(card);


    closeAppointmentForm();


    alert("Appointment successfully added!");

}





function viewAppointment(patient){

    alert(
        "Appointment Details\n\nPatient: "
        + patient
        + "\nStatus: Pending"
    );

}