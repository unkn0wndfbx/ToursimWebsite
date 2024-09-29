// menuHam.js
const header = document.querySelector("header#header");
const menuHamburger = document.querySelector(".menu_hamburger");
const liens = header.querySelectorAll('a');
const musicController = document.getElementById('music_control');

menuHamburger.addEventListener('click', () => {
    header.classList.toggle('menu_hamburger_active');

    if (header.classList.contains('menu_hamburger_active')) {
        menuHamburger.style.color = "var(--color-blanc)";
        document.body.style.overflow = "hidden";
        musicController.style.display = "flex";
    }
    else {
        menuHamburger.style.color = "var(--color-primaire)";
        document.body.style.overflowY = "auto";
        musicController.style.display = "none";
    }
})

liens.forEach(liens => {
    liens.addEventListener('click', () => {
        if (header.classList.contains('menu_hamburger_active')) {
            header.classList.remove('menu_hamburger_active');
            menuHamburger.style.color = "var(--color-primaire)";
            document.body.style.overflowY = "auto";
        }
    })
})