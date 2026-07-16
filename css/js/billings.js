let invoices=[];

let invoiceNumber=1001;



function createInvoice(){


let patient=document.getElementById("patient").value;

let patientID=document.getElementById("patientID").value;

let service=document.getElementById("service").value;

let amount=document.getElementById("amount").value;



if(patient==="" || patientID==="" || amount===""){

alert("Please complete patient details");

return;

}



let invoice={


number:invoiceNumber++,

patient:patient,

id:patientID,

service:service,

amount:amount,

status:"Pending"


};



invoices.push(invoice);


displayInvoices();


clearForm();


}





function displayInvoices(data=invoices){


let table=document.getElementById("invoiceTable");


table.innerHTML="";



data.forEach((invoice,index)=>{


table.innerHTML+=`

<tr>

<td>
INV-${invoice.number}
</td>


<td>
${invoice.patient}
</td>


<td>
${invoice.service}
</td>


<td>
$${invoice.amount}
</td>



<td>

<span 
class="status ${invoice.status.toLowerCase()}"
onclick="changeStatus(${index})">

${invoice.status}

</span>


</td>



<td>

<button 
class="delete"
onclick="deleteInvoice(${index})">

Delete

</button>


</td>


</tr>


`;


});


document.getElementById("invoiceCount").innerText=invoices.length;


}






function changeStatus(index){


if(invoices[index].status==="Pending"){

invoices[index].status="Paid";

}

else{

invoices[index].status="Pending";

}


displayInvoices();

}






function deleteInvoice(index){


invoices.splice(index,1);

displayInvoices();


}





function searchInvoice(){


let text=document
.getElementById("search")
.value
.toLowerCase();



let result=invoices.filter(item=>

item.patient.toLowerCase()
.includes(text)

);



displayInvoices(result);


}





function clearForm(){


document.getElementById("patient").value="";

document.getElementById("patientID").value="";

document.getElementById("amount").value="";


}