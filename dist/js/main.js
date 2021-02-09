// Select DOM elements
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');
const menuNav = document.querySelector('.menu-nav');
const menuPhoto = document.querySelector('.menu-photo');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State of Menu
let showMenu = false;

// Event listener on menu button to toggle menu
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        // If menu is Not shown
        // we want to add show classeses to everythin
        // and then set menuBtn class to close
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuPhoto.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));
    
        // Set Menu State
        showMenu = true;
    } else {
        // If menu is shown
        // we want to removeshow classeses to everythin
        // and then set menuBtn class to show
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuPhoto.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));
    
        // Set Menu State
        showMenu = false;
    }
}
