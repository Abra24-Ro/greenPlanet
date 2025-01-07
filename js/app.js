document.addEventListener("DOMContentLoaded", () => {
    // Carousel functionality
    const slides = document.querySelector(".slides");
    const dots = document.querySelectorAll(".carousel-dots button");
    let currentSlide = 0;
    
    function goToSlide(slideIndex) {
        slides.style.transform = `translateX(-${slideIndex * 100}%)`;
        dots.forEach(dot => dot.classList.remove("active"));
        dots[slideIndex].classList.add("active");
    }

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => goToSlide(index));
    });

    setInterval(() => {
        currentSlide = (currentSlide + 1) % dots.length;
        goToSlide(currentSlide);
    }, 3000); // Cambia de imagen cada 3 segundos

    // FAQ Accordion
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(item => {
        const btn = item.querySelector(".faq-btn");
        const content = item.querySelector(".faq-content");
        btn.addEventListener("click", () => {
            item.classList.toggle("active");
        });
    });

    // Donation Form
    const form = document.getElementById("donation-form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const amount = document.getElementById("donation-amount").value;
        const paymentMethod = document.getElementById("payment-method").value;

        if (amount > 0) {
            document.querySelector(".success-message").style.display = "block";
            document.querySelector(".error-message").style.display = "none";
        } else {
            document.querySelector(".error-message").style.display = "block";
            document.querySelector(".success-message").style.display = "none";
        }
    });
});
