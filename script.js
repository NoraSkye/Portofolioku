document.addEventListener('DOMContentLoaded', () => {

    const hoverElements = document.querySelectorAll('.bouncy');
    const heroContent = document.querySelector('.hero-content');
    const blobs = document.querySelectorAll('.blob');
    const customCursor = document.getElementById('custom-cursor');
    });

    // --- 3. Efek Parallax Sederhana saat Scroll ---
    window.addEventListener('scroll', () => {
        let scrollValue = window.scrollY;

        // Gerakkan konten hero ke atas (lebih cepat dari scroll)
        if (heroContent) {
            heroContent.style.transform = `translateY(${scrollValue * -0.2}px)`;
            heroContent.style.opacity = 1 - (scrollValue / 500);
        }

        // Gerakkan blobs (dengan kecepatan berbeda)
        if (blobs[0]) {
            blobs[0].style.transform = `translate(${scrollValue * 0.1}px, ${scrollValue * 0.3}px)`;
        }
        if (blobs[1]) {
            blobs[1].style.transform = `translate(${scrollValue * -0.05}px, ${scrollValue * 0.1}px)`;
        }
    });
