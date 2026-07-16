const form = document.getElementById("forgotForm");

const message = document.getElementById("message");


form.addEventListener("submit", function(event){

    event.preventDefault();


    const email = document.getElementById("email").value;


    if(email){

        message.style.color = "green";

        message.textContent =
        "Password reset link has been sent to your email.";

        form.reset();

    }

    else{

        message.style.color = "red";

        message.textContent =
        "Please enter your email address.";

    }

});