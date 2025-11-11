document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    let currentSlide = 0;
    let slideInterval;
    const slideDuration = 5000; // 5 segundos

    // Inicializa o carrossel
    function initCarousel() {
        if (slides.length === 0) return;
        
        // Mostra o primeiro slide
        showSlide(currentSlide);
        
        // Inicia o autoplay
        startAutoplay();
        
        // Adiciona eventos aos dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                showSlide(currentSlide);
                resetAutoplay();
            });
        });
        
        // Pausa o autoplay quando o mouse está sobre o carrossel
        const carousel = document.querySelector('.carousel-container');
        if (carousel) {
            carousel.addEventListener('mouseenter', pauseAutoplay);
            carousel.addEventListener('mouseleave', startAutoplay);
        }
    }
    
    // Mostra o slide especificado
    function showSlide(index) {
        // Remove a classe 'active' de todos os slides e dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Adiciona a classe 'active' ao slide e dot atuais
        slides[index].classList.add('active');
        dots[index].classList.add('active');
    }
    
    // Avança para o próximo slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    // Inicia o autoplay
    function startAutoplay() {
        if (slideInterval) clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, slideDuration);
    }
    
    // Pausa o autoplay
    function pauseAutoplay() {
        clearInterval(slideInterval);
    }
    
    // Reinicia o autoplay
    function resetAutoplay() {
        clearInterval(slideInterval);
        startAutoplay();
    }
    
    // Inicializa o carrossel quando o DOM estiver pronto
    initCarousel();
});
