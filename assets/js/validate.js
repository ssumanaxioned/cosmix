var fname = document.getElementById('name');
var email = document.getElementById('email');
var sub = document.getElementById('subject');
var msg = document.getElementById('msg');
var form = document.getElementById('contact-form');
var letter = /^[a-zA-Z ]{2,30}$/;

fname.addEventListener('input', textval);
email.addEventListener('input', emailval);
sub.addEventListener('input', subval);
msg.addEventListener('input', msgval);
form.addEventListener('submit', validation);

function textval(){
    if(fname.value.length > 3 && fname.value.match(letter)){
        document.querySelector('.n-error').classList.add('hide');
        return true;
    }
    else{
        document.querySelector('.n-error').innerText = "*Please enter your proper name."
        document.querySelector('.n-error').classList.remove('hide');
        return false;
    }
}

function emailval(){
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        document.querySelector('.e-error').classList.add('hide');
        return true;
    }else{
        document.querySelector('.e-error').innerText = "*Please enter a proper email";
        document.querySelector('.e-error').classList.remove('hide');
        return false;
    }
}

function subval() {
    if(sub.value.length > 3 && sub.value.match(letter)){
        document.querySelector('.s-error').classList.add('hide');
        return true;
    }
    else{
        document.querySelector('.s-error').innerText = "*Please enter subject."
        document.querySelector('.s-error').classList.remove('hide');
        return false;
    }
}

function msgval() {
    if(msg.value.length < 5){
        document.querySelector('.m-error').innerText = "*Please write something";
        document.querySelector('.m-error').classList.remove('hide');
        return false;
    }else{
        document.querySelector('.m-error').classList.add('hide');
        return true;
    }
}

function validation(e) {
    if(textval() === false || emailval() === false || subval() === false || msgval() === false) {
        e.preventDefault();
    }
}