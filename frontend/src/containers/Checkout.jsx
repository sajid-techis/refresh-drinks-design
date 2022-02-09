import React from 'react';

function Checkout() {
    return (
        <div>
            <section class="order-item">
                <p>Order your items</p>
            </section>
            <section class="shipment">
                <span>Shipment Details</span>
                <p>Please check your details and confirm it</p>
                <table>
                    <tr>
                        <td>Pepsi</td>
                        <td>1</td>
                        <td>
                            <button>$89</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Vitamin-Water</td>
                        <td>1</td>
                        <td>
                            <button>$69</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Total Price</td>
                        <td>2</td>
                        <td>
                            <button>$299</button>
                        </td>
                    </tr>
                </table>
            </section>
            <section class="checkout-form">
                <label for="full-name">Full Name</label> <br />
                <input type="text" placeholder="Enter recipient's full name" /> <br />
                <br />
                <label for="phone-number">Phone Number</label> <br />
                <input type="phone" placeholder="Enter Phone Number" /> <br />
                <br />
                <label for="Street">Street Address or P.O Box</label> <br />
                <input type="text" placeholder="Enter Street Adress or P.O Box" /> <br />
                <br />
                <label for="pin-code">Pin Code</label> <br />
                <input type="pin" placeholder="Enter Pin Code" /> <br />
                <br />
                <label for="appartment">Apt, Suite, Unit, Building, Floor, etc.</label>
                <br />
                <input type="text" placeholder="Apt, Suite, Unit, Building, Floor, etc." />
                <br />
                <br />
                <label for="city">City</label> <br />
                <input type="text" placeholder="Enter City" /> <br />
                <br />
                <label for="state">State</label> <br />
                <input type="text" placeholder="Enter State" /> <br />
                <br />
                <button>Submit</button>
            </section>
        </div>
    );
}

export default Checkout;
