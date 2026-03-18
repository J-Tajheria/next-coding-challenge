'use client';
import styles from '@/app/page.module.css'

type Props = {
    productName: string;
    productQuantity: number;
    productNamePrice?: number;
};

export default function Basket({ productName, productQuantity }: Props) {

    return (
        <div>
            <ul>
                <li key={productName} className={styles.basketItem}>
                    <span>{productName}</span>
                    <span>Qty: {productQuantity}</span>
                </li>
            </ul>
        </div>
    );
}