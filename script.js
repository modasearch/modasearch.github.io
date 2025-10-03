document.addEventListener('DOMContentLoaded', function() {
    console.log("Strona załadowana pomyślnie!");
    
    // Hamburger menu
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Animacja hamburgera na krzyżyk
            const spans = hamburger.querySelectorAll('span');
            if (navLinks.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        // Zamknij menu po kliknięciu w link
        const navLinksArray = navLinks.querySelectorAll('a');
        navLinksArray.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                const spans = hamburger.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
        
        // Zamknij menu po kliknięciu poza nim
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navLinks.contains(event.target) || hamburger.contains(event.target);
            if (!isClickInsideNav && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const spans = hamburger.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
});
