// Clear the form fields
//  usernameInput.value = "";
//  mailInput.value = "";
//  selectedAvatar.checked = false;
function clearInput(){
    var usernameInput = document.getElementById("username").value="";
    var mailInput = document.getElementById("mail").value="";
    var selectedAvatar = document.querySelector('input[name="avatar"]'.checked =false);

}

function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function validate() {
  var username = document.getElementById("username").value;
  var mail = document.getElementById("mail").value;
  var selectedAvatar = document.querySelector('input[name="avatar"]:checked');
  
  // Email validation regex
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (username && emailRegex.test(mail) && selectedAvatar) {
    // Save username, email, and selected avatar in cookies
    setCookie("username", username, 30);
    setCookie("email", mail, 30);
    setCookie("selectedAvatar", selectedAvatar.value, 30);

    // Redirect to another page (replace 'page2.html' with the desired page)
    window.location.href = "page2.html";

  
  } 
  else  {
    // Handle validation errors
    document.getElementById("emailError").innerText = "";
      "Please fill in all fields correctly and choose an avatar.";
   
  }
}

  
// // Clear the form fields
// usernameInput.value = "";
// mailInput.value = "";
// selectedAvatar.checked = false;
// Check for previously entered data and set it
window.onload = function () {
  var storedUsername = getCookie("username");
  var storedEmail = getCookie("email");
  var storedAvatar = getCookie("selectedAvatar");

  if (storedUsername) {
    document.getElementById("username").value = storedUsername;
  }

  if (storedEmail) {
    document.getElementById("mail").value = storedEmail;
  }

  if (storedAvatar) {
    document.getElementById(storedAvatar).checked = true;
  }
};
