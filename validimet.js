let name = document.getElementById('name');
let surname = document.getElementById('surname');
let number = document.getElementById('number');
let email = document.getElementById('email');
let password = document.getElementById('password');
let password2 = document.getElementById('password2');
let button = document.getElementById('sign');


button.addEventListener("click", function(){
    if(name.value === ""){
        name.style.border = "1px solid red";
    }
    if(surname.value === ""){
        surname.style.border = "1px solid red";
    }
    if(number.value === ""){
        number.style.border = "1px solid red";
    }
    if(email.value === ""){
        email.style.border = "1px solid red";
    }
    if(password.value === ""){
        password.style.border = "1px solid red";
    }
    if(password2.value === ""){
        password2.style.border = "1px solid red";
    }

    
});

