import React from 'react';
import Image from 'next/image';
import styles from '@styles/RecoveryPassword.module.scss'

const RecoveryPassword = () => {
    return(
        <div className={styles.PasswordRecovery}>
            <div className={styles['PasswordRecovery-container']}>
                <Image src="logo/logo_yard_sale.svg" alt="logo" className={styles.logo} />
                <h1 className={styles.title}>Email has been sent!</h1>
                <p className={styles.subtitle}>
                    Please check your inbox for instructions on how to reset the password
                </p>
                <form action="/" className={styles.form}>
					<label htmlFor="email" className={styles.label}>Email address</label>
					<input type="text" id="email" className={`${styles['input']} ${styles['input-email']}`} />
					<input type="submit" value="Confirm" className={`${styles['primary-button']} ${styles['login-button']}`} />
				</form>
            </div>
        </div>

    );
}

export default RecoveryPassword;