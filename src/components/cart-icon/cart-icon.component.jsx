import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
);

// Selectors -> take a part of the state, do some computation and use that information.
// This is inefficient code, because it triggers a re-render EVERY time the state changes.
// Solution - cache the value [memoization]
const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
});

const mapDispatchToProps = dispatch  => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(
    mapStateToProps, 
    mapDispatchToProps
    )(CartIcon);