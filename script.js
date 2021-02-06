const togglebutton=document.getElementsByClassName('toggle-button')[0];
const navbarContents=document.getElementsByClassName('nav-contents')[0];
const navli=document.querySelectorAll('li')
const nameval=document.getElementById('name')
const emailval=document.getElementById('email')

nameval.addEventListener('keyup',(e)=>{
    console.log()
    if(e.target.value!==''){
      nameval.style.border="1px solid green";
    }
    else{
        nameval.style.border="1px solid red";
    }
})
emailval.addEventListener('keyup',(e)=>{
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(e.target.value.match(mailformat)){
      emailval.style.border="1px solid green";
    }
    else{
        emailval.style.border="1px solid red";
    }
})

togglebutton.addEventListener('click',(e)=>{
    navbarContents.classList.toggle('active')   
})
navli.forEach(nav=>{
    nav.addEventListener('click',()=>{
    navbarContents.classList.toggle('active') 
})
})

