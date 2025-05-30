function addToCart(productName) {
  alert(`${productName} added to cart!`);
}

// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const msg = document.getElementById("formMsg");

  if (!name || !email || !message) {
    msg.textContent = "All fields are required.";
    msg.style.color = "red";
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    msg.textContent = "Please enter a valid email.";
    msg.style.color = "red";
    return;
  }

  msg.textContent = "Thanks! Your message has been sent.";
  msg.style.color = "green";
  this.reset();
});
