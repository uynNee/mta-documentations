document.querySelectorAll('.md-feedback__icon').forEach(feedbackIcon => {
    feedbackIcon.addEventListener('click', function () {
        this.classList.toggle('active');
    });
});

document.getElementById('md-content-scroll-top').addEventListener('click', function () {
    const header = document.querySelector('.md-header.header-top');
    if (header) {
        header.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
});



