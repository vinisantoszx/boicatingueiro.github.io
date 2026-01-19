document.addEventListener("DOMContentLoaded", function () {
    // 1. Seleciona todos os carrosséis da página
    const carousels = document.querySelectorAll('.carossel-container');

    // 2. Para cada carrossel, cria uma lógica independente
    carousels.forEach((carousel) => {
        const inner = carousel.querySelector('.carossel-inner');
        const slides = inner.querySelectorAll('img'); // Conta imagens APENAS deste carrossel
        const prevBtn = carousel.querySelector('.prev-btn');
        const nextBtn = carousel.querySelector('.next-btn');
        
        // Se não tiver imagens ou botões, ignora
        if (slides.length === 0) return;

        let currentIndex = 0;
        const totalSlides = slides.length;

        // Função que move o slide
        function showSlide(index) {
            // Lógica cíclica (Loop infinito)
            if (index < 0) {
                currentIndex = totalSlides - 1; // Vai para o último
            } else if (index >= totalSlides) {
                currentIndex = 0; // Volta para o primeiro
            } else {
                currentIndex = index;
            }
            
            // Calcula o deslocamento
            const offset = -currentIndex * 100;
            inner.style.transform = `translateX(${offset}%)`;
        }

        // Adiciona os cliques nos botões (se existirem)
        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.preventDefault(); // Evita comportamento padrão de link/botão
                showSlide(currentIndex - 1);
            });
        }
        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                showSlide(currentIndex + 1);
            });
        }
    });
});