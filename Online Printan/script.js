 // Get elements for the cart button and the sliding form
 const cartButton = document.getElementById('cartButton');
 const sideForm = document.getElementById('sideForm');

 // Event listener for opening the form when the cart button is clicked
 cartButton.addEventListener('click', function() {
    sideForm.classList.toggle('visible'); // Toggle the 'visible' class on the form
    sideForm.classList.toggle('hidden');  // Toggle the 'hidden' class off the form
 });

 // Event listener for clicking outside the form to close it
 document.addEventListener('click', function(event) {
     // Check if the click is outside the side form and its close button
    if (!sideForm.contains(event.target) && !cartButton.contains(event.target)) {
        sideForm.classList.add('hidden');  // Hide the form if clicked outside
        sideForm.classList.remove('visible'); // Ensure the form is hidden
    }
 });

document.addEventListener("DOMContentLoaded", () => {
    const writeReviewButton = document.getElementById("writeReviewButton");
    const closeFormButton = document.getElementById("closeFormButton");
    const reviewFormPopup = document.getElementById("reviewFormPopup");

    // Open the form
    writeReviewButton.addEventListener("click", () => {
        reviewFormPopup.style.display = "block";
    });

    // Close the form
    closeFormButton.addEventListener("click", () => {
        reviewFormPopup.style.display = "none";
    });

    // Close the form when clicking outside of it
    window.addEventListener("click", (event) => {
        if (event.target === reviewFormPopup) {
            reviewFormPopup.style.display = "none";
        }
    });
});

// JavaScript to make the carousel functional
let currentSlide = 0; // Index of the current slide
const slides = document.querySelectorAll('.review_slide'); // All slides
const dots = document.querySelectorAll('.dot'); // All dots

// Function to show a specific slide
function showSlide(index) {
    // Hide all slides
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });

    // Update active dot
    dots.forEach((dot, i) => {
        dot.className = dot.className.replace(' active', '');
        if (i === index) dot.className += ' active';
    });

    // Update current slide index
    currentSlide = index;
}

// Show the first slide initially
showSlide(currentSlide);

// Function to navigate to the next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Function to navigate to the previous slide
function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Attach event listeners to navigation buttons
document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

// Attach event listeners to dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showSlide(index));
});

document.getElementById('previewButton').addEventListener('click', function() {
    const fileInput = document.getElementById('image');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const img = new Image();
            img.src = e.target.result;
            img.onload = function() {
                // Create a new window or tab to display the image
                const previewWindow = window.open('', '_blank');
                previewWindow.document.body.appendChild(img);
            };
        };

        reader.readAsDataURL(file);
    }
});