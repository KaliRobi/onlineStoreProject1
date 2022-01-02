import React from 'react'

import './sign-in-up.style.scss'
import SignIn from '../../components/sign-in/sign-in.component';
//functona component, because we keep all tate in our sign in and sign out component repectedly.
//so class compient needed when states is needed
import SignUp from '../../components/signup/signup.component';
const SignInSignOut  = () => (
    // no retrun i functional
        <div className='sign-in-and-sign-up'>
            <SignIn/>
            <SignUp/>
        </div>
    
)

export default SignInSignOut;