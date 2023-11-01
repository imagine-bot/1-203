import type { NextApiRequest, NextApiResponse } from 'next'

interface Review {
  user: string;
  date: string;
  review: string;
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

// Mock data
const products: ProductData[] = [
  {
    id: "123456789",
    name: "Product 1",
    description: "This is product 1",
    price: 100,
    quantity: 10,
    imageUrl: "https://source.unsplash.com/random",
    reviews: [
      {
        user: "User 1",
        date: "2022-01-01",
        review: "Great product!"
      }
    ]
  },
  // Add more products as needed
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProductData | { message: string }>
) {
  const { id } = req.query

  const product = products.find(product => product.id === id)

  if (!product) {
    res.status(404).json({ message: 'Product not found' })
    return
  }

  res.status(200).json(product)
}