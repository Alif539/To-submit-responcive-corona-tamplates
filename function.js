let burger = document.querySelector('.burger') 
let navArea = document.querySelector ('.navArea')
let navMenu = document.querySelector('.navMenu')
let containerBtn = document.querySelector('.containerBtn ')
burger.addEventListener('click',()=>{
    navArea.classList.toggle('navAreaToggle');
    navMenu.classList.toggle('navMenuOn');
    containerBtn.classList.toggle('containerBtnOn');
})