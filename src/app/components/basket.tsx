'use client';
import styles from '@/app/page.module.css'

type Props = {
    productName: string;
    productQuantity: number;
    productNamePrice?: number;
};

export default function Basket({ productName, productQuantity }: Props) {

    return (
        <div className={styles.card}>
            <ul>
                <li key={productName}>{productName} - Qty: {productQuantity}</li>
            </ul>
        </div>
    );
}