function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

const submit = document.getElementById('regBtn');


submit.addEventListener("click", function(e){
    let p1 = document.getElementById('password1').value;
    let p2 = document.getElementById('password2').value;
    let checkbox = document.getElementById('terminos');
    if(p1.length >= 6 && p1 === p2 && checkbox.checked){  
        showAlertSuccess()
    }
    else{
        showAlertError()
    }
    console.log(checkbox.checked)
})