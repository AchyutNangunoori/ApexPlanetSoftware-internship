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

const images = ["images/tshirt.jpg", "images/shoes.jpg", "images/smartphone.jpg"];
let current = 0;

function showImage(index) {
  const img = document.getElementById("carouselImage");
  img.src = images[index];
}

function nextImage() {
  current = (current + 1) % images.length;
  showImage(current);
}

function prevImage() {
  current = (current - 1 + images.length) % images.length;
  showImage(current);
}

function getJoke() {
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json"
    }
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById("jokeText").textContent = data.joke;
  })
  .catch(err => {
    document.getElementById("jokeText").textContent = "Oops! Couldn't fetch a joke.";
  });
}
