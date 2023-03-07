import React from 'react';
import Image from 'next/image';
import notFound from '@logos/notFound.jpg';
import styles from '@styles/NotFound.scss';

const NotFound = () => {
    return(
        <div className={styles.NotFound}>
            <Image src={ notFound } alt="logo" />
            <h1 className={styles.title}>OOPS... Page Not Found</h1>
            <p className={styles.subtitle}>The page are looking for no longer exist.</p>
            <a href='/' 
                className={`${styles['primary-button']} ${styles['login-button']}`}>
                Go to Homepage
            </a>
        </div>
    );
}

export default NotFound;
