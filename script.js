const togglebutton=document.getElementsByClassName('toggle-button')[0];
const navbarContents=document.getElementsByClassName('nav-contents')[0];
const navli=document.querySelectorAll('li')

togglebutton.addEventListener('click',()=>{
    navbarContents.classList.toggle('active')
    
})
navli.forEach(nav=>{
    nav.addEventListener('click',()=>{
    navbarContents.classList.toggle('active') 
})
})

