import Image from 'next/image'
import { Inter } from 'next/font/google'
import Product from '../components/Product'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Product 
        name="Product Name" 
        description="This is a short description of the product." 
        sku="123456789" 
        price={99.99} 
        quantity={10} 
        reviews={[
          { user: 'John Doe', date: '2022-03-01', review: 'Great product!' },
          { user: 'Jane Doe', date: '2022-03-02', review: 'I love it!' },
        ]}
      />
    </main>
  )
}