// SCRIPT PARA MÚLTIPLOS CARROSSÉIS NA MESMA PÁGINA

document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os carrosséis da página
    const carousels = document.querySelectorAll('.carossel-container');

    carousels.forEach(carousel => {
        const inner = carousel.querySelector('.carossel-inner');
        const prevBtn = carousel.querySelector('.prev-btn');
        const nextBtn = carousel.querySelector('.next-btn');
        const images = carousel.querySelectorAll('img');
        
        let currentIndex = 0;
        const totalImages = images.length;

        // Se não tiver imagens ou botões, ignora este carrossel
        if (totalImages === 0 || !prevBtn || !nextBtn) return;

        // Função para atualizar a posição
        const updateCarousel = () => {
            inner.style.transform = `translateX(-${currentIndex * 100}%)`;
        };

        // Botão Próximo
        nextBtn.addEventListener('click', () => {
            currentIndex++;
            if (currentIndex >= totalImages) {
                currentIndex = 0; // Volta para a primeira foto
            }
            updateCarousel();
        });

        // Botão Anterior
        prevBtn.addEventListener('click', () => {
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = totalImages - 1; // Vai para a última foto
            }
            updateCarousel();
        });
    });
});