const getDocument = (target) => document.querySelector(target);


const toggleSwitch = getDocument('input[type="checkbox"]');
const nav = getDocument('nav');
const toggleIcon = getDocument('#toggle-icon');
const image1 = getDocument('#image1')
const image2 = getDocument('#image2')
const image3 = getDocument('#image3')
const textBox = getDocument('#text-box');



function toggleDarkLightMode(isLight){
    nav.style.backgroundColor = isLight ?'rgb(0 0 0 / 50%)'  : 'rgb(255 255 255 / 50%)' ;
    textBox.style.backgroundColor = isLight ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = !isLight ? 'Light Mode' : 'Dark Mode';
    !isLight ? toggleIcon.children[1].classList.remove('fa-moon') : toggleIcon.children[1].classList.remove('fa-sun');
    !isLight ? toggleIcon.children[1].classList.add('fa-sun'): toggleIcon.children[1].classList.add('fa-moon');
}

const switchTheme = ({target:{checked}})=>{
    if(checked){
        document.documentElement.setAttribute('data-theme','dark')
        localStorage.setItem('theme','dark');
        toggleDarkLightMode(true)
    }else{
        document.documentElement.setAttribute('data-theme','light')
        localStorage.setItem('theme','light');
        toggleDarkLightMode(false)
    } 
}

toggleSwitch.addEventListener('change',switchTheme)

const theme = localStorage.getItem('theme');
window.onload = ()=>{
    if(theme){
        document.documentElement.setAttribute('data-theme',theme)

        if(theme === "dark"){
            toggleSwitch.checked = true;
            toggleDarkLightMode(true)
        }else{
            toggleSwitch.checked = false;
            toggleDarkLightMode(false)
        }
    }
    
}
