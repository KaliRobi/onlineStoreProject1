import React from 'react';

import './button1.style.scss';


const CustomButton = ({children, isGoogleSignIn, ...otherProps}) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {children}
        {/*  // there we will ass a label */}
    </button>

)

export default CustomButton

// if type=submit  which can taken byt input and button too
// then we submut, call the functon in the onSubmit={}

//se here if we have a type submit passed to the custom button, then the button component will get that.

//we will add this instead of the input  in the sign-in component