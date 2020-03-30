import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({ item: {imageUrl, price, name, quantity} }) => (
    <div className='cart-item'>
        <img src={imageUrl} alt='item' />
            <span className='name'>{name}</span>
            <span className='price'>{quantity} x ${price}</span>
    </div>
)

export default CartItem;