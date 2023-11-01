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
  name: string;
  description: string;
  price: number;
  quantity: number;
  reviews: Review[];
}

const Product: React.FC<ProductProps> = ({ sku }) => {
  const [product, setProduct] = useState<ProductData | null>(null);

  useEffect(() => {
    fetch(`/api/products/${sku}`)
      .then(response => response.json())
      .then(data => setProduct(data));
  }, [sku]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col bg-white shadow-lg rounded-lg max-w-md mx-auto">
      <div className="flex justify-center pt-4">
        <img className="h-48 w-full object-cover" src="https://source.unsplash.com/random" alt={product.name} />
      </div>
      <div className="px-5 py-3">
        <h3 className="text-gray-700 uppercase">{product.name}</h3>
        <span className="text-gray-500 mt-2">${product.price}</span>
      </div>
      <div className="px-5 py-2">
        <h3 className="text-gray-700">Description</h3>
        <p className="text-gray-500 text-sm">{product.description}</p>
      </div>
      <div className="px-5 py-2">
        <h3 className="text-gray-700">SKU</h3>
        <p className="text-gray-500 text-sm">{sku}</p>
      </div>
      <div className="px-5 py-2">
        <h3 className="text-gray-700">Quantity Available</h3>
        <p className="text-gray-500 text-sm">{product.quantity}</p>
      </div>
      <div className="px-5 py-2">
        <h3 className="text-gray-700">Reviews</h3>
        {product.reviews.map((review, index) => (
          <div key={index} className="text-gray-500 text-sm">
            <p>{review.user} ({review.date}): {review.review}</p>
          </div>
        ))}
      </div>
      <div className="px-5 py-3">
        <button className="w-full py-2 px-4 bg-indigo-700 text-white rounded hover:bg-indigo-600">Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;