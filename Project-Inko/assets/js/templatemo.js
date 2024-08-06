'use strict';
$(document).ready(function() {


});


// Get the button
let scrollToTopBtn = document.getElementById("scrollToTopBtn");

// When the user scrolls, check scroll position
window.addEventListener('scroll', function() {
    scrollFunction();
});

function scrollFunction() {
    // Get the current scroll position
    const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

    // If user scrolls down more than 20px, show the button
    if (scrollPosition > 20) {
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }

    // Get the height of the document including scrollbars
    const documentHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );

    // Calculate how far from the bottom the user is
    const scrollDistanceFromBottom = documentHeight - (scrollPosition + window.innerHeight);

    // If user has scrolled all the way to the top, hide the button with fade out animation
    if (scrollPosition === 0) {
        scrollToTopBtn.classList.add("hide");
    } else {
        scrollToTopBtn.classList.remove("hide");
    }
}

// When the user clicks on the button, scroll to the top of the document
scrollToTopBtn.onclick = function(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

document.addEventListener("DOMContentLoaded", function() {
    // Simulate loading time (you can remove this in production)
    setTimeout(function() {
        // Remove loading screen
        document.getElementById('loadingScreen').classList.add('loaded');
        
        // Show main content
        document.getElementById('mainContent').classList.add('loaded');
    }, 500); // Adjust loading time as needed (2000ms = 2 seconds)
});

document.querySelectorAll('.toggle-password').forEach(toggleIcon => {
    toggleIcon.addEventListener('click', function () {
      const input = this.previousElementSibling;
      const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
      input.setAttribute('type', type);
      this.classList.toggle('bx-show');
      this.classList.toggle('bx-hide');
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    var currentLocation = window.location.pathname.split('/').pop();
    var navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(function(link) {
        if (link.getAttribute('href') === currentLocation) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
