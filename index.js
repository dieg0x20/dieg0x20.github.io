const url = "https://api.github.com/users/dieg0x20";
const res = document.getElementById("profile");

fetch(url)
    .then(response => response.json())
    .then(data => {
        res.innerHTML += `
            <img src="${data.avatar_url}" alt="avatar">
            <h1>Diego_dev</h1>
        `;
    })
    .catch(error => console.error('Error fetching data:', error));

document.addEventListener('DOMContentLoaded', function () {
    const toggleMenuButton = document.querySelector('.toggle-menu');
    const navList = document.querySelector('.nav-list');

    toggleMenuButton.addEventListener('click', function () {
        navList.classList.toggle('active');
    });
});
