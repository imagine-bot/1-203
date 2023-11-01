import React, { useState, useEffect } from 'react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartProps {
  cartCount: number;
  setCartCount: React.Dispatch<React.SetStateAction<number>>;
}

const Cart: React.FC<CartProps> = ({ cartCount, setCartCount }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    fetch('/api/cart')
      .then(response => response.json())
      .then(data => {
        setCartItems(data);
        setCartCount(data.length);
      });
  }, [setCartCount]);

  return (
    <div className="fixed top-0 right-0 p-4">
      <button className="bg-blue-500 text-white rounded px-4 py-2">
        Cart ({cartCount})
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