const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const CLASS_HIDDEN = "hidden";
const USERNAME_KEY = "username";

function submitLogin(event){
    event.preventDefault();
    localStorage.setItem(USERNAME_KEY,loginInput.value);
    loginForm.classList.add(CLASS_HIDDEN);
    paintUsername();
}
function paintUsername(){
    const username = localStorage.getItem(USERNAME_KEY);   
    greeting.innerText = `안녕하세요? ${username}님`;
    greeting.classList.remove(CLASS_HIDDEN);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername === null){
    loginForm.classList.remove(CLASS_HIDDEN);
    loginForm.addEventListener("submit",submitLogin);
}
else{
    paintUsername();
}
