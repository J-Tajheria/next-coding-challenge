'use client';
import { useState } from 'react';
import styles from './page.module.css'
import clothingItems from "./data/products.json"
import Card from '@/app/components/card'
import Basket from '@/app/components/basket'


export default function Home() {
  const [items, setItems] = useState<{name: string, quantity: number, price: number}[]>([]);
  const [itemCount, setItemCount] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<Boolean>(false);

  const toggleVisibility = () => {
    setIsVisible(prevState => !prevState);
  }

  const addToCart = (product: string, productPrice: number) => {
    setItems(prevItems => {
      let found = false;
  
      const updated = prevItems.map(item => {
        if(item.name === product){
          found = true;
          return {...item, quantity: item.quantity + 1}
        }
        return item;
      });
  
      return found 
        ? updated
        : [...prevItems, {name: product, quantity:1, price: productPrice}]
    });
  
    setItemCount((prev) => prev + 1);
  };

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
          <button className={styles.basket} onClick={toggleVisibility}>Basket: {itemCount} items</button>
          {isVisible && (
            <div className={styles.basketDropdown}>
              {items.map((item) => (
                <Basket
                  key={item.name}
                  productName={item.name}
                  productQuantity={item.quantity}
                />
              ))}
              <p>Total £{basketTotal}</p>
          </div>
        )}
        </div>
      </div>

      <div className={styles.grid}>
        {clothingItems.map((item) => (
          <Card key={item.name} productName={item.name} productNamePrice={item.price} onAdd={addToCart}/>
        ))}
      </div>
    </main>
  )
}
