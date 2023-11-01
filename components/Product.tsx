import React, { useEffect, useState } from 'react';

interface Review {
  user: string;
  date: string;
  review: string;
}

interface ProductProps {
  sku: string;
  setCartCount: React.Dispatch<React.SetStateAction<number>>;
}

interface ProductData {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  imageUrl: string;
  reviews: Review[];
}

const Product: React.FC<ProductProps> = ({ sku, setCartCount }) => {
  const [product, setProduct] = useState<ProductData | null>(null);

  useEffect(() => {
    fetch(`/api/products/${sku}`)
      .then(response => response.json())
      .then(data => setProduct(data));
  }, [sku]);

  const handleAddToCart = () => {
    fetch('/api/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: product?.id }),
    }).then(() => setCartCount(prevCount => prevCount + 1));
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col bg-white shadow-lg rounded-lg max-w-md mx-auto">
      <div className="flex-1 px-6 py-4">
        <h2 className="text-xl font-semibold text-gray-900">{product.name}</h2>
        <p className="text-base text-gray-600">{product.description}</p>
      </div>
      <div className="px-6 py-3 bg-gray-100">
        <span className="text-sm text-gray-600">${product.price}</span>
      </div>
      <div className="px-5 py-3">
        <button onClick={handleAddToCart} className="w-full py-2 px-4 bg-indigo-700 text-white rounded hover:bg-indigo-600">Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;