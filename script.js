function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle('open');
    icon.classList.toggle('open');

}

const back = document.querySelector(".dark_mode")
back.onclick = function toggleDarkMode(event) {
    document.body.classList.toggle("dark_mode")
}