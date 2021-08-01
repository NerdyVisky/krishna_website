let conf = new URLSearchParams(location.search);
            const name = conf.get('name')
            const phone = conf.get('phone')
            const file_case = conf.get('file_case')
            const date = conf.get('date')
            const slot = conf.get('slot')
           
            document.getElementById("name").innerHTML = name === "" ? "xyz" : name;
            document.getElementById("phone").innerHTML = phone === "" ? "1234567890" : phone;
            document.getElementById("case").innerHTML = file_case === "" ? "Newcase" : file_case;
            document.getElementById("date").innerHTML = date === "" ? "01/01/2021" : date;
            document.getElementById("time").innerHTML = slot === "" ? "5PM - 5:30PM" : slot;

            function sendMail(params){
                emailjs.send("service_humtwaz","template_jzz206l",{
                patient_name: name,
                patient_number: phone,
                case: file_case,
                appointment_date: date,
                time_slot: slot,
                })
            
            swal({
                    title: "Appointment Status",
                    text: "SUCCESS! Your Appointment has been successfully booked. Please reach the hospital within the appointed time.",
                    button: "Exit"
                });
                
        }