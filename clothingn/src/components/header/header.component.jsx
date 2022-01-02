import React from 'react'
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg'
// src/assets/crown.svg
import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component';
//this will just give the take component and return a new suped up component highorder component
import { connect } from 'react-redux'
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import './header.style.scss'
// destructure
const Header = ({currentUser, hidden}) => (
    <div className='header'>
        <Link className='logo-container' to="/"> 
            <Logo className='logo' />
        </Link >
        <div className='options'> 
        <Link className='option' to="/shop">SHOP</Link>

        <Link className='option' to="/shop">CONTACT</Link>
        

        {  //conditional
            currentUser ?
            <div className="option" onClick={() => auth.signOut()} ><Link to='/'>SIGN OUT</Link></div>
            :
            <Link className='option' to='/signin'>SIGN IN</Link>
        }
        <CartIcon />
        </div>
        {hidden ? null : <CartDropdown/>}


    </div>


)

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden

})

export default connect(mapStateToProps)(Header)
