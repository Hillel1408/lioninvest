const navItems = document.querySelectorAll('.header__nav-item');

navItems.forEach((item) => {
    item.addEventListener('click', () => {
        const subMenu = item.querySelector('ul');
        if (subMenu) subMenu.classList.toggle('active');
    });
});

const mobileMenuBtn = document.querySelector('.header__mobile-menu');
const headerNav = document.querySelector('.header__nav');
const modal = document.querySelector('.modal');
mobileMenuBtn.addEventListener('click', () => {
    headerNav.classList.toggle('active');
    document.body.classList.toggle('lock');
    modal.classList.toggle('active');
});

const mobileMenuCloseBtn = document.querySelector('.header__mobile-menu-icon');
mobileMenuCloseBtn.addEventListener('click', () => {
    headerNav.classList.toggle('active');
    document.body.classList.toggle('lock');
    modal.classList.toggle('active');
});
