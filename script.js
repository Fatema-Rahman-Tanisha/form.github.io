console.log('form');
var emailReg = /[a-z]+\w+@[gmail || hotmail || yahoo]+\.com/g;
var usernameReg = /^[a-z]+\d+/g;
var passReg = /\w+[*&^%$#@!]+/g;

form.addEventListener('submit',(e)=>{
    e.preventDefault()
usernameStr = document.getElementById('username').value;
emailStr = document.getElementById('email').value;
passwordStr = document.getElementById('password').value; 
if (usernameStr.match(usernameReg)==null) {
    alert('please change your username !');
}
else if (emailStr.match(emailReg)==null) {
    alert('please change your email address !');
}
else if (passwordStr.match(passReg)==null) {
    alert('please change your password !');
}
else{
    alert(`Congratulations ${usernameStr} !! your form has been successfully submited `)
}
})