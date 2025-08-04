const productContainer = document.getElementById('products');
const cartContainer = document.getElementById('cart');

async function fetchProducts() {
  const res = await fetch('http://localhost:3000/api/products');
  const products = await res.json();

  products.forEach(p => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <img src="http://localhost:3000${p.imageUrl}" alt="${p.name}" />
      <h3>${p.name}</h3>
      <p>${p.description}</p>
      <p><strong>₹${p.price}</strong></p>
      <button onclick="addToCart('${p._id}')">Add to Cart</button>
    `;
    productContainer.appendChild(div);
  });
}

async function addToCart(productId) {
  await fetch('http://localhost:3000/api/cart', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ productId, quantity: 1 })
  });
  fetchCart();
}

async function fetchCart() {
  cartContainer.innerHTML = '';
  const res = await fetch('http://localhost:3000/api/cart');
  const items = await res.json();
  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.productId.name} x ${item.quantity}`;
    cartContainer.appendChild(li);
  });
}

fetchProducts();
fetchCart();
