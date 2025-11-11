// Dados dos produtos
const products = [
    {
        id: 1,
        name: 'Óleo 20W50',
        category: 'Lubrificantes',
        price: 34.90,
        image: 'https://paulinhomotos.fbitsstatic.net/img/p/oleo-mobil-4t-20w50-mineral-litro-86917/284373-2.jpg',
        rating: 4.5,
        reviews: 128
    },
    {
        id: 2,
        name: 'Pastilha de Freio',
        category: 'Freios',
        price: 89.90,
        image: 'https://cdn.awsli.com.br/600x450/1380/1380006/produto/55139490/20df890c43.jpg',
        rating: 4.7,
        reviews: 9289
    },
    {
        id: 3,
        name: 'Filtro de Ar',
        category: 'Filtros',
        price: 39.90,
        image: 'https://marquinhom.vteximg.com.br/arquivos/ids/184118-1000-1000/04296000_zoom1.jpg',
        rating: 4.3,
        reviews: 76
    },
    {
        id: 4,
        name: 'Bateria 12V',
        category: 'Elétrica',
        price: 249.90,
        image: 'https://pistaoshop.cdn.magazord.com.br/img/2020/09/produto/1473/bateria-agm-moto-moura-12v-9ah-ma9-e-pistao-shop-mi9e-1.jpg',
        rating: 4.8,
        reviews: 203
    },
    {
        id: 5,
        name: 'Pneu Dianteiro',
        category: 'Pneus',
        price: 299.90,
        image: 'https://images.tcdn.com.br/img/img_prod/799020/pneu_dianteiro_bros_160_150_125_original_pirelli_44711kft623_2041_1_20431c3737b2c023091fdbbf734e4923.jpg',
        rating: 4.9,
        reviews: 156
    },
    {
        id: 6,
        name: 'Retrovisor Esquerdo',
        category: 'Acessórios',
        price: 59.90,
        image: 'https://motosneno.cdn.magazord.com.br/img/2021/07/produto/7844/1lbf628000-1.png',
        rating: 4.2,
        reviews: 42
    },
    {
        id: 7,
        name: 'Kit Corrente',
        category: 'Transmissão',
        price: 129.90,
        image: 'https://tparts-maverick-produtos.s3.amazonaws.com/loja/imagens/full/018783a.jpeg',
        rating: 4.6,
        reviews: 94
    },
    {
        id: 8,
        name: 'Vela de Ignição',
        category: 'Motor',
        price: 24.90,
        image: 'https://marquinhom.vteximg.com.br/arquivos/ids/188836-1000-1000/12833000_zoom1.jpg',
        rating: 4.4,
        reviews: 67
    }
];

// Dados das promoções
const promotions = [
    {
        id: 1,
        title: 'Revisão Completa',
        description: 'Revisão completa com 30% de desconto. Inclui troca de óleo, filtros e verificação de freios.',
        price: 'R$ 299,90',
        originalPrice: 'R$ 429,90',
        image: 'https://www.allianz.com.br/Blog/2024/revisao-de-motos--quando-devo-fazer-/_jcr_content/root/parsys/wrapper_1995931018_c/wrapper/multi_column_grid_co_968364666/grid-0-par/wrapper/wrapper/image.img.82.3360.jpeg/1732534133713/sistema-de-iluminacao.jpeg',
        endDate: '31/12/2023'
    },
    {
        id: 2,
        title: 'Kit Pneu + Alinhamento',
        description: 'Leve 2 pneus e ganhe alinhamento grátis. Aproveite essa oferta por tempo limitado!',
        price: 'R$ 499,90',
        originalPrice: 'R$ 599,90',
        image: 'https://nousmotards.com/wp-content/uploads/2024/03/1709887285_comment-lire-les-informations-sur-un-pneu-de-moto-1024x701.jpg',
        endDate: '15/12/2023'
    },
    {
        id: 3,
        title: 'Troca de Óleo + Filtro',
        description: 'Troca de óleo + filtro com 25% de desconto. Use o cupom: OLEO25',
        price: 'R$ 89,90',
        originalPrice: 'R$ 119,90',
        image: 'https://cdn.autopapo.com.br/box/uploads/2023/12/14141751/shutterstock_2370170305.jpg',
        endDate: '20/12/2023'
    }
];

// Função para carregar produtos
function loadProducts() {
    const productsGrid = document.querySelector('.products-grid');
    if (!productsGrid) return;

    productsGrid.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">R$ ${product.price.toFixed(2).replace('.', ',')}</div>
                <div class="product-rating">
                    <div class="stars">
                        ${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}
                    </div>
                    <span class="rating-count">(${product.reviews})</span>
                </div>
                <div class="product-actions">
                    <button class="btn-cart" data-product-id="${product.id}">
                        <i class="fas fa-shopping-cart"></i> Adicionar
                    </button>
                    <button class="btn-wishlist" data-product-id="${product.id}">
                        <i class="far fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    // Adiciona eventos aos botões
    document.querySelectorAll('.btn-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });

    document.querySelectorAll('.btn-wishlist').forEach(button => {
        button.addEventListener('click', toggleWishlist);
    });
}

// Função para carregar promoções
function loadPromotions() {
    const promoGrid = document.querySelector('.promo-grid');
    if (!promoGrid) return;

    promoGrid.innerHTML = promotions.map(promo => `
        <div class="promo-card">
            <div class="promo-content">
                <span class="promo-tag">Promoção</span>
                <h3 class="promo-title">${promo.title}</h3>
                <p class="promo-description">${promo.description}</p>
                <div class="promo-price">
                    <span class="current-price">${promo.price}</span>
                    <span class="original-price">${promo.originalPrice}</span>
                </div>
                <p class="promo-end">Válido até: ${promo.endDate}</p>
                <button class="btn btn-primary promo-btn" data-promo-id="${promo.id}">Aproveitar Oferta</button>
            </div>
            <div class="promo-image">
                <img src="${promo.image}" alt="${promo.title}">
            </div>
        </div>
    `).join('');

    // Adiciona eventos aos botões de promoção
    document.querySelectorAll('.promo-btn').forEach(button => {
        button.addEventListener('click', applyPromotion);
    });
}

// Função para adicionar ao carrinho
function addToCart(event) {
    const productId = event.currentTarget.dataset.productId;
    const product = products.find(p => p.id === parseInt(productId));
    
    if (product) {
        // Aqui você pode adicionar a lógica para adicionar ao carrinho
        showNotification(`"${product.name}" adicionado ao carrinho!`);
    }
}

// Função para alternar lista de desejos
function toggleWishlist(event) {
    const button = event.currentTarget;
    const productId = button.dataset.productId;
    const product = products.find(p => p.id === parseInt(productId));
    
    if (product) {
        button.classList.toggle('active');
        const icon = button.querySelector('i');
        
        if (button.classList.contains('active')) {
            icon.classList.remove('far', 'fa-heart');
            icon.classList.add('fas', 'fa-heart');
            showNotification(`"${product.name}" adicionado aos favoritos!`);
        } else {
            icon.classList.remove('fas', 'fa-heart');
            icon.classList.add('far', 'fa-heart');
        }
    }
}

// Função para aplicar promoção
function applyPromotion(event) {
    const promoId = event.currentTarget.dataset.promoId;
    const promo = promotions.find(p => p.id === parseInt(promoId));
    
    if (promo) {
        // Aqui você pode adicionar a lógica para aplicar a promoção
        showNotification(`Promoção "${promo.title}" aplicada com sucesso!`);
    }
}

// Função para mostrar notificação
function showNotification(message) {
    // Verifica se já existe uma notificação
    let notification = document.querySelector('.notification');
    
    if (!notification) {
        notification = document.createElement('div');
        notification.className = 'notification';
        document.body.appendChild(notification);
    }
    
    notification.textContent = message;
    notification.classList.add('show');
    
    // Remove a notificação após 3 segundos
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Função para inicializar o mapa
function initMap() {
    const mapElement = document.getElementById('map');
    if (!mapElement) return;

    // Inicializa o mapa do Mapbox
    mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-46.6333, -23.5505], // Coordenadas de São Paulo
        zoom: 11
    });

    // Adiciona marcadores das unidades
    const locations = [
        {
            name: 'Unidade Centro',
            coordinates: [-46.6333, -23.5505],
            address: 'Rua das Motos, 123 - Centro, São Paulo - SP',
            phone: '(11) 1234-5678'
        },
        {
            name: 'Unidade Zona Sul',
            coordinates: [-46.6500, -23.6000],
            address: 'Av. das Nações, 456 - Zona Sul, São Paulo - SP',
            phone: '(11) 9876-5432'
        }
    ];

    // Adiciona marcadores no mapa
    locations.forEach(location => {
        // Cria um elemento HTML personalizado para o marcador
        const el = document.createElement('div');
        el.className = 'marker';
        el.innerHTML = '<i class="fas fa-motorcycle"></i>';
        
        // Adiciona o marcador ao mapa
        new mapboxgl.Marker(el)
            .setLngLat(location.coordinates)
            .setPopup(
                new mapboxgl.Popup({ offset: 25 })
                    .setHTML(`
                        <h3>${location.name}</h3>
                        <p>${location.address}</p>
                        <p><i class="fas fa-phone"></i> ${location.phone}</p>
                    `)
            )
            .addTo(map);
    });
}

// Função para rolar suavemente para as seções
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Fecha o menu móvel se estiver aberto
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu && mobileMenu.classList.contains('show')) {
                    toggleMobileMenu();
                }
                
                // Rola suavemente para o elemento alvo
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Ajusta para o cabeçalho fixo
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Função para alternar o menu móvel
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('show');
        
        // Alterna o ícone do botão do menu
        const menuButton = document.getElementById('mobile-menu-button');
        if (menuButton) {
            const icon = menuButton.querySelector('i');
            if (mobileMenu.classList.contains('show')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    }
}

// Função para alternar o tema claro/escuro
function toggleTheme() {
    document.documentElement.classList.toggle('dark');
    
    // Salva a preferência do tema no localStorage
    const isDarkMode = document.documentElement.classList.contains('dark');
    localStorage.setItem('darkMode', isDarkMode);
    
    // Atualiza o ícone do botão de tema
    const themeToggle = document.getElementById('theme-toggle');
    const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
    
    if (themeToggle) {
        const icon = themeToggle.querySelector('i');
        if (isDarkMode) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }
    
    if (mobileThemeToggle) {
        const icon = mobileThemeToggle.querySelector('i');
        if (isDarkMode) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }
}

// Função para verificar o tema salvo
function checkSavedTheme() {
    const savedTheme = localStorage.getItem('darkMode');
    
    if (savedTheme === 'true') {
        document.documentElement.classList.add('dark');
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // Usa o tema do sistema se não houver preferência salva
        document.documentElement.classList.add('dark');
    }
    
    // Atualiza os ícones do tema
    updateThemeIcons();
}

// Função para atualizar os ícones do tema
function updateThemeIcons() {
    const isDarkMode = document.documentElement.classList.contains('dark');
    const themeToggles = [
        document.getElementById('theme-toggle'),
        document.getElementById('mobile-theme-toggle')
    ];
    
    themeToggles.forEach(toggle => {
        if (!toggle) return;
        
        const icon = toggle.querySelector('i');
        if (!icon) return;
        
        if (isDarkMode) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });
}

// Função para o botão voltar ao topo
function initBackToTopButton() {
    const backToTopButton = document.getElementById('back-to-top');
    if (!backToTopButton) return;
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });
    
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Função para inicializar o carrossel
function initCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    let currentSlide = 0;
    
    if (slides.length === 0) return;
    
    // Mostra o primeiro slide
    function showSlide(index) {
        // Esconde todos os slides
        slides.forEach((slide, i) => {
            slide.style.opacity = '0';
            slide.style.zIndex = '0';
        });
        
        // Mostra o slide atual
        slides[index].style.opacity = '1';
        slides[index].style.zIndex = '1';
        
        // Atualiza os dots
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        
        currentSlide = index;
    }
    
    // Próximo slide
    function nextSlide() {
        const nextIndex = (currentSlide + 1) % slides.length;
        showSlide(nextIndex);
    }
    
    // Eventos para os dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });
    
    // Troca de slide automática a cada 5 segundos
    setInterval(nextSlide, 5000);
    
    // Mostra o primeiro slide
    showSlide(0);
}

// Função para inicializar o formulário de contato
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Aqui você pode adicionar a lógica para enviar o formulário
        const formData = new FormData(contactForm);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
        
        console.log('Formulário enviado:', formObject);
        
        // Mostra mensagem de sucesso
        showNotification('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        
        // Limpa o formulário
        contactForm.reset();
    });
}

// Função para animar elementos ao rolar a página
function initScrollAnimations() {
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('animate');
            }
        });
    };
    
    // Executa uma vez ao carregar a página
    animateOnScroll();
    
    // Executa ao rolar a página
    window.addEventListener('scroll', animateOnScroll);
}

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    // Carrega os produtos e promoções
    loadProducts();
    loadPromotions();
    
    // Inicializa o mapa
    initMap();
    
    // Inicializa a rolagem suave
    initSmoothScroll();
    
    // Inicializa o botão de voltar ao topo
    initBackToTopButton();
    
    // Inicializa o carrossel
    initCarousel();
    
    // Inicializa o formulário de contato
    initContactForm();
    
    // Verifica o tema salvo
    checkSavedTheme();
    
    // Adiciona eventos aos botões de tema
    const themeToggle = document.getElementById('theme-toggle');
    const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
    
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    if (mobileThemeToggle) {
        mobileThemeToggle.addEventListener('click', toggleTheme);
    }
    
    // Adiciona evento ao botão do menu móvel
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', toggleMobileMenu);
    }
    
    // Inicializa animações de rolagem
    initScrollAnimations();
    
    // Adiciona classe de carregamento ao body para transições suaves
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});

// Adiciona estilos dinâmicos
const style = document.createElement('style');
style.textContent = `
    /* Estilos para o marcador personalizado */
    .marker {
        background-color: var(--primary);
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 16px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    }
    
    /* Estilos para o popup do mapa */
    .mapboxgl-popup-content {
        padding: 15px;
        border-radius: 8px;
    }
    
    .mapboxgl-popup-content h3 {
        margin: 0 0 5px;
        font-size: 16px;
        font-weight: 600;
        color: var(--dark);
    }
    
    .mapboxgl-popup-content p {
        margin: 5px 0;
        font-size: 14px;
        color: var(--gray);
    }
    
    .mapboxgl-popup-content i {
        margin-right: 5px;
        color: var(--primary);
    }
    
    /* Estilos para a notificação */
    .notification {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: var(--primary);
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
        transform: translateY(100px);
        opacity: 0;
        transition: all 0.3s ease;
        z-index: 1000;
        max-width: 300px;
    }
    
    .notification.show {
        transform: translateY(0);
        opacity: 1;
    }
    
    /* Estilos para o menu móvel */
    #mobile-menu {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease;
    }
    
    #mobile-menu.show {
        max-height: 500px;
        padding-top: 1rem;
    }
    
    /* Estilos para o botão de voltar ao topo */
    #back-to-top {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background-color: var(--primary);
        color: white;
        border: none;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }
    
    #back-to-top.visible {
        opacity: 1;
        visibility: visible;
    }
    
    #back-to-top:hover {
        background-color: var(--primary-dark);
        transform: translateY(-3px);
    }
    
    /* Estilos para o carrossel */
    .carousel {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    
    .carousel-slide {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        opacity: 0;
        transition: opacity 1s ease-in-out;
    }
    
    .carousel-slide.active {
        opacity: 1;
    }
    
    .carousel-dots {
        position: absolute;
        bottom: 20px;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        gap: 10px;
        z-index: 10;
    }
    
    .carousel-dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.5);
        border: none;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .carousel-dot.active {
        background-color: white;
        transform: scale(1.2);
    }
    
    /* Estilos para o tema escuro */
    .dark .card {
        background-color: #2d3748;
        color: #e2e8f0;
    }
    
    .dark .card-title {
        color: white;
    }
    
    .dark .text-muted {
        color: #a0aec0 !important;
    }
    
    /* Animações */
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .animate-on-scroll {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .animate-on-scroll.animate {
        opacity: 1;
        transform: translateY(0);
    }
    
    /* Transição suave para o tema */
    body {
        transition: background-color 0.3s ease, color 0.3s ease;
    }
`;

document.head.appendChild(style);
