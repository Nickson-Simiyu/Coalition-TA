document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('nav ul li a[data-scroll]').forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            var target = this.getAttribute('data-scroll');
            var targetElement = document.getElementById(target);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});


function showSlide(index) {
    const slides = document.querySelectorAll('.slide img');
    const clickedSlide = slides[index - 1];

    slides.forEach(slide => {
        slide.style.transform = 'scale(1)';
    });

    clickedSlide.style.transform = 'scale(1.2)';
}