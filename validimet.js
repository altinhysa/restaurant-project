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

    
    if(validatePassword(password.value) !== true){
        alert("Password should contain symbols")
    }

    if(arePasswordsSame(password.value, password2.value) == false){
        alert("Passwords are not the same")
    }
});

function validatePassword(password) {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return passwordRegex.test(password);
  }

function arePasswordsSame(password1, password2) {
    return password1 === password2;
  }
  
  

//   function highlightEmptyInputs() {
//     const inputs = document.querySelectorAll("input");
//     inputs.forEach(input => {
//       if (input.value === "") {
//         input.style.borderColor = "red";
//       }
//     });
//   }
  