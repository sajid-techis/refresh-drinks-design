import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';
import cross from '../assets/img/cross.svg';
import CartProducts from '../components/CartProducts';
import { fetchCarts } from '../reducks/cart/operations';
import { getCarts } from '../reducks/cart/selectors';
import { clearCheckoutOrderErrorAction } from '../reducks/order/actions';

function Cart() {
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const carts = getCarts(selector);
    const history = useHistory();
    const isEmpty = carts.results && carts.results.length > 0 ? false : true;

    useEffect(() => {
        dispatch(fetchCarts());
        // eslint-disable-next-line
    }, []);
    return (
        <div>
            <Header />
            <section className="main-wrapper">
                <div className="cart">
                    <p className="title">My Cart(s)</p>
                    {isEmpty && (
                        <>
                            <p>Cart is empty. Please go to shopping in order to add product to cart.</p>
                            <button onClick={() => history.push('/')} className="custom-btn">
                                Go to Shopping
                            </button>
                        </>
                    )}
                    <section class="wish-list">
                        <p>Wish List</p>
                        <div class="wish-list-table">
                            <table>
                                <tr>
                                    <th>Product</th>
                                    <th>Categoty</th>
                                    <th>Amount</th>
                                    <th>Price</th>
                                </tr>
                                {!isEmpty && carts.results.map(cart => <CartProducts key={cart.id} cart={cart} />)}
                            </table>
                        </div>
                    </section>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Cart;
