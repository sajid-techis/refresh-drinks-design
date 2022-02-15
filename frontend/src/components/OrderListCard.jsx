import React from 'react';

export default function OrderListCard(props) {
    console.log(props);
    const { name, price } = props.orderItem.product;
    const { quantity } = props.orderItem;

    return (
        <div className="order-list">
            <tr>
                <td>{name}</td>
                <td>{quantity}</td>
                <td>
                    <button>${price}</button>
                </td>
            </tr>
        </div>
    );
}
