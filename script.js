var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Amaa"];



function calculated(){
    // event.preventDefault();

    var day = parseInt(document.getElementById("Day").value);
    var month = parseInt(document.getElementById("Month").value);
    var year = parseInt(document.getElementById("Year").value);

    const d = new Date(year,month, day);

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var x = document.getElementById("inputGender").value;

    document.getElementById("day").innerHTML = "You were born on a "+ days[d.getDay()];

    if (x="Male"){
      document.getElementById("kwasi").innerHTML = "Your Akan Name is " +maleNames[d.getDay()];
    }
    else if(x="Female") {
      document.getElementById("kwasi").innerHTML = "Your Akan Name is " +femaleNames[d.getDay()];
    }
    else{
      document.getElementById("kwasi").innerHTML = "Kindly select a your gender";
    }

}
calculated();