// Promo Banner Carousel
function initPromoBanner() {
    const slides = document.querySelectorAll('.promo-slide');
    let currentSlide = 0;
    
    // Mostrar o primeiro slide
    if (slides.length > 0) {
        slides[0].classList.add('active');
    }
    
    // Função para mudar o slide
    function nextSlide() {
        // Remover a classe 'active' de todos os slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Avançar para o próximo slide
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Adicionar a classe 'active' ao slide atual
        slides[currentSlide].classList.add('active');
    }
    
    // Mudar de slide a cada 5 segundos
    if (slides.length > 1) {
        setInterval(nextSlide, 5000);
    }
}

// Inicializar o banner de promoções quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', initPromoBanner);
