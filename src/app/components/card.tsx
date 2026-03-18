'use client';
import styles from '@/app/page.module.css'

// Props for Card component representing a single product
type Props = {
    productName: string;
    productNamePrice: number;
    onAdd: (product: string, productPrice: number) => void;
};

// Displays a product card with name, price, and an "Add to Basket" action
export default function Card({ productName, productNamePrice, onAdd }: Props) {

    return (
        <div className={styles.card}>
            {/* Product details */}
            <div key={productName}>
                <h4>{productName}</h4>
                <p>£{productNamePrice}</p>
            </div>
        {/* Adds this product to the basket when clicked */}
        <button onClick={() => onAdd(productName, productNamePrice)}>Add to Basket</button>
        </div>
    );
}