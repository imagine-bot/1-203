import type { NextApiRequest, NextApiResponse } from 'next'

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

// Mock data
let cartItems: CartItem[] = []

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CartItem[] | { message: string }>
) {
  if (req.method === 'POST') {
    const { id } = req.body
    // In a real application, you would fetch the product details from a database
    const product = { id, name: `Product ${id}`, price: 100, quantity: 1 }
    cartItems.push(product)
    res.status(200).json(cartItems)
  } else if (req.method === 'GET') {
    res.status(200).json(cartItems)
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}