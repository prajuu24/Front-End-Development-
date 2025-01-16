// setup icons 
lucide.createIcons();

//handle menu open and close
const menuToggle = document.getElementById('menuToggle');
const leftMenu = document.getElementById('leftMenu');
const menuIcon = menuToggle.querySelector('i');

menuToggle.addEventListener('click', () => {
    leftMenu.classList.toggle('collapsed');
    
    // update icon based on menu state
    const newIcon = leftMenu.classList.contains('collapsed') ? 'menu' : 'x';
    menuIcon.setAttribute('data-lucide', newIcon);
    lucide.createIcons();
});

// handle page scaling for different screen sizes
function adjustPageScale() {
    const screenWidth = window.innerWidth;
    let scaleFactor = 1;

    // determine scale based on screen width
    if (screenWidth >= 992 && screenWidth <= 1600) {
        scaleFactor = 0.9;
    } else if (screenWidth >= 700 && screenWidth <= 767) {
        scaleFactor = 0.8;
    } else if (screenWidth >= 600 && screenWidth < 700) {
        scaleFactor = 0.75;
    } else if (screenWidth <= 600) {
        scaleFactor = 0.5;
    }

    // apply scaling using dom
    document.body.style.transform = `scale(${scaleFactor})`;
    document.body.style.transformOrigin = 'top center';
}

// setup initial scale and listen for changes in size
adjustPageScale();
window.addEventListener('resize', adjustPageScale);

// clean up when page unloads
window.addEventListener('unload', () => {
    window.removeEventListener('resize', adjustPageScale);
});