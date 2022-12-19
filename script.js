let password = "Open Sesame";
let id = "1234";

$(".submit-word").click(function() {
    let passwordInput = $(".password").val();
    if (passwordInput === password) {
        alert("Password accepted");
    } else {
        alert("Incorrect password");
    }
    
    let idInput = $(".id_code").val();
    if (idInput === id) {
        alert("Password accepted");
    } else {
        alert("Incorrect password");
    }
});