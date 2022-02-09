import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import cross from '../assets/img/cross.svg';

function Cart() {
    return (
        <div>
            <Header />
            <div class="wish-list-table">
                <table>
                    <tr>
                        <th>Product</th>
                        <th>Categoty</th>
                        <th>Amount</th>
                        <th>Price</th>
                    </tr>
                    <tr>
                        <td>
                            <div class="product">
                                <div class="circle">
                                    <img src="img/fanta-zero.png" alt="fanta-zero" />
                                </div>
                                <div class="product-details">
                                    <span>Fanta(Zero)</span>
                                    <p>#261311</p>
                                </div>
                            </div>
                        </td>
                        <td>Soft Drinks</td>
                        <td>
                            <button>- 1 +</button>
                        </td>
                        <td>$89.99</td>
                        <td>
                            <img src={cross} alt="cross" />
                        </td>
                    </tr>
                </table>
            </div>
            <Footer />
        </div>
    );
}

export default Cart;
