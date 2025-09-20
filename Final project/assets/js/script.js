document.addEventListener('DOMContentLoaded', () => {
  
  /* ===============================
     1. Contact Form Validation
  =============================== */
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      const name = form.querySelector('input[name="name"]').value.trim();
      const email = form.querySelector('input[name="email"]').value.trim();
      const message = form.querySelector('textarea[name="message"]').value.trim();
      if (!name || !email || !message) {
        alert('Please fill in all fields.');
        e.preventDefault();
      }
    });
  }

  /* ===============================
     2. Mobile Menu Toggle
     Requires a <button class="menu-toggle">☰</button> in the header
  =============================== */
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  }

  /* ===============================
     3. Scroll Animations for Collection Cards
  =============================== */
  const cards = document.querySelectorAll('.collection-card');
  if (cards.length > 0) {
    cards.forEach(card => {
      card.style.opacity = 0;
      card.style.transform = 'translateY(30px)';
      card.style.transition = 'all 0.6s ease';
    });

    window.addEventListener('scroll', () => {
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
          card.style.opacity = 1;
          card.style.transform = 'translateY(0)';
        }
      });
    });
  }

  /* ===============================
     4. Dynamic Product Info (product.html)
  =============================== */
  const productTitle = document.getElementById('product-title');
  if (productTitle) {
    const products = {
      1: { name: 'Collection One', desc: 'Beautiful African style pieces.' },
      2: { name: 'Collection Two', desc: 'Elegant modern designs.' },
      3: { name: 'Collection Three', desc: 'Traditional fabrics.' },
      4: { name: 'Collection Four', desc: 'Limited edition pieces.' }
    };

    const id = new URLSearchParams(window.location.search).get('id');
    if (products[id]) {
      productTitle.textContent = products[id].name;
      const descPara = document.createElement('p');
      descPara.textContent = products[id].desc;
      productTitle.insertAdjacentElement('afterend', descPara);
    } else {
      productTitle.textContent = 'Product not found.';
    }
  }

});

document.addEventListener('DOMContentLoaded', () => {

  // Products data
  const products = {
    1: {name: 'Collection One', desc: 'Beautiful African style pieces.', price: 120, img: 'assets/images/collection1.jpg'},
    2: {name: 'Collection Two', desc: 'Elegant modern designs.', price: 150, img: 'assets/images/collection2.jpg'},
    3: {name: 'Collection Three', desc: 'Traditional fabrics.', price: 100, img: 'assets/images/collection3.jpg'},
    4: {name: 'Collection Four', desc: 'Limited edition pieces.', price: 180, img: 'assets/images/collection4.jpg'}
  };

  // Get URL ID
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const product = products[id];

  const productTitle = document.getElementById('product-title');
  const productDesc = document.getElementById('product-desc');
  const productPrice = document.getElementById('product-price');
  const productImage = document.getElementById('product-image');
  const cartSummary = document.getElementById('cart-summary');

  // Load product info
  if(product) {
    productTitle.textContent = product.name;
    productDesc.textContent = product.desc;
    productPrice.textContent = `Price: $${product.price}`;
    productImage.src = product.img;
    productImage.alt = product.name;
  } else {
    productTitle.textContent = 'Product not found.';
    productDesc.textContent = '';
    productPrice.textContent = '';
    productImage.style.display = 'none';
  }

  // Add to Cart functionality
  const addToCartBtn = document.getElementById('add-to-cart');
  addToCartBtn.addEventListener('click', () => {
    const qty = parseInt(document.getElementById('quantity').value);
    if(!product || qty < 1) return;
    const total = qty * product.price;
    cartSummary.textContent = `You added ${qty} x ${product.name} to your cart. Total: $${total}`;
  });

});
// Load header and footer into each page automatically
document.addEventListener('DOMContentLoaded', () => {
  // Load header
  fetch('partials/header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;
    });

  // Load footer
  fetch('partials/footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer').innerHTML = data;
    });
});
