document.addEventListener('DOMContentLoaded', function () {
    const toggleMenuButton = document.querySelector('.toggle-menu');
    const navList = document.querySelector('.nav-list');

    toggleMenuButton.addEventListener('click', function () {
        navList.classList.toggle('active');
    });
});
