import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CartManager = () => {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/cart')
      .then(res => setCarts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Cart List</h2>
      <ul className="list-group">
        {carts.map(cart => (
          <li key={cart._id} className="list-group-item">
            User: {cart.userId?.email || 'Unknown'} - Total Items: {cart.products.length}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartManager;