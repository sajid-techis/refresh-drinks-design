import React, { useEffect } from 'react';
import favorite from '../assets/img/favorite.svg';
import { useDispatch, useSelector } from 'react-redux';

import { addCart, removeCart, updateCart } from '../reducks/cart/operations';
import { addFavorites, fetchFavorites } from '../reducks/favourite/operations';
import { getFavorites } from '../reducks/favourite/selectors';
import { fetchProducts } from '../reducks/product/operations';
import { getProducts } from '../reducks/product/selectors';

function Products(props) {
    console.log(props);
    const { id, name, price, image } = props.product;
    let quantity = props.cart ? props.cart.quantity : 0;
    const cartId = props.cart ? props.cart.id : 0;
    console.log(quantity);
    const selector = useSelector(state => state);
    const favourite = getFavorites(selector);
    const product = getProducts(selector);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
        dispatch(addFavorites({ product: props.id }));
        dispatch(fetchFavorites());
    }, []);
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
    const clickFavourite = image => {
        dispatch(addFavorites(image));
    };
    return (
        <>
            <ul class="item-flex">
                <li class="item">
                    <div class="item-background">
                        <div key={product.id} class="favorites">
                            {product && favourite && Object.values(favourite).length === 0 && (
                                <img src={favorite} alt="favorite" onClick={() => clickFavourite(image)} />
                            )}
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
