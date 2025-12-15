document.addEventListener('DOMContentLoaded', () => {
    // Select elements
    const mobileToggle = document.getElementById('mobile-toggle');
    const drawerClose = document.getElementById('drawer-close');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const overlay = document.getElementById('overlay');

    // Function to toggle menu
    function toggleMenu() {
        if(mobileDrawer && overlay) {
            mobileDrawer.classList.toggle('active');
            overlay.classList.toggle('active');
        }
    }

    // Add Event Listeners
    if(mobileToggle) mobileToggle.addEventListener('click', toggleMenu);
    if(drawerClose) drawerClose.addEventListener('click', toggleMenu);
    if(overlay) overlay.addEventListener('click', toggleMenu);
    
    console.log("Mobile Script Loaded");
});