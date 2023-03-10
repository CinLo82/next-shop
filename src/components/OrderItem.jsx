import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '@context/AppContext';
import close from '@icons/icon_close.png';
import styles from '@styles/OrderItem.module.scss';


const OrderItem = ({ product, indexValue }) => {
    const { removeFromCart } = useContext(AppContext);

    const handleRemove = (index) => {
        removeFromCart(index);
    }
    return(
        <div className={styles.OrderItem}>
            <figure>
                <Image 
                    src={product?.images[0]} 
                    alt={product?.title} 
                    width={70}
                    height={70}
                />
            </figure>
            <p>{product?.title}</p>
            <p>${product?.price}</p>
            <Image 
                src={ close } 
                alt="close" 
                onClick={() => handleRemove(indexValue)}
                width={15}
                height={15}
            />
        </div>
    );
}

export default OrderItem;