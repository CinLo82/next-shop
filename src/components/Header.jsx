import { useState, useContext } from 'react';
import Image from 'next/image';
import Menu from '@components/Menu';
import AppContext from '@context/AppContext';
import MyOrder from '@containers/MyOrder';
import menu from '@icons/icon_menu.svg';
import MenuMobile from '@components/MenuMobile';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import styles from '@styles/Header.module.scss';


const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [toggleOrders, setToggleOrders] = useState(false);
    const [toggleMenuMobile, setToggleMenuMobile] = useState(false);

    const { state } = useContext(AppContext);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    const handleToggleOrders = () => {
        setToggleOrders(!toggleOrders);
    }

    const handleToggleMenuMobile = () => {
        setToggleMenuMobile(!toggleMenuMobile);
    }

    return(
        <nav className={styles.Nav}>
            <Image src={ menu } alt="menu" className={styles.Menu} onClick={handleToggleMenuMobile} />
            <div className={styles['navbar-left']}>
                <Image src={ logo } alt="logo" className={styles['nav-logo']}/>
                <ul>
                <li>
                    <a href="/">All</a>
                </li>
                <li>
                    <a href="/">Clothes</a>
                </li>
                <li>
                    <a href="/">Electronics</a>
                </li>
                <li>
                    <a href="/">Furnitures</a>
                </li>
                <li>
                    <a href="/">Toys</a>
                </li>
                <li>
                    <a href="/">Others</a>
                </li>
                </ul>
            </div>
            <div className={styles['navbar-right']}>
                <ul>
                <li 
                    className={styles['navbar-email']} 
                    onClick={handleToggle}
                >
                    platzi@example.com
                </li>
                <li 
                    className={styles['navbar-shopping-cart']}
                    onClick={handleToggleOrders}
                >
                    <Image src={ shoppingCart } alt="shopping cart" />
                    {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
                </li>
                </ul>
            </div>
            {toggle && <Menu />}
            {toggleOrders && <MyOrder />}
            {toggleMenuMobile && <MenuMobile />}
        </nav>
    );
}

export default Header;