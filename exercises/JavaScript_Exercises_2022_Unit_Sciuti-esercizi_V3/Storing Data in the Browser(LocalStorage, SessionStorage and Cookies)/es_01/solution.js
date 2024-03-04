//******LOCALSTORAGE****************************

const myBtn = document.querySelector('.btn');

function setMyName(username){
    const nameEl = document.querySelector('.title-name')
    nameEl.innerText = username    

}


myBtn.addEventListener('click', () => {
    const inputName = document.querySelector('.firstname')
    const inputEmail = document.querySelector('.email');
    const inputSurname = document.querySelector('.lastname');

    const nameValue = inputName.value;
    const emailValue = inputEmail.value; 
    const surnameValue = inputSurname.value; 
    
    localStorage.setItem('email', emailValue)
    localStorage.setItem('surname', surnameValue)
    localStorage.setItem('name', nameValue)

    setMyName(nameValue)

})

const savedName = localStorage.getItem('name')

setMyName(savedName)



//********SESSIONSTORAGE**********************

const myBtn = document.querySelector('.btn');

function setMyName(username){
    const nameEl = document.querySelector('.title-name')
    nameEl.innerText = username    

}


myBtn.addEventListener('click', () => {
    const inputName = document.querySelector('.firstname')
    const inputEmail = document.querySelector('.email');
    const inputSurname = document.querySelector('.lastname');

    const nameValue = inputName.value;
    const emailValue = inputEmail.value; 
    const surnameValue = inputSurname.value; 
    
    sessionStorage.setItem('email', emailValue)
    sessionStorage.setItem('surname', surnameValue)
    sessionStorage.setItem('name', nameValue)

    setMyName(nameValue)

})

const savedName = sessionStorage.getItem('name')

setMyName(savedName)