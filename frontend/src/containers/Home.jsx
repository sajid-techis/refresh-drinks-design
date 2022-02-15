import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MainBackground from '../components/MainBackground';
import { fetchProducts } from '../reducks/product/operations';
import { getProducts } from '../reducks/product/selectors';
import { fetchCarts } from '../reducks/cart/operations';
import CartProducts from '../components/CartProducts';
import Products from '../components/Products';
import left_arrow from '../assets/img/left-arrow.svg';
import arrow_right from '../assets/img/arrow-right.svg';
import { getCarts } from '../reducks/cart/selectors';

function Home() {
    const selector = useSelector(state => state);
    const dispatch = useDispatch();
    const products = getProducts(selector);
    const carts = getCarts(selector);

    useEffect(() => {
        dispatch(fetchProducts());
        if (localStorage.getItem('LOGIN_USER_KEY')) {
            dispatch(fetchCarts());
        }
    }, []);
    console.log(products);
    console.log(carts);
    return (
        <>
            <Header />
            <MainBackground />
            <section className="item-container">
                <section className="just-for-you">
                    <div className="heading">
                        <p>Selected just for you</p>
                    </div>
                    <div className="item-container">
                        <img src={left_arrow} alt="left-arrow" />
                        <ul className="item-flex">
                            {products &&
                                products.results.map(product => {
                                    const cart = carts.results.find(c => c.product.id === product.id) || null;
                                    return (
                                        <li className="item" key={product.id}>
                                            <Products key={product.id} item={product} cart={cart} />
                                        </li>
                                    );
                                })}
                            <img src={arrow_right} alt="arrow-right" />
                        </ul>
                    </div>
                </section>
            </section>
            <Footer />
        </>
    );
}

export default Home;
