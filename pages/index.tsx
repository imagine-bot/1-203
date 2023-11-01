import { useState } from 'react';
import Product from '../components/Product'
import Cart from '../components/Cart'

export default function Home() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Product sku="123456789" setCartCount={setCartCount} />
      <Cart cartCount={cartCount} setCartCount={setCartCount} />
    </main>
  )
}