



function calculated(){
    event.preventDefault();

    var day = parseInt(document.getElementById("Day").value);
    var m = parseInt(document.getElementById("Month").value);
    var month = m-1;
    var year = parseInt(document.getElementById("Year").value);

    const d = new Date(year,month, day);

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var x = document.getElementById("inputGender").value;

    document.getElementById("day").innerHTML = "You were born on a "+ days[d.getDay()];

    if (x="Male"){
      var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

      document.getElementById("kwasi").innerHTML = "Your Akan Name is " +maleNames[d.getDay()];

    } else if(x="Female"){
      var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Amaa"];

      document.getElementById("kwasi").innerHTML = "Your Akan Name is " +x;
    } else{
      document.getElementById("kwasi").innerHTML = "Kindly select a your gender";
    }

    function validateForm() {
        var v = parseInt(document.getElementById("Day").value);
        var mn = parseInt(document.getElementById("Month").value);
        var yr = parseInt(document.getElementById("Year").value);
        if (v == 0 && v>31, mn == 0 && mn>12, yr == 0) {
          alert("Invalid date");
          return false;
        }

    
}



