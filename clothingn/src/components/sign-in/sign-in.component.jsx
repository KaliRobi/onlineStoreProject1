import React from 'react';

import './sign-in.style.scss'

import FormInput from '../form-input/form-input';
import CustomButton from '../button-component/button1.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils.js'
class SignIn extends React.Component {
    constructor(props) {
    super(props)
    
    this.state= {
        email: "",
        password: ""
    }
    }
    handleSubmit = async event => {
            event.preventDefault();
            const { email, password} = this.state;
            console.log(this.state)
           try{
               await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: "", password:""})
    } catch(error){
        console.log(error)
    }
    }


    handleChange = event => {
        const {value, name } = event.target
         //thses are pointing to the html elemtn
        this.setState({[name]: value})
        console.log(this.state)
}
//points to the handle submit but this pull the value and the name 
// the imput target is the input element itself, because the function attached

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>    
                <span> Sign in with your email and password </span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput  name="email"
                     type="email" 
                     handleChange={this.handleChange} // handlechange is one of the props the FormInput receives
                     value={this.state.email} 
                     label = "Email"
                     required />
                    
                    <FormInput 
                    name="password" 
                    type="password" 
                    handleChange={this.handleChange}
                    value={this.state.password} 
                    label="Password"
                    required/>
                    
                    <div className='buttons'>
                    <CustomButton type="submit">Sign in </CustomButton>
                    {/* so here we dont add a value, but just the text is the children */}
                    <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>Sign in With Google</CustomButton>
                    </div>
                </form>

            </div>
        )
    }


}

export default SignIn;
