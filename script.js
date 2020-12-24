const togglebutton=document.getElementsByClassName('toggle-button')[0];
const navbarContents=document.getElementsByClassName('nav-contents')[0];
togglebutton.addEventListener('click',()=>{
    navbarContents.classList.toggle('active')
})
