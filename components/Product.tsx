import React from 'react';

interface ProductProps {
  name: string;
  description: string;
  sku: string;
  price: number;
  quantity: number;
  reviews: number;
}

const Product: React.FC<ProductProps> = ({ name, description, sku, price, quantity, reviews }) => {
  return (
    <div className="flex flex-col bg-white shadow-lg rounded-lg max-w-md mx-auto">
      <div className="flex justify-center pt-4">
        <img className="h-48 w-full object-cover" src="https://source.unsplash.com/random" alt={name} />
      </div>
      <div className="px-5 py-3">
        <h3 className="text-gray-700 uppercase">{name}</h3>
        <span className="text-gray-500 mt-2">${price}</span>
      </div>
      <div className="px-5 py-2">
        <h3 className="text-gray-700">Description</h3>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
      <div className="px-5 py-2">
        <h3 className="text-gray-700">SKU</h3>
        <p className="text-gray-500 text-sm">{sku}</p>
      </div>
      <div className="px-5 py-2">
        <h3 className="text-gray-700">Quantity Available</h3>
        <p className="text-gray-500 text-sm">{quantity}</p>
      </div>
      <div className="px-5 py-2">
        <h3 className="text-gray-700">Reviews</h3>
        <p className="text-gray-500 text-sm">{reviews}</p>
      </div>
      <div className="px-5 py-3">
        <button className="w-full py-2 px-4 bg-indigo-700 text-white rounded hover:bg-indigo-600">Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;