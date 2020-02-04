function validateForm() {
    var x=document.forms["myForm"]["name1"].value;
    var Y=document.forms["myForm"]["name2"].value;
    if (x==""&&Y=="") {
      alert("Name must be filled out");
      return false;
    }
  }