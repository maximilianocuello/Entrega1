function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

const submit = document.getElementById('regBtn');
let password1 = document.getElementById('password1');
let password2 = document.getElementById('password2');


submit.addEventListener("click", function(e){
    let password1 = document.getElementById('password1');
    let password2 = document.getElementById('password2');
    if(password1.value === password2.value){
        showAlertSuccess()
    }
    else{
        showAlertError()
    }
})