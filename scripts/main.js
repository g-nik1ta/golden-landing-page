function navShrink() {
    const nav = document.body.querySelector('nav');
    
    if (window.scrollY === 0) {
        nav.classList.remove('nav-shrink')
    } else {
        nav.classList.add('nav-shrink')
    }

};

navShrink();

document.addEventListener("scroll", navShrink);