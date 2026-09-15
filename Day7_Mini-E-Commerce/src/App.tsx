import { useState } from 'react'
import './App.css'
import ProductsList from './products/ProductsList'
import type { CartItems, ProductItems } from './products/product.interfaces'
import Cart from './products/Cart';

function App() {
  const [cart, setCart] = useState<CartItems[]>([]);


  const addToCart = (product: ProductItems) => {
    const existingItem = cart.find((item) => item.id == product.id);

    if (existingItem) {
      setCart((prev) =>
        prev.map((item) =>
          item.id === product.id ?
            { ...item, quantity: item.quantity + 1 } : item
        ))
    } else {
      setCart((prev) => ([
        ...prev,
        {
          ...product,
          quantity: 1
        }
      ]));
    }
  };

  const increaseQuantity = (id: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ?
          { ...item, quantity: item.quantity + 1 } :
          item
      ))
  };


  const decreaseQuantity = (id: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ?
          { ...item, quantity: Math.max(1, item.quantity - 1) }
          :
          item
      )
    )
  }

  return (
    <>
      <ProductsList addToCart={addToCart}></ProductsList>
      <Cart cart={cart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity}></Cart>
    </>
  )
}

export default App
