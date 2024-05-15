document.getElementById("redirectButton").onclick = function() {
    var form = document.getElementById("reservationForm");

   
    if (form.checkValidity()) {
        window.location.href = "message.html";
    } else {
       
        alert("Please fill out all required fields.");
    }
};