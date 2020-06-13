

function generalcheck() {
  var general = document.getElementById("generalpassword").value;
  var text;
    if (general === "westMEC") {
        location.href = "nationalids/sessionportal.html";
    }else {
      text = "Incorrect password, try again!";
    }
    document.getElementById("invalidpassword").innerHTML = text;
  }

function sessioncheck(){
  var sessionpassword = document.getElementById("sessionpassword").value;
  var text;
  if (sessionpassword === "y1session1WM") {
    location.href = "loggedins1y1.html";
  }else if (sessionpassword === "y1session2WMCC") {
    location.href = "loggedins2y1t5.html"
  }else if (sessionpassword === "y2session2WMCC") {
    location.href = "loggedins1y2.html"
  }else if (sessionpassword === "y2session2WMCC") {
    location.href = "loggedins2y2t5.html"
  }else {
    text = "Incorrect password, try again!";
  }
document.getElementById("invalidpassword").innerHTML = text;
}



  
