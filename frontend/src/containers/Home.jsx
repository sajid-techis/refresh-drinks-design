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

function Home() {
    const selector = useSelector(state => state);
    const dispatch = useDispatch();
    const products = getProducts(selector);

    // useEffect(() => {
    //     dispatch(fetchProducts());
    //     console.log(products);
    //     if (localStorage.getProducts('LOGIN_USER_KEY')) {
    //         dispatch(fetchCarts());
    //     }
    // }, []);
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);
    console.log(products);
    return (
        <>
            <Header />
            <MainBackground />
            <section className="item-container">
                <section class="just-for-you">
                    <div class="heading">
                        <p>Selected just for you</p>
                    </div>
                    <div class="item-container">
                        <img src={left_arrow} alt="left-arrow" />
                        <ul class="item-flex">
                            {products &&
                                products.results.map(product => (
                                    <li class="item">
                                        <Products key={product.id} item={product} />
                                    </li>
                                ))}
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
