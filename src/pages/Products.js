import React, { useEffect, useState } from 'react';
import './Products.css';

function Products() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleToggleCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);
    if (exists) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems([...cartItems, product]);
    }
  };

  const getTotal = () =>
    cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="products-page">
      <h1 className="products-title">🛍 Product Listing</h1>

      <input
        type="text"
        placeholder="Search products..."
        className="search-bar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>₹ {product.price}</p>
            <button
              className={
                cartItems.find((item) => item.id === product.id)
                  ? 'remove-btn'
                  : 'add-btn'
              }
              onClick={() => handleToggleCart(product)}
            >
              {cartItems.find((item) => item.id === product.id)
                ? 'Remove'
                : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>

      <footer className="footer">
        🛒 Total Amount: ₹ {getTotal()}
      </footer>
    </div>
  );
}

export default Products;
