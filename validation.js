function Day(getdate) {
    var selectedDate = new Date(getdate);
    var dateformat = getdate.split('-')
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    if(!(days[selectedDate.getDay()]=="Tuesday" || days[selectedDate.getDay()]=="Friday")){ 
        alert("Please enter date corresponding to Tuesday or Friday")
        document.getElementById("date").value= "";
    }
}
let file="";
function CaseFile(){
    
    var x = document.getElementsByName('file_case');
    if(x[0].checked)
        file= x[0];
    else
        file= x[1];
    details();
}

function details() {
    var name=document.forms["Form"]["name"];
    var phone=document.forms["Form"]["phone"];
    var date=document.forms["Form"]["date"];
    var slot=document.forms["Form"]["slot"];
    var file_case;
    CaseFile();
    file_case=file;
}