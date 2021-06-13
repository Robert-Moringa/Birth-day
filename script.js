var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Amaa"];



function calculated(){
    // event.preventDefault();

    var day = parseInt(document.getElementById("Day").value);
    var month = parseInt(document.getElementById("Month").value);
    var year = parseInt(document.getElementById("Year").value);

    const d = new Date(year,month, day);

    const months = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    document.getElementById("day").innerHTML = "You were born on a "+ months[d.getMonth()];

    document.getElementById("kwasi").innerHTML = "Your Akan Name" +femaleNames[d.getDay()];
}