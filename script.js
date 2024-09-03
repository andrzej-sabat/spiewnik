document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('menuToggle');
    var menu = document.getElementById('menu');
    var body = document.body;

    menuToggle.addEventListener('click', function() {
        body.classList.toggle('menu-open');
    });

    // Zamknięcie menu po kliknięciu poza jego obszarem
    document.addEventListener('click', function(event) {
        if (body.classList.contains('menu-open') && !menu.contains(event.target) && !menuToggle.contains(event.target)) {
            body.classList.remove('menu-open');
        }
    });

    // Automatyczne zamykanie menu po kliknięciu w link
    var menuLinks = document.querySelectorAll('.menu ul li a');
    menuLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            body.classList.remove('menu-open');
        });
    });
});
