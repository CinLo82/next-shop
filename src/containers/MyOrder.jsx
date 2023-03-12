import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext';
import flechita from '@icons/flechita.svg';
import styles from '@styles/MyOrder.module.scss';

const MyOrder = () => {
    const { state } = useContext(AppContext);

    const sumTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = state.cart.reduce(reducer, 0);
        return sum;
    }
    return(
        <aside className={styles.MyOrder}>
            <div className={styles['MyOrder-container']}>
                <Image src={ flechita } alt="arrow" />
                <p className={styles.Title}>My order</p>
            </div>
            <div className={styles['MyOrder-content']}>
                {state.cart.map((product, index) => (
                    <OrderItem 
                        indexValue={index} 
                        key={index}
                        product={product}
                    />
                ))}
                <div className={styles.Order}>
                    <p>
                        <span>Total</span>
                    </p>
                    <p>${sumTotal()}</p>
                </div>
                <Link className={styles['primary-button']} href="/Checkout">
                    Checkout
                </Link>
            </div>
        </aside>
    );
}

export default MyOrder;