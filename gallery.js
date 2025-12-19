// Gallery functionality
document.addEventListener('DOMContentLoaded', function() {
    const galleryGrid = document.getElementById('galleryGrid');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxPrev = document.querySelector('.lightbox-prev');
    const lightboxNext = document.querySelector('.lightbox-next');

    // List of images from the Quilt Pictures copy folder
    const images = [
        'Quilt Pictures copy/77739016332__214DA4A3-8F97-4475-A3DB-B2F56E8480E8.jpeg',
        'Quilt Pictures copy/IMG_0163.jpg',
        'Quilt Pictures copy/IMG_0330.jpg',
        'Quilt Pictures copy/IMG_0684.jpeg',
        'Quilt Pictures copy/IMG_0687.jpeg',
        'Quilt Pictures copy/IMG_0700.jpeg',
        'Quilt Pictures copy/IMG_0702.jpeg',
        'Quilt Pictures copy/IMG_0719.jpeg',
        'Quilt Pictures copy/IMG_0727.jpeg',
        'Quilt Pictures copy/IMG_0728.jpeg',
        'Quilt Pictures copy/IMG_1011.jpeg',
        'Quilt Pictures copy/IMG_1161.jpeg',
        'Quilt Pictures copy/IMG_1168.jpeg',
        'Quilt Pictures copy/IMG_1245.jpeg',
        'Quilt Pictures copy/IMG_1252.jpeg',
        'Quilt Pictures copy/IMG_1329.jpeg',
        'Quilt Pictures copy/IMG_1330.jpeg',
        'Quilt Pictures copy/IMG_1332.jpeg',
        'Quilt Pictures copy/IMG_1333.jpeg',
        'Quilt Pictures copy/IMG_1334.jpeg',
        'Quilt Pictures copy/IMG_1335.jpeg',
        'Quilt Pictures copy/IMG_1336.jpeg',
        'Quilt Pictures copy/IMG_1337.jpeg',
        'Quilt Pictures copy/IMG_1338.jpeg',
        'Quilt Pictures copy/IMG_1339.jpeg',
        'Quilt Pictures copy/IMG_1340.jpeg',
        'Quilt Pictures copy/IMG_1341.jpeg',
        'Quilt Pictures copy/IMG_1342.jpeg',
        'Quilt Pictures copy/IMG_1343.jpeg',
        'Quilt Pictures copy/IMG_1344.jpeg',
        'Quilt Pictures copy/IMG_4183.JPG',
        'Quilt Pictures copy/IMG_4189.JPG',
        'Quilt Pictures copy/IMG_4373.JPG',
        'Quilt Pictures copy/IMG_4397.JPG',
        'Quilt Pictures copy/IMG_4491.JPG',
        'Quilt Pictures copy/IMG_4692.JPG'
    ];

    let currentImageIndex = 0;

    // Load images into gallery
    function loadGallery() {
        images.forEach((imagePath, index) => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            galleryItem.setAttribute('data-index', index);

            const img = document.createElement('img');
            img.src = imagePath;
            img.alt = `Quilt ${index + 1}`;
            img.loading = 'lazy';

            // Handle image load errors
            img.onerror = function() {
                this.style.display = 'none';
            };

            galleryItem.appendChild(img);
            galleryItem.addEventListener('click', () => openLightbox(index));
            galleryGrid.appendChild(galleryItem);
        });
    }

    // Open lightbox
    function openLightbox(index) {
        currentImageIndex = index;
        updateLightboxImage();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Close lightbox
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    // Update lightbox image
    function updateLightboxImage() {
        const imagePath = images[currentImageIndex];
        lightboxImage.src = imagePath;
        lightboxCaption.textContent = `Quilt ${currentImageIndex + 1} of ${images.length}`;
    }

    // Navigate to previous image
    function showPreviousImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateLightboxImage();
    }

    // Navigate to next image
    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateLightboxImage();
    }

    // Event listeners
    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }

    if (lightboxPrev) {
        lightboxPrev.addEventListener('click', showPreviousImage);
    }

    if (lightboxNext) {
        lightboxNext.addEventListener('click', showNextImage);
    }

    // Close on background click
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (lightbox.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowLeft') {
                showPreviousImage();
            } else if (e.key === 'ArrowRight') {
                showNextImage();
            }
        }
    });

    // Load gallery on page load
    if (galleryGrid) {
        loadGallery();
    }
});

