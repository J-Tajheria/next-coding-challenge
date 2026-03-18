'use client';
import { useState } from 'react';
import styles from './page.module.css'
import clothingItems from "./data/products.json"
import Card from '@/app/components/card'
import Basket from '@/app/components/basket'

// Home page: displays products and manages basket state
export default function Home() {
  // Basket state: stores unique products with their quantities and prices
  const [items, setItems] = useState<{name: string, quantity: number, price: number}[]>([]);
  // Controls whether the basket dropdown is visible
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Toggle basket visibility
  const toggleVisibility = () => {
    setIsVisible(prevState => !prevState);
  }

  // Count the total number of items in the shopping basket
  const totalItemCount = items.reduce((total, item) => total + item.quantity, 0);

  /*
  Adds a product to the basket.
  If the product already exists, increment its quantity.
  Otherwise, add it as a new item.
  */
  const addToCart = (product: string, productPrice: number) => {
    setItems(prevItems => {
      let found = false;
      
      // Check if item already exists and update quantity
      const updated = prevItems.map(item => {
        if(item.name === product){
          found = true;
          return {...item, quantity: item.quantity + 1}
        }
        return item;
      });
  
      // If item is not found, add as new product
      return found 
        ? updated
        : [...prevItems, {name: product, quantity:1, price: productPrice}]
    });
  };

  // Accumulates the total price of items in the shopping basket
  const basketTotal = items.reduce((total, item) => {
    return total + (item.quantity * item.price);
  }, 0)

  return (
    <main className={styles.main}>
      <div className={styles.description} >
        <p>
          Michael&apos;s Amazing Web Store
        </p> 
        
        <div className={styles.basketWrapper}>
          {/* Basket toggle button shows total number of items in cart*/}
          <button className={styles.basket} onClick={toggleVisibility}>Basket: {totalItemCount} {totalItemCount === 1 ? 'item' : 'items'}</button>
          {/* Dropdown only renders when basket is visible, it is triggered by the button above */}
          {isVisible && (
            <ul className={styles.basketDropdown}>
              {items.map((item) => (
                <Basket
                  key={item.name}
                  productName={item.name}
                  productQuantity={item.quantity}
                />
              ))}
               <p>Total £{basketTotal}</p>
            </ul>
          )}
        </div>
      </div>
      {/* Map through product data and display each item as a Card component */}
      <div className={styles.grid}>
        {clothingItems.map((item) => (
          <Card key={item.name} productName={item.name} productNamePrice={item.price} onAdd={addToCart}/>
        ))}
      </div>
    </main>
  )
}
