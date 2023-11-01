import React, { useEffect, useState } from 'react';

interface Review {
  user: string;
  date: string;
  review: string;
}

interface ProductProps {
  sku: string;
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

const Product: React.FC<ProductProps> = ({ sku }) => {
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
    });
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  // Rest of the component remains the same...

  return (
    <div className="flex flex-col bg-white shadow-lg rounded-lg max-w-md mx-auto">
      {/* ... */}
      <div className="px-5 py-3">
        <button onClick={handleAddToCart} className="w-full py-2 px-4 bg-indigo-700 text-white rounded hover:bg-indigo-600">Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;