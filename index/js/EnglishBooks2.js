let navbarOpen = false;
function toggleNavbar() {
    const navbar = document.getElementById('navbar');
    const navbarIcon = document.querySelector('.navbar-icon i');
    const closeIcon = document.querySelector('.close-icon');

    navbarOpen = !navbarOpen;

    if (navbarOpen) {
        navbar.classList.add('show');
        navbarIcon.classList.remove('fa-bars');
        navbarIcon.classList.add('fa-times');
    } else {
        navbar.classList.remove('show');
        navbarIcon.classList.remove('fa-times');
        navbarIcon.classList.add('fa-bars');
    }
}

function closeNavbar() {
    const navbar = document.getElementById('navbar');
    const navbarIcon = document.querySelector('.navbar-icon i');

    navbarOpen = false;

    navbar.classList.remove('show');
    navbarIcon.classList.remove('fa-times');
    navbarIcon.classList.add('fa-bars');
}
