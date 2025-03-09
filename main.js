document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a'); // Visas saites navigācijā

    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active'); // Klases pievienošana aktīvajai cilnei
        }
    });
});
