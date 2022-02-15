import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Empty from '../components/Empty';
import OrderListCard from '../components/OrderListCard';
import { clearCarts, fetchCarts } from '../reducks/cart/operations';
import { getCarts } from '../reducks/cart/selectors';
import { clearCheckoutOrderErrorAction } from '../reducks/order/actions';
import { checkoutOrder } from '../reducks/order/operations';
import { getOrders } from '../reducks/order/selectors';
import { getUser } from '../reducks/users/selectors';

function Checkout() {
    const selector = useSelector(state => state);
    const dispatch = useDispatch();
    const user = getUser(selector);
    const errors = getOrders(selector).errors;
    const history = useHistory();
    const carts = getCarts(selector);
    const [isLoading, setIsLoading] = useState(false);
    const isEmpty = carts.results && carts.results.length > 0 ? false : true;

    useEffect(() => {
        dispatch(fetchCarts());
        // eslint-disable-next-line
    }, []);

    const order_items = carts.results.map(cart => {
        return {
            qty: cart.quantity,
            product: cart.product.id
        };
    });

    const initialValues = {
        customer_name: user.name,
        customer_phone: '',
        address: '',
        pin_code: '',
        building_type: '',
        city: '',
        state: ''
    };
    const [values, setValues] = useState(initialValues);
    const handleInputChange = e => {
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value
        });
    };

    const onSubmitCheckout = () => {
        setIsLoading(true);
        dispatch(
            checkoutOrder(
                { ...values, total_price: carts.totalPrice, total_qty: carts.totalCartItems, order_items },
                () => {
                    history.push('/thank-you');
                    dispatch(clearCheckoutOrderErrorAction());
                    dispatch(clearCarts());
                }
            )
        );

        setIsLoading(false);
    };
    return (
        <div>
            <section class="order-item">
                <p>Order your items</p>
            </section>
            <section class="shipment">
                <span>Shipment Details</span>
                <p>Please check your details and confirm it</p>
                <table>
                    {carts.results && carts.results.length > 0 ? (
                        carts.results.map(cart => <OrderListCard key={cart.id} orderItem={cart} />)
                    ) : (
                        <Empty />
                    )}
                    <tr>
                        <td>Total Price</td>
                        <td>{carts.totalCartItems}</td>
                        <td>
                            <button>${carts.totalPrice}</button>
                        </td>
                    </tr>
                </table>
            </section>
            <section class="checkout-form">
                <label for="full-name">Full Name</label> <br />
                <input
                    onChange={handleInputChange}
                    value={values.customer_name}
                    name="customer_name"
                    type="text"
                    placeholder="Enter recipient's full name"
                />{' '}
                <br />
                <br />
                <label for="phone-number">Phone Number</label> <br />
                <input
                    onChange={handleInputChange}
                    value={values.customer_phone}
                    name="customer_phone"
                    type="phone"
                    placeholder="Enter Phone Number"
                />{' '}
                <br />
                <br />
                <label for="Street">Street Address or P.O Box</label> <br />
                <input
                    onChange={handleInputChange}
                    value={values.address}
                    name="address"
                    type="text"
                    placeholder="Enter Street Adress or P.O Box"
                />{' '}
                <br />
                <br />
                <label for="pin-code">Pin Code</label> <br />
                <input
                    onChange={handleInputChange}
                    value={values.pin_code}
                    name="pin_code"
                    type="pin"
                    placeholder="Enter Pin Code"
                />{' '}
                <br />
                <br />
                <label for="appartment">Apt, Suite, Unit, Building, Floor, etc.</label>
                <br />
                <input
                    onChange={handleInputChange}
                    value={values.building_type}
                    name="building_type"
                    type="text"
                    placeholder="Apt, Suite, Unit, Building, Floor, etc."
                />
                <br />
                <br />
                <label for="city">City</label> <br />
                <input
                    onChange={handleInputChange}
                    value={values.city}
                    name="city"
                    type="text"
                    placeholder="Enter City"
                />{' '}
                <br />
                <br />
                <label for="state">State</label> <br />
                <input
                    onChange={handleInputChange}
                    value={values.state}
                    name="state"
                    type="text"
                    placeholder="Enter State"
                />{' '}
                <br />
                <br />
                <button onClick={onSubmitCheckout}>
                    {isLoading ? 'Submitting the order...' : 'Confirm and submit'}
                </button>
            </section>
        </div>
    );
}

export default Checkout;
