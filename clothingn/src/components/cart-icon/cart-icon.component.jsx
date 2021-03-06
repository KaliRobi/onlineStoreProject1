import React from 'react';
import {connect} from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';


const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})


const CartIcon  = ({toggleCartHidden}) => (
    <div className = 'cart-icon' onClick={toggleCartHidden} >
        <ShoppingIcon />
        <span className='item-count'>0</span>
    </div>

)

export default connect(
    null,
    mapDispatchToProps)
    (CartIcon);