// menuHam.js
const header = document.querySelector("header#header");
const menuHamburger = document.querySelector(".menu_hamburger");
const liens = header.querySelectorAll('a');

menuHamburger.addEventListener('click', () => {
    header.classList.toggle('menu_hamburger_active');

    if (header.classList.contains('menu_hamburger_active')) {
        menuHamburger.style.color = "var(--color-blanc)";
        document.body.style.overflow = "hidden";
    }
    else {
        menuHamburger.style.color = "var(--color-primaire)";
        document.body.style.overflowY = "auto";
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