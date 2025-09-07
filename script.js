// Mobile menu toggle
const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector("nav ul");

toggle.addEventListener("click", () => {
    menu.classList.toggle("show");
    toggle.textContent = menu.classList.contains("show") ? "✖" : "☰";
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('nav') && menu.classList.contains('show')) {
        menu.classList.remove('show');
        toggle.textContent = "☰";
    }
});

// WhatsApp function
function sendWhatsApp(button) {
    const phone = "919866618836";
    const product = button.closest(".product");
    
    if (product) {
        const img = product.querySelector("img").src;
        const name = product.querySelector("h3").innerText;
        const price = product.querySelector(".product-price").innerText;
        const message = encodeURIComponent(
            `Hello, I am interested in this prdouct:\n\n*service:* ${name}\n*Image:* ${img}`
        );
        window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
    } else {
        const message = encodeURIComponent("Hello, I'm interested in your products and services. Can you please send me more information?");
        window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
    }
}

// Add to cart functionality (for future implementation)
function addToCart(productId, productName, productPrice, productImage) {
    // This would be implemented when you add cart functionality
    console.log(`Added to cart: ${productName}`);
    alert(`${productName} has been added to your cart!`);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

 // Thumbnail swap logic
    document.querySelectorAll('.set').forEach(set => {
      const mainImg = set.querySelector('.main');
      const thumbs = set.querySelectorAll('.thumb');

      thumbs.forEach(thumb => {
        thumb.addEventListener('click', () => {
          let temp = mainImg.src;
          mainImg.src = thumb.src;
          thumb.src = temp;
        });
      });
    });