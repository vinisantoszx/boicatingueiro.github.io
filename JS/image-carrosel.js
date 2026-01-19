let currentSlide = 0;

function moveSlide(direction) {
    // Tenta encontrar o container pela nova classe (section) ou pela antiga (div)
    const carrosselInner = document.querySelector('.carossel-inner');
    const slides = document.querySelectorAll('.carossel-inner img');
    
    if (!slides.length || !carrosselInner) return;

    const totalSlides = slides.length;

    currentSlide += direction;

    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    const offset = -currentSlide * 100;
    carrosselInner.style.transform = `translateX(${offset}%)`;
    
    updateIndicators();
}

// Configuração dos indicadores (bolinhas)
function setupIndicators() {
    const slides = document.querySelectorAll('.carossel-inner img');
    const indicatorsContainer = document.querySelector('.carossel-indicators');
    
    if (!indicatorsContainer || !slides.length) return;

    indicatorsContainer.innerHTML = ''; // Limpa anteriores

    slides.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.classList.add('carossel-indicator');
        if (index === 0) indicator.classList.add('active');
        
        indicator.addEventListener('click', () => {
            currentSlide = index;
            moveSlide(0); // Atualiza posição
        });
        
        indicatorsContainer.appendChild(indicator);
    });
}

function updateIndicators() {
    const indicators = document.querySelectorAll('.carossel-indicator');
    indicators.forEach((indicator, index) => {
        if (index === currentSlide) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

// Inicia o carrossel automático
let autoSlideInterval = setInterval(() => {
    moveSlide(1);
}, 5000); // Troca a cada 5 segundos

// Pausa o carrossel quando passa o mouse (opcional, melhora UX)
const carrosselContainer = document.querySelector('.carossel-section') || document.querySelector('.carossel');
if (carrosselContainer) {
    carrosselContainer.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
    carrosselContainer.addEventListener('mouseleave', () => {
        autoSlideInterval = setInterval(() => moveSlide(1), 5000);
    });
}

// Inicializa ao carregar a página
document.addEventListener('DOMContentLoaded', setupIndicators);