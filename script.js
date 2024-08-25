const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('confirm_psd');
const mobileNumber = document.getElementById('mobile');
const form = document.getElementById('form');
const nameError = document.getElementById('name_error')
const emailError = document.getElementById('email_error');
const passwordError = document.getElementById('password_error');
const confirmationError = document.getElementById('confirmation_error');
const numberError = document.getElementById('number_error');


form.addEventListener('submit', (e)=>{
    const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(name.value === '' || name.value == null ){
        e.preventDefault();
        nameError.innerHTML = 'Name is required'
    }else{
        nameError.innerHTML = ''
    }
    if(name.value.length <6){
        e.preventDefault();
        nameError.innerHTML = 'Name should contain atleast 5 characters'
    }else{
        nameError.innerHTML = ''
    }
    if(!email.value.match(emailCheck)){
        e.preventDefault();
        emailError.innerHTML = 'Email is invalid';
    }else{
        emailError.innerHTML = '';
    }
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!passwordRegex.test(password.value)) {
        passwordError.innerHTML = 'Password should contain at least one uppercase letter, one number, and one special character';
        isValid = false;
    } else if (password.value.length < 8) {
        passwordError.innerHTML = 'Password should be at least 8 characters long';
        isValid = false;
    } else {
        passwordError.innerHTML = '';
    }
    
    if(password.value !== passwordConfirmation.value){
        e.preventDefault();
        confirmationError.innerHTML = 'Password not matching';
    }else{
        confirmationError.innerHTML = '';
    }
    if (mobileNumber.value !== '') {
        if (isNaN(mobileNumber.value)) {
            numberError.innerHTML = "Mobile number should contain only digits";
            isValid = false;
        } else if (mobileNumber.value.length !== 10) {
            numberError.innerHTML = 'Mobile number should be exactly 10 digits long';
            isValid = false;
        } else {
            numberError.innerHTML = '';
        }
    } else {
        numberError.innerHTML = '';  // Clear any previous error messages
    }
    
})

// const name = document.getElementById('name');
// const email = document.getElementById('email');
// const password = document.getElementById('password');
// const passwordConfirmation = document.getElementById('confirm_psd');
// const mobileNumber = document.getElementById('mobile');
// const form = document.getElementById('form');

// const nameError = document.getElementById('name_error');
// const emailError = document.getElementById('email_error');
// const passwordError = document.getElementById('password_error');
// const confirmationError = document.getElementById('confirmation_error');
// const numberError = document.getElementById('number_error');

// form.addEventListener('submit', (e) => {
//     let isValid = true;  // Track overall form validity

//     // Email validation
//     const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!email.value.match(emailCheck)) {
//         emailError.innerHTML = 'Invalid email format';
//         isValid = false;
//     } else {
//         emailError.innerHTML = '';
//     }

//     // Name validation
//     if (name.value === '' || name.value == null) {
//         nameError.innerHTML = 'Name is required';
//         isValid = false;
//     } else if (name.value.length < 6) {
//         nameError.innerHTML = 'Name should contain at least 5 characters';
//         isValid = false;
//     } else {
//         nameError.innerHTML = '';
//     }

//     // Password validation
//     const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
//     if (!passwordRegex.test(password.value)) {
//         passwordError.innerHTML = 'Password should contain at least one uppercase letter, one number, and one special character';
//         isValid = false;
//     } else if (password.value.length < 8) {
//         passwordError.innerHTML = 'Password should be at least 8 characters long';
//         isValid = false;
//     } else {
//         passwordError.innerHTML = '';
//     }

//     // Password confirmation validation
//     if (password.value !== passwordConfirmation.value) {
//         confirmationError.innerHTML = 'Passwords do not match';
//         isValid = false;
//     } else {
//         confirmationError.innerHTML = '';
//     }

//     // Mobile number validation
//     if (isNaN(mobileNumber.value)) {
//         numberError.innerHTML = "Mobile number should contain only digits";
//         isValid = false;
//     } else if (mobileNumber.value.length !== 10) {
//         numberError.innerHTML = 'Mobile number should be exactly 10 digits long';
//         isValid = false;
//     } else {
//         numberError.innerHTML = '';
//     }

//     // Prevent form submission if there are validation errors
//     if (!isValid) {
//         e.preventDefault();
//     }
// });
