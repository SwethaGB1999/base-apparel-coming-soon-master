
// const regx= /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/
const regx=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
document.querySelector('button').addEventListener("click",function validateEmail(){
    const inputElement=document.getElementById('email-field');
    let email=inputElement.value;
    if(regx.test(email)){
        alert('You have provided a valid email id.');
    }else{    
        let valElement=document.querySelector('.validity');
        valElement.classList.remove('hide');
        document.querySelector('input').style.borderColor='red';
        document.querySelector('.error').classList.remove('hide');
    }
});