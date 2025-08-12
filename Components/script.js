// Contact form submission simulation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const response = document.getElementById("formResponse");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Simulate form submission
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (name && email && message) {
        response.textContent = `Thank you, ${name}! We'll be in touch soon.`;
        form.reset();
      } else {
        response.textContent = "Please fill out all fields.";
      }
    });
  }
});


document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const responseElement = document.getElementById('formResponse');
    responseElement.innerHTML = '<i class="fas fa-check-circle"></i> Thank you! Your message has been sent. We\'ll contact you soon!';
    responseElement.style.color = '#4CAF50';
    this.reset();
    responseElement.scrollIntoView({ behavior: 'smooth' });
});
