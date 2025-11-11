document.addEventListener('DOMContentLoaded', function() {
    // Elementos do menu móvel
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileOverlay = document.createElement('div');
    mobileOverlay.className = 'mobile-overlay';
    document.body.appendChild(mobileOverlay);
    
    // Garantir que o menu esteja oculto inicialmente
    mobileMenu.style.display = 'none';
    
    // Elementos para animação do botão hambúrguer
    const menuIcon = document.createElement('i');
    menuIcon.className = 'fas fa-bars';
    mobileMenuBtn.innerHTML = '';
    mobileMenuBtn.appendChild(menuIcon);
    
    // Adiciona o ícone de fechar (inicialmente oculto)
    const closeIcon = document.createElement('i');
    closeIcon.className = 'fas fa-times';
    closeIcon.style.position = 'absolute';
    closeIcon.style.opacity = '0';
    closeIcon.style.transform = 'rotate(-90deg)';
    mobileMenuBtn.appendChild(closeIcon);
    
    // Fechar menu ao clicar fora
    mobileOverlay.addEventListener('click', closeMobileMenu);
    
    // Alternar menu móvel com animação suave
    function toggleMobileMenu() {
        const isOpening = !mobileMenu.classList.contains('active');
        
        if (isOpening) {
            mobileMenu.style.display = 'block';
            // Forçar reflow para ativar a animação
            void mobileMenu.offsetWidth;
        }
        
        document.body.classList.toggle('menu-open');
        mobileMenu.classList.toggle('active');
        mobileOverlay.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
        
        if (isOpening) {
            document.body.style.overflow = 'hidden';
            // Foco no primeiro item do menu para acessibilidade
            const firstLink = mobileMenu.querySelector('a');
            if (firstLink) firstLink.focus();
        } else {
            document.body.style.overflow = '';
            // Devolve o foco para o botão do menu
            mobileMenuBtn.focus();
            
            // Esconder o menu após a animação
            setTimeout(() => {
                if (!mobileMenu.classList.contains('active')) {
                    mobileMenu.style.display = 'none';
                }
            }, 300);
        }
    }
    
    // Adiciona evento de clique ao botão do menu
    mobileMenuBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMobileMenu();
    });
    
    // Fechar menu ao clicar em um link
    const mobileLinks = document.querySelectorAll('.mobile-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Adiciona um pequeno atraso para melhorar a experiência do usuário
            setTimeout(() => {
                closeMobileMenu();
            }, 100);
        });
        
        // Melhora a acessibilidade com teclado
        link.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
    
    // Função para fechar o menu móvel
    function closeMobileMenu() {
        document.body.classList.remove('menu-open');
        mobileMenu.classList.remove('active');
        mobileOverlay.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
        document.body.style.overflow = '';
        
        // Esconder o menu após a animação
        setTimeout(() => {
            mobileMenu.style.display = 'none';
        }, 300);
    }
    
    // Fechar menu ao pressionar a tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });
    
    // Fechar menu ao redimensionar a tela para desktop
    function handleResize() {
        if (window.innerWidth > 900) {
            closeMobileMenu();
        }
    }
    
    // Adicionar listener para redimensionamento da tela
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(handleResize, 250);
    });
    
    // Ativar link ativo baseado na rolagem
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-link');
    
    function setActiveLink() {
        let current = '';
        const scrollPosition = window.scrollY + 200;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    // Suavizar rolagem para âncoras
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Fechar o menu móvel se estiver aberto
                if (mobileMenu.classList.contains('active')) {
                    closeMobileMenu();
                }
            }
        });
    });
    
    // Inicialização
    window.addEventListener('scroll', setActiveLink);
    setActiveLink();
    
    // Melhorias de acessibilidade para o botão do menu
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    mobileMenuBtn.setAttribute('aria-controls', 'mobile-menu');
    mobileMenu.setAttribute('aria-labelledby', 'mobile-menu-btn');
    
    // Atualizar atributos ARIA quando o menu é aberto/fechado
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.attributeName === 'class') {
                const isExpanded = mobileMenuBtn.classList.contains('active');
                mobileMenuBtn.setAttribute('aria-expanded', isExpanded);
                mobileMenu.setAttribute('aria-hidden', !isExpanded);
            }
        });
    });
    
    observer.observe(mobileMenuBtn, { attributes: true });
});
