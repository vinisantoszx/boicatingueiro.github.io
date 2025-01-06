// let currentIndex = 0;
// const intervalTime = 10000;
// const slides = document.querySelectorAll(".carossel-inner img");
// const totalSlides = slides.length;
// const indicatorsContainer = document.querySelector(".carossel-indicators");

// function moveSlide(step) {
//     const slides = document.querySelectorAll(".carossel-inner img");
//     const totalSlides = slides.length;

//     currentIndex = (currentIndex + step + totalSlides) % totalSlides;
//     const offset = -currentIndex * 100;
//     document.querySelector(".carossel-inner").style.transform = `translateX(${offset}%)`;
//     updateIndicators();
// }

// function createIndicators() {
//     for (let i = 0; i < totalSlides; i++) {
//         const indicator = document.createElement("div");
//         indicator.classList.add("carossel-indicator");
//         indicator.addEventListener("click", () => {
//             moveSlide(i - currentIndex);
//         });
//         indicatorsContainer.appendChild(indicator);
//     }
//     updateIndicators();
// }

// function updateIndicators() {
//     const indicators = document.querySelectorAll(".carossel-indicator");
//     indicators.forEach((indicator, index) => {
//         indicator.classList.toggle("active", index === currentIndex);
//     });
// }

// function startAutoSlide() {
//     setInterval(() => {
//         moveSlide(1);
//     }, intervalTime);
// }

// // Inicializa o carrossel
// createIndicators();
// startAutoSlide();

function initializeCarousel(carousel) {
    let currentIndex = 0;
    const intervalTime = 10000;
    const slides = carousel.querySelectorAll(".carossel-inner img");
    const totalSlides = slides.length;
    const indicatorsContainer = carousel.querySelector(".carossel-indicators");
    const innerCarousel = carousel.querySelector(".carossel-inner");

    function moveSlide(step) {
        currentIndex = (currentIndex + step + totalSlides) % totalSlides;
        const offset = -currentIndex * 100;
        innerCarousel.style.transform = `translateX(${offset}%)`;
        updateIndicators();
    }

    function createIndicators() {
        for (let i = 0; i < totalSlides; i++) {
            const indicator = document.createElement("div");
            indicator.classList.add("carossel-indicator");
            indicator.addEventListener("click", () => {
                moveSlide(i - currentIndex);
            });
            indicatorsContainer.appendChild(indicator);
        }
        updateIndicators();
    }

    function updateIndicators() {
        const indicators = indicatorsContainer.querySelectorAll(".carossel-indicator");
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle("active", index === currentIndex);
        });
    }

    function startAutoSlide() {
        setInterval(() => {
            moveSlide(1);
        }, intervalTime);
    }

    // Botões de controle
    const prevButton = carousel.querySelector(".carossel-control.prev");
    const nextButton = carousel.querySelector(".carossel-control.next");

    prevButton.addEventListener("click", () => moveSlide(-1));
    nextButton.addEventListener("click", () => moveSlide(1));

    // Inicializa o carrossel
    createIndicators();
    startAutoSlide();
}

// Inicializar todos os carrosséis na página
const carousels = document.querySelectorAll(".carossel");
carousels.forEach((carousel) => initializeCarousel(carousel));
