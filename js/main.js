let form = document.querySelector("form");
let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let email = document.getElementById("email");
let pass = document.getElementById("password");
console.log(fname);
form.addEventListener("submit", (e) => {
    e.preventDefault();

    let firstNameValue = fname.value.trim();
    let lastNameValue = lname.value.trim();
    let emailValue = email.value.trim();
    let passValue = pass.value.trim();

    if (firstNameValue === '') {
        addErrorTo(fname, 'First Name can not be empty');
    } else {
        removeErrorFrom(fname);
    }

    if (lastNameValue === '') {
        addErrorTo(lname, 'Last Name can not be empty');
    } else {
        removeErrorFrom(lname);
    }

    if (emailValue === '' || !validateEmail(emailValue)) {
        addErrorTo(email, 'Look like this is not an email');
    } else {
        removeErrorFrom(email);
    }

    if (passValue === '') {
        addErrorTo(pass, 'Password can not be empty');
    } else {
        removeErrorFrom(pass);
    }

});

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function addErrorTo(field, message) {
    let small = field.parentNode.querySelector('small');
    let icon = field.parentNode.querySelector('.error-icon');
    field.classList.add("error");
    small.innerHTML = message;
    small.style.display = 'block';
    icon.style.display = 'block';
}

function removeErrorFrom(field) {
    let small = field.parentNode.querySelector('small');
    let icon = field.parentNode.querySelector('.error-icon');
    field.classList.remove("error");
    small.style.display = 'none';
    icon.style.display = 'none';
}