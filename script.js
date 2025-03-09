// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Shopping cart functionality
const addToCartButtons = document.querySelectorAll('.shop-button');
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Product added to cart!');
  });
});

// Newsletter form submission
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input').value;
    alert(`Thank you for subscribing with: ${email}`);
    e.target.reset();
  });
}

// Image slider functionality
const sliderImages = document.querySelectorAll('.slider-image');
const sliderDots = document.querySelectorAll('.slider-dot');
let currentSlide = 2; // Start with middle image
let imagesLoaded = 0;

// Function to handle image loading
function handleImageLoad() {
  imagesLoaded++;
  if (imagesLoaded === sliderImages.length) {
    // All images are loaded, initialize the slider
    sliderImages.forEach(image => image.classList.add('loaded'));
    updateSlider();
    // Start auto-sliding
    setInterval(() => {
      currentSlide = (currentSlide + 1) % sliderImages.length;
      updateSlider();
    }, 5000);
  }
}

// Add load event listeners to all images
sliderImages.forEach(image => {
  const img = image.querySelector('img');
  if (img.complete) {
    handleImageLoad();
  } else {
    img.addEventListener('load', handleImageLoad);
  }
});

function updateSlider() {
  sliderImages.forEach((image, index) => {
    let position = index - currentSlide;
    if (position < -2) position += sliderImages.length;
    if (position > 2) position -= sliderImages.length;
    
    switch(position) {
      case -2:
        image.style.transform = 'translateX(-80%) scale(0.6)';
        image.style.opacity = '0.4';
        image.style.zIndex = '1';
        break;
      case -1:
        image.style.transform = 'translateX(-40%) scale(0.8)';
        image.style.opacity = '0.6';
        image.style.zIndex = '2';
        break;
      case 0:
        image.style.transform = 'translateX(0) scale(1)';
        image.style.opacity = '1';
        image.style.zIndex = '3';
        break;
      case 1:
        image.style.transform = 'translateX(40%) scale(0.8)';
        image.style.opacity = '0.6';
        image.style.zIndex = '2';
        break;
      case 2:
        image.style.transform = 'translateX(80%) scale(0.6)';
        image.style.opacity = '0.4';
        image.style.zIndex = '1';
        break;
    }
  });
  
  sliderDots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlide);
  });
}

// Add click events for dots
sliderDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index;
    updateSlider();
  });
});