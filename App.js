import React, { useState } from "react";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Product A", price: 100 },
    { id: 2, name: "Product B", price: 150 },
    { id: 3, name: "Product C", price: 200 },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="app">
      <h1>E-Commerce Store</h1>
      <div className="products">
        <h2>Products</h2>
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product">
              <p>{product.name}</p>
              <p>Price: ₹{product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>

      <div className="cart">
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  {item.name} - ₹{item.price}{" "}
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </li>
              ))}
            </ul>
            <h3>Total: ₹{calculateTotal()}</h3>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
