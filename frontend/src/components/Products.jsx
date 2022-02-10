import React from 'react';
import mainbackground from '../assets/img/main-background.png';
import favorite from '../assets/img/favorite.svg';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useDispatch } from 'react-redux';

import { addCart, removeCart, updateCart } from '../reducks/cart/operations';

function Products(props) {
    const { id, name, price, image } = props.item;
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
    console.log(cartId);
    return (
        <>
            <ul class="item-flex">
                <li class="item">
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
                        </div>
                        {quantity > 0 ? (
                            <div className="added-cart">
                                <span onClick={decreaseCart}> - </span>
                                <span className="margin-top-4"> {quantity} </span>
                                <span onClick={increaseCart} className="margin-top-4">
                                    +
                                </span>
                            </div>
                        ) : (
                            <button onClick={addToCart}>ADD TO CART</button>
                        )}
                    </div>
                </li>
            </ul>
        </>
    );
}

export default Products;
