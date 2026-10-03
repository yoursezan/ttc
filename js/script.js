// Display Real-time Date & Time (Req #7)
function updateDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString();
    const element = document.getElementById("current-date-time");
    if (element) {
        element.innerText = dateTimeString;
    }
}

// Collapsible FAQ Functionality (Req #11 & #d-i)
function toggleFaq(index) {
    const answer = document.getElementById('faq-ans-' + index);
    if (answer.style.display === "block") {
        answer.style.display = "none";
    } else {
        // Hide all answers first
        const allAnswers = document.querySelectorAll('.faq-answer');
        allAnswers.forEach(item => item.style.display = "none");
        answer.style.display = "block";
    }
}

// Contact Form Validation & Confirmation Popup (Req #3, #c-iii, #c-iv)
function validateContactForm(event) {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Mobile number validation (Digits only, exactly 11 digits)
    const phonePattern = /^[0-9]{11}$/;
    if (!phonePattern.test(phone)) {
        alert("Mobile number must contain exactly 11 digits and numbers only.");
        return false;
    }

    // Confirmation Popup Window Message
    alert("Thank you! Your message has been submitted successfully to TTC.");
    document.getElementById('contactForm').reset();
    return true;
}

// Initialize clock on page load
document.addEventListener("DOMContentLoaded", function () {
    setInterval(updateDateTime, 1000);
    updateDateTime();
});