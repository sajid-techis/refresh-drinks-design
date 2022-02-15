import React from 'react';
import favorite from '../assets/img/favorite.svg';
import { useDispatch } from 'react-redux';

import { addCart, removeCart, updateCart } from '../reducks/cart/operations';

function Products(props) {
    const { id, name, price, image } = props.item;
    let quantity = props.cart ? props.cart.quantity : 0;
    const cartId = props.cart ? props.cart.id : 0;
    console.log(quantity);
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(addCart({ quantity: 1, product: id }));
        console.log('add');
    };

    const increaseCart = () => {
        ++quantity;
        dispatch(updateCart({ quantity }, cartId));
        console.log('increase');
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
                            <button onClick={addToCart}>ADD +</button>
                        )}
                    </div>
                </li>
            </ul>
        </>
    );
}

export default Products;
