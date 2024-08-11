// Add animation to the text
const animatedText = document.querySelector('.animated-text');
animatedText.classList.add('fadeIn');

// Get the button element
const learnMoreBtn = document.getElementById('learnMoreBtn');

// Add a click event listener to the button
learnMoreBtn.addEventListener('click', function() {
    // Redirect to the specified page
    window.location.href = "index1.html"; // Replace "about.html" with the URL of the page you want to navigate to
});
