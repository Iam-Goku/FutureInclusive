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
