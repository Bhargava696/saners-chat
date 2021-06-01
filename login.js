function logins(){
    us_name = document.getElementById("username").value;
    localStorage.setItem("username",us_name);
    window.location = "saners.html";
}