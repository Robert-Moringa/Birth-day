var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Amaa"];



function calculated(){
    // event.preventDefault();

    var day = parseInt(document.getElementById("Day").value);
    var month = parseInt(document.getElementById("Month").value);
    var year = parseInt(document.getElementById("Year").value);

    const d = new Date(year,month, day);

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    document.getElementById("day").innerHTML = "You were born on a "+ days[d.getDay()];

    document.getElementById("kwasi").innerHTML = "Your Akan Name is " +femaleNames[d.getDay()];
}
calculated();
