function sendMail(params){
    
    
    emailjs.send("service_yx7a0qc","template_ewqq18g",{
        patient_name: document.getElementById("name").value,
        patient_number: document.getElementById("phone").value,
        appointment_date: document.getElementById("date").value,
        time_slot: document.getElementById("timeslot").value,
        })
        alert("Your appointment booking is sucessfull!");
}