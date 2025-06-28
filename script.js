function addToCart(productName) {
  alert(`${productName} added to cart!`);
}

// --- Contact Form Validation (already present) ---
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

// --- Carousel (already present) ---
const images = ["images/tshirt.jpg", "images/shoes.jpg", "images/smartphone.jpg", "images/television.jpeg"];
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

// --- Joke API (already present) ---
function getJoke() {
  fetch("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" }
  })
    .then(response => response.json())
    .then(data => {
      document.getElementById("jokeText").textContent = data.joke;
    })
    .catch(() => {
      document.getElementById("jokeText").textContent = "Oops! Couldn't fetch a joke.";
    });
}

// --- Product Data ---
const products = [
  { name: "Comfort Fit T-Shirt", price: 499, category: "clothing", img: "images/tshirt.jpg" },
  { name: "Running Shoes", price: 1999, category: "clothing", img: "images/shoes.jpg" },
  { name: "Smartphone Pro Max", price: 12999, category: "electronics", img: "images/smartphone.jpg" },
  { name: "Television", price: 20999, category: "electronics", img: "images/television.jpeg" }
];

function displayProducts(items) {
  const container = document.getElementById("productList");
  container.innerHTML = "";
  items.forEach(product => {
    const div = document.createElement("div");
    div.className = "product-card";
    div.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Price: ₹${product.price}</p>
      <button onclick="addToCart('${product.name}')">Add to Cart</button>
    `;
    container.appendChild(div);
  });
}

function updateProducts() {
  const category = document.getElementById("categoryFilter").value;
  const sortOption = document.getElementById("sortOption").value;

  let filtered = products;

  if (category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }

  if (sortOption === "priceAsc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortOption === "priceDesc") {
    filtered.sort((a, b) => b.price - a.price);
  }

  displayProducts(filtered);
}

// Event listeners
document.getElementById("categoryFilter").addEventListener("change", updateProducts);
document.getElementById("sortOption").addEventListener("change", updateProducts);

// Initial display
displayProducts(products);
