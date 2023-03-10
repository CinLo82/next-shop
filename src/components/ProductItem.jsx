import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '@context/AppContext';
import addToCartIcons from '@icons/bt_add_to_cart.svg';
import styles from '@styles/ProductItem.module.scss';

const ProductItem = ({product}) => {
    const { addToCart } = useContext(AppContext);

    const handleClick = item => {
        addToCart(item);
    }

    return(
        <div className={styles.ProductItem}>
            <Image 
                loader={() => product.images[0]} 
                src={product.images[0]} 
                alt={product.title} 
                className={styles['product-img']}
                width={240}
                height={240}
                priority
                
            />
            <div className={styles['product-info']}>
                <div>
                    <p>${product.price}</p>
                    <p>{product.title}</p>
                </div>
                <figure  onClick={() => handleClick(product)}>
                    <Image 
                        width='100%'
                        height='100%'
                        priority 
                        src={ addToCartIcons } 
                        alt='add to cart' 
                    />
                </figure>
            </div>
        </div>
    );
}

export default ProductItem;