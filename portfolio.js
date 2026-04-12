// ============================================
// Portfolio Password Protection
// ============================================
const PORTFOLIO_PASSWORD = 'design26';
const PASSWORD_KEY = 'portfolio_access';

const passwordModal = document.getElementById('passwordModal');
const passwordForm = document.getElementById('passwordForm');
const passwordInput = document.getElementById('portfolioPassword');
const passwordError = document.getElementById('passwordError');
const togglePasswordBtn = document.querySelector('.toggle-password');
const portfolioContent = document.querySelector('.portfolio-main');
const pageHeader = document.querySelector('.page-header');
const ctaSection = document.querySelector('.cta-section');

// Check if already authenticated
function checkAuth() {
    const isAuthenticated = sessionStorage.getItem(PASSWORD_KEY) === 'true';
    if (isAuthenticated) {
        showPortfolio();
    } else {
        showPasswordModal();
    }
}

function showPasswordModal() {
    passwordModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    portfolioContent.style.display = 'none';
    pageHeader.style.display = 'none';
    ctaSection.style.display = 'none';
    setTimeout(() => passwordInput.focus(), 100);
}

function showPortfolio() {
    passwordModal.classList.remove('active');
    document.body.style.overflow = '';
    portfolioContent.style.display = '';
    pageHeader.style.display = '';
    ctaSection.style.display = '';
}

// Handle password submission
passwordForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const enteredPassword = passwordInput.value;

    if (enteredPassword === PORTFOLIO_PASSWORD) {
        sessionStorage.setItem(PASSWORD_KEY, 'true');
        showPortfolio();
        passwordError.classList.remove('visible');
    } else {
        passwordError.classList.add('visible');
        passwordInput.classList.add('error');
        passwordInput.value = '';
        passwordInput.focus();

        // Remove error state after animation
        setTimeout(() => {
            passwordInput.classList.remove('error');
        }, 500);
    }
});

// Toggle password visibility
togglePasswordBtn.addEventListener('click', () => {
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;
    togglePasswordBtn.classList.toggle('visible');
});

// Initialize auth check
checkAuth();

// ============================================
// Lightbox Functionality
// ============================================
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxCaption = document.getElementById('lightbox-caption');
const lightboxClose = document.querySelector('.lightbox-close');
const lightboxPrev = document.querySelector('.lightbox-prev');
const lightboxNext = document.querySelector('.lightbox-next');

let currentImageIndex = 0;
let galleryImages = [];

// Collect all portfolio images
function collectImages() {
    const images = document.querySelectorAll('.project-hero img, .project-image-full img, .gallery-item img, .project-gallery img, .speed-card img');
    galleryImages = Array.from(images).map(img => ({
        src: img.src,
        alt: img.alt,
        caption: img.closest('.gallery-item')?.querySelector('.image-caption')?.textContent ||
                 img.closest('.project-image-full')?.querySelector('.image-caption')?.textContent ||
                 img.closest('.speed-card')?.querySelector('h4')?.textContent ||
                 img.alt
    }));

    // Add click handlers to all images
    images.forEach((img, index) => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', () => openLightbox(index));
    });
}

function openLightbox(index) {
    currentImageIndex = index;
    updateLightboxImage();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function updateLightboxImage() {
    const image = galleryImages[currentImageIndex];
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightboxCaption.textContent = image.caption;

    // Update navigation visibility
    lightboxPrev.style.display = currentImageIndex > 0 ? 'flex' : 'none';
    lightboxNext.style.display = currentImageIndex < galleryImages.length - 1 ? 'flex' : 'none';
}

function nextImage() {
    if (currentImageIndex < galleryImages.length - 1) {
        currentImageIndex++;
        updateLightboxImage();
    }
}

function prevImage() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        updateLightboxImage();
    }
}

// Event listeners
lightboxClose.addEventListener('click', closeLightbox);
lightboxNext.addEventListener('click', nextImage);
lightboxPrev.addEventListener('click', prevImage);

// Close on background click
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;

    switch (e.key) {
        case 'Escape':
            closeLightbox();
            break;
        case 'ArrowRight':
            nextImage();
            break;
        case 'ArrowLeft':
            prevImage();
            break;
    }
});

// Touch/swipe support
let touchStartX = 0;
let touchEndX = 0;

lightbox.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

lightbox.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, { passive: true });

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            nextImage();
        } else {
            prevImage();
        }
    }
}

// Initialize lightbox after DOM is ready
document.addEventListener('DOMContentLoaded', collectImages);

// Also collect images if DOM is already loaded
if (document.readyState !== 'loading') {
    collectImages();
}
