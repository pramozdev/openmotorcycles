document.addEventListener('DOMContentLoaded', function() {
    // Dados das unidades
    const unitsData = {
        'centro': {
            title: 'Unidade Centro',
            image: 'https://chiptronic.com.br/blog/wp-content/uploads/2016/10/como-montar-uma-oficina-de-motos-em-5-etapas.jpg',
            address: 'Rua das Motos, 123 - Centro, São Paulo - SP',
            phone: '(11) 1234-5678',
            email: 'centro@mototech.com.br',
            hours: 'Segunda a Sexta: 8h às 18h | Sábado: 9h às 13h',
            description: 'Nossa unidade matriz, localizada no coração da cidade, oferece todos os serviços de manutenção, revisão e personalização para sua moto. Contamos com uma equipe altamente qualificada e equipamentos de última geração.',
            features: [
                'Atendimento personalizado',
                'Estacionamento próprio',
                'Lavação inclusa nos serviços',
                'Café e wi-fi grátis',
                'Loja de acessórios',
                'Test drive de motos novas'
            ]
        },
        'zona-sul': {
            title: 'Unidade Zona Sul',
            image: 'https://i.pinimg.com/736x/54/a9/af/54a9af2b954f601887a3c9e06d480de0.jpg',
            address: 'Av. das Nações, 456 - Zona Sul, São Paulo - SP',
            phone: '(11) 9876-5432',
            email: 'zonasul@mototech.com.br',
            hours: 'Segunda a Sexta: 8h às 17h | Sábado: 9h às 12h',
            description: 'Localizada em um ponto estratégico da Zona Sul, nossa unidade oferece serviços rápidos e eficientes para quem busca praticidade sem abrir mão da qualidade que só a MotoTech oferece.',
            features: [
                'Atendimento rápido',
                'Serviço de mototaxi',
                'Venda de peças e acessórios',
                'Área de espera climatizada',
                'Parceria com oficinas de funilaria',
                'Descontos especiais para clientes'
            ]
        },
        'zona-norte': {
            title: 'Unidade Zona Norte',
            image: 'https://i.pinimg.com/736x/1b/b2/68/1bb268e2b2f6bbdcfb4a97f37e3cd509--workbenches-man-cave.jpg',
            address: 'Av. Paulista, 1000 - Zona Norte, São Paulo - SP',
            phone: '(11) 2345-6789',
            email: 'zonanorte@mototech.com.br',
            hours: 'Segunda a Sexta: 9h às 19h | Sábado: 9h às 14h',
            description: 'Nossa unidade na Zona Norte é especializada em motos de alta cilindrada e personalizações exclusivas. Trabalhamos com as melhores marcas do mercado para deixar sua moto do jeito que você sempre sonhou.',
            features: [
                'Especialista em motos de alta cilindrada',
                'Personalização premium',
                'Teste de desempenho',
                'Loja de acessórios exclusivos',
                'Estacionamento coberto',
                'Cafeteria própria'
            ]
        }
    };

    // Elementos do DOM
    const unitCards = document.querySelectorAll('.unit-card');
    const modal = document.getElementById('unitModal');
    const closeModal = document.querySelector('.close-modal');
    const modalTitle = document.querySelector('.modal-title');
    const modalImage = document.querySelector('.modal-image');
    const modalDetails = document.querySelector('.modal-details');
    const modalFeatures = document.querySelector('.modal-features');
    const modalCta = document.querySelector('.modal-cta');

    // Abrir modal ao clicar em um card
    unitCards.forEach(card => {
        card.addEventListener('click', function() {
            const unitId = this.getAttribute('data-unit');
            const unitData = unitsData[unitId];
            
            if (unitData) {
                // Preencher o modal com os dados da unidade
                modalTitle.textContent = unitData.title;
                modalImage.style.backgroundImage = `url('${unitData.image}')`;
                
                // Detalhes da unidade
                modalDetails.innerHTML = `
                    <p><i class="fas fa-map-marker-alt"></i> ${unitData.address}</p>
                    <p><i class="fas fa-phone"></i> ${unitData.phone}</p>
                    <p><i class="fas fa-envelope"></i> ${unitData.email}</p>
                    <p><i class="fas fa-clock"></i> ${unitData.hours}</p>
                    <p class="mt-4">${unitData.description}</p>
                `;
                
                // Recursos da unidade
                modalFeatures.innerHTML = `
                    <h4>Recursos e Serviços</h4>
                    <div class="features-list">
                        ${unitData.features.map(feature => `
                            <div class="feature-item">
                                <i class="fas fa-check"></i>
                                <span>${feature}</span>
                            </div>
                        `).join('')}
                    </div>
                `;
                
                // Link para agendamento
                modalCta.href = `#contato?unidade=${encodeURIComponent(unitData.title)}`;
                
                // Exibir o modal
                modal.classList.add('show');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Fechar modal ao clicar no botão de fechar
    closeModal.addEventListener('click', function() {
        closeUnitModal();
    });

    // Fechar modal ao clicar fora do conteúdo
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeUnitModal();
        }
    });

    // Fechar modal com a tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeUnitModal();
        }
    });

    // Função para fechar o modal
    function closeUnitModal() {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
});
