window.addEventListener('scroll', function() {
    var menu = document.querySelector('nav');
    
    if (window.scrollY > 630) {
        menu.classList.add('sticky');
    } else {
        menu.classList.remove('sticky');
    }
});
