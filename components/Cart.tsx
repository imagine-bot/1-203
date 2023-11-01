import React, { useState } from 'react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleCartClick = () => {
    fetch('/api/cart')
      .then(response => response.json())
      .then(data => setCartItems(data));
  };

  return (
    <div className="fixed top-0 right-0 p-4">
      <button onClick={handleCartClick} className="bg-blue-500 text-white rounded px-4 py-2">
        Cart ({cartItems.length})
      </button>
      {cartItems.length > 0 && (
        <div className="mt-2 bg-white shadow-lg rounded-lg p-4">
          {cartItems.map(item => (
            <div key={item.id} className="flex justify-between items-center mb-2">
              <span>{item.name}</span>
              <span>${item.price}</span>
              <span>x{item.quantity}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;