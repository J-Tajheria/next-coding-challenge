'use client';
import styles from '@/app/page.module.css'

// Props for Basket component representing a single product
type Props = {
    productName: string;
    productQuantity: number;
    productNamePrice?: number;
};


// Displays a single item in the basket with its quantity
export default function Basket({ productName, productQuantity }: Props) {

    return (
      // Individual basket item
      <li className={styles.basketItem}>
        <span>{productName}</span>
        <span>Qty: {productQuantity}</span>
      </li>
    );
  }