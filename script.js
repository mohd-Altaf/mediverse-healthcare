

        // WhatsApp function
        function sendWhatsApp(button) {
            const phone = "919866618836";
            const product = button.closest(".product");
            
            if (product) {
                const img = product.querySelector("img").src;
                const name = product.querySelector("h3").innerText;
                const price = product.querySelector(".product-price").innerText;
                const message = encodeURIComponent(
                    `Hello, I am interested in this product:\n\n*Product:* ${name}\n*Image:* ${img}`
                );
                window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
            } else {
                const message = encodeURIComponent("Hello, I'm interested in your products and services. Can you please send me more information?");
                window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
            }
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


// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector("nav ul");
    
    // Toggle menu when button is clicked
    toggle.addEventListener("click", function(e) {
        e.stopPropagation();
        menu.classList.toggle("show");
        toggle.textContent = menu.classList.contains("show") ? "✖" : "☰";
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('nav') && menu.classList.contains('show')) {
            menu.classList.remove('show');
            toggle.textContent = "☰";
        }
    });
    
    // Close menu when a link is clicked (for single page applications)
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function() {
            menu.classList.remove('show');
            toggle.textContent = "☰";
        });
    });
    
    // Prevent clicks inside the menu from closing it
    menu.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});


// Add this to your existing script.js
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
});





// Image zoom functionality
document.addEventListener('DOMContentLoaded', function () {
  const overlay = document.createElement('div');
  overlay.id = 'zoom-overlay';
  overlay.innerHTML = '<img src="" alt="">';
  document.body.appendChild(overlay);

  const overlayImg = overlay.querySelector('img');

  document.querySelectorAll('img.zoomable').forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => {
      overlayImg.src = img.src;
      overlayImg.alt = img.alt;   // ✅ pass along the alt text
      overlay.style.display = 'flex';
    });
  });

  overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
  });
});
