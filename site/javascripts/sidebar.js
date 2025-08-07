document.addEventListener('DOMContentLoaded', function () {
    const closeButton = document.getElementById('close-nav');
    const drawerToggle = document.querySelector('[data-md-toggle="drawer"]');

    if (closeButton && drawerToggle) {
        closeButton.addEventListener('click', () => {
            drawerToggle.checked = false; // Uncheck the toggle to close the nav
        });
    }
});
