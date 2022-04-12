const menu = document.querySelector('#menu-itens');
const drop = document.querySelector('.close');
function dropBox(){
    const mobile = document.querySelector('#mobile')
    const body = document.querySelector('body');
    mobile.classList.toggle('hide');
    body.classList.toggle('body');
}
function mobileClose(){
    const mobile = document.querySelector('#mobile')
    const body = document.querySelector('body');
    mobile.classList.toggle('hide');
    body.classList.toggle('body');
}

menu.addEventListener("click",dropBox)
drop.addEventListener("click",mobileClose)