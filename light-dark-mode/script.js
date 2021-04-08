const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.querySelector('nav');
const toggleIcon = document.querySelector('#toggle-icon');
const image1 = document.querySelector('#image1')
const image2 = document.querySelector('#image2')
const image3 = document.querySelector('#image3')
const textBox = document.querySelector('#text-box');

function darkMode(){
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.remove('fa-sun');
    toggleIcon.children[1].classList.add('fa-moon');
    image1.src = 'img/undraw_conceptual_idea_dark.svg'
}

function lightMode(){
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.remove('fa-moon');
    toggleIcon.children[1].classList.add('fa-sun');
}


const switchTheme = ({target:{checked}})=>{
    if(checked){
        document.documentElement.setAttribute('data-theme','dark')
        localStorage.setItem('theme','dark');
        darkMode()
    }else{
        document.documentElement.setAttribute('data-theme','light')
        localStorage.setItem('theme','light');
        lightMode()
    } 
}

toggleSwitch.addEventListener('change',switchTheme)

const theme = localStorage.getItem('theme');
window.onload = ()=>{
    if(theme){
        document.documentElement.setAttribute('data-theme',theme)

        if(theme === "dark"){
            toggleSwitch.checked = true;
            darkMode();
        }else{
            toggleSwitch.checked = false;
            lightMode();
        }
    }
    
}
