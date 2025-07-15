// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize only essential functions
    initScrollToTop();
    initGallery();
    initVideoModal();
});

// Scroll to Top Button
function initScrollToTop() {
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    
    // Show/hide scroll to top button
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
    
    // Scroll to top functionality
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Gallery Functions
function initGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = new bootstrap.Modal(document.getElementById('galleryModal'));
    const modalImage = document.getElementById('modalImage');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            const imgSrc = img.getAttribute('src');
            const imgAlt = img.getAttribute('alt');
            
            modalImage.setAttribute('src', imgSrc);
            modalImage.setAttribute('alt', imgAlt);
            modal.show();
        });
    });
}

// Video Modal Functions
function initVideoModal() {
    const videoModal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    const modalTitle = document.getElementById('videoModalLabel');
    
    // Handle video modal show
    videoModal.addEventListener('show.bs.modal', function(event) {
        const button = event.relatedTarget;
        const videoSrc = button.getAttribute('data-video');
        const videoTitle = button.getAttribute('data-title');
        
        modalVideo.src = videoSrc;
        modalTitle.textContent = videoTitle;
    });
    
    // Handle video modal hide
    videoModal.addEventListener('hidden.bs.modal', function() {
        modalVideo.pause();
        modalVideo.src = '';
    });
    
    // Pause all thumbnail videos when modal opens
    videoModal.addEventListener('show.bs.modal', function() {
        const thumbnailVideos = document.querySelectorAll('.video-thumbnail video');
        thumbnailVideos.forEach(video => {
            video.pause();
        });
    });
}