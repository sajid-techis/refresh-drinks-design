import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';

import { removeCart, updateCart } from '../reducks/cart/operations';
import cross from '../assets/img/cross.svg';
import { push } from 'connected-react-router';

function CartProducts(props) {
    console.log(props);
    const { image, name } = props.cart.product;
    const { total_price } = props.cart;
    console.log(total_price);
    let quantity = props.cart.quantity;
    console.log(quantity);
    const cartId = props.cart.id;
    const dispatch = useDispatch();

    const closeButton = () => {
        dispatch(push('/'));
    };

    const increaseCart = () => {
        ++quantity;
        dispatch(updateCart({ quantity }, cartId));
    };
    console.log(cartId);
    const decreaseCart = () => {
        --quantity;
        if (quantity < 1) {
            dispatch(removeCart(cartId));
        }
        dispatch(updateCart({ quantity }, cartId));
    };
    return (
        <>
            <table>
                <tr>
                    <td>
                        <div class="product">
                            <div class="circle">
                                <img src={image} alt="fanta-zero" />
                            </div>
                            <div class="product-details">
                                <span>{name}</span>
                                <p>#261311</p>
                            </div>
                        </div>
                    </td>
                    <td>Soft Drinks</td>
                    <td>
                        <div className="added-cart">
                            <span onClick={decreaseCart}> - </span>

                            <span className="margin-top-4"> {quantity} </span>
                            <span onClick={increaseCart} className="margin-top-4">
                                +
                            </span>
                        </div>
                    </td>
                    <td>${total_price}</td>
                    <td>
                        <span onClick={closeButton}>
                            <img src={cross} alt="cross" />
                        </span>
                    </td>
                </tr>
            </table>
        </>
    );
}

export default CartProducts;
