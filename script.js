// Simple JavaScript to animate steps on scroll
document.addEventListener('DOMContentLoaded', () => {
    const steps = document.querySelectorAll('.step');

    // Opsi untuk Intersection Observer
    const observerOptions = {
        root: null, // Menggunakan viewport sebagai root
        threshold: 0.15 // Elemen dianggap terlihat jika ..% areanya masuk viewport
    };

    // Callback function yang akan dijalankan saat elemen terlihat
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Opsional: berhenti mengamati setelah animasi berjalan sekali
                observer.unobserve(entry.target);
            }
        });
    };

    // Membuat observer baru
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Mengamati setiap elemen '.step'
    steps.forEach(step => {
        observer.observe(step);
    });
});