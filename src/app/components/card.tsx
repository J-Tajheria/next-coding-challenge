'use client';
import styles from '@/app/page.module.css'

type Props = {
    productName: string;
    productNamePrice: number;
    onAdd: (product: string, productPrice: number) => void;
};

export default function Card({ productName, productNamePrice, onAdd }: Props) {

    return (
        <div className={styles.card}>
            <div key={productName}>
                <h4>{productName}</h4>
                <p>£{productNamePrice}</p>
            </div>
        <button onClick={() => onAdd(productName, productNamePrice)}>Add to Basket</button>
        </div>
    );
}