



function calculated(){
    // event.preventDefault();

    var day = parseInt(document.getElementById("Day").value);
    var m = parseInt(document.getElementById("Month").value);
    var month = m-1;
    var year = parseInt(document.getElementById("Year").value);

    if (day<1 || day>31){
      alert("The day you entered is not logic. Enter a valid day.");
      return false;
    } else if(month>11 || month<0){
      alert("Hey, you just made an error. Give it another try with a valid month.");
      return false;
    };
  
    const d = new Date(year,month, day);

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    document.getElementById("day").innerHTML = "You were born on a "+ days[d.getDay()];

    if (document.getElementById("gender").checked){
      var choice = 'male';
      }
     else {
      var choice = 'female';
      }
      
    if (choice=== 'male'){
      var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

      document.getElementById("kwasi").innerHTML = "Your Akan Name is " +maleNames[d.getDay()];

    } else if(choice=== 'female'){
      var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Amaa"];

      document.getElementById("kwasi").innerHTML = "Your Akan Name is " +femaleNames[d.getDay()];
    } else{
      document.getElementById("kwasi").innerHTML = "Kindly select a your gender";
    }

    
        
}
calculated();

function validateForm(){
  var v = parseInt(document.getElementById("Day").value);
  if (v == 0 && v>31) {
    alert("Invalid date");
    return false;
  }
}
validateForm();
