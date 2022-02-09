import React from 'react';
import mainbackground from '../assets/img/main-background.png';
import left_arrow from '../assets/img/left-arrow.svg';
import favorite from '../assets/img/favorite.svg';
import arrow_right from '../assets/img/arrow-right.svg';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useDispatch } from 'react-redux';

import { addCart, removeCart, updateCart } from '../reducks/cart/operations';

function Products(props) {
    const { id, name, price, image } = props.products;
    let quantity = props.cart ? props.cart.quantity : 0;
    const cartId = props.cart ? props.cart.id : 0;

    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(addCart({ quantity: 1, product: id }));
    };

    const increaseCart = () => {
        ++quantity;
        dispatch(updateCart({ quantity }, cartId));
    };

    const decreaseCart = () => {
        --quantity;
        if (quantity <= 0) {
            dispatch(removeCart(cartId));
        }
        dispatch(updateCart({ quantity }, cartId));
    };
    return (
        <>
            <Header />
            
            <section class="just-for-you">
                <div class="heading">
                    <p>Selected just for you</p>
                </div>
                <div class="item-container">
                    <img src={left_arrow} alt="left-arrow" />
                    <div class="item-flex">
                        <div class="item">
                            <div class="item-background">
                                <div class="favorites">
                                    <img src={favorite} alt="favorite" />
                                </div>
                                <div class="item-image">
                                    <img src={image} alt="fanta-naranja" />
                                </div>
                            </div>
                            <div class="item-bottom">
                                <div class="item-price">
                                    <p>{name}</p>
                                    <span>${price}</span>
                                    {quantity > 0 ? (
                                        <div>
                                            <span onClick={decreaseCart}>-</span>
                                            <span>{quantity}</span>
                                            <span onClick={increaseCart}>+</span>
                                        </div>
                                    ) : (
                                        <button onClick={addToCart}>ADD TO CART</button>
                                    )}
                                </div>
                            </div>
                        </div>
                        <img src={arrow_right} alt="arrow-right" />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Products;
