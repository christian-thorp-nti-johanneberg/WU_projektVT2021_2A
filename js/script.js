const burger = document.querySelector('.burger')
const nav = document.querySelector('.nav-links')

function toggleMenu() {
    nav.classList.toggle('nav-active')
    burger.classList.toggle('toggle')
}

document.querySelector('.burger').addEventListener('click', toggleMenu)