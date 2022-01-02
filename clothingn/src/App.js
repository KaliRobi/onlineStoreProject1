import React, { useRef } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Routes,  Route, Redirect, BrowserRouter as Router} from 'react-router-dom';
// import HatPage from  './components/newrouting.com.test/routingtest'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component';
import SignInSignOut from './pages/sign-in-up/sign-in-up';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions'






class App extends React.Component {


    unsubscribeFromAuth = null

    componentDidMount() {
      const { setCurrentUser } = this.props;
  
      this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);
  
          userRef.onSnapshot(snapShot => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
          });
        }
  
        setCurrentUser(userAuth);
      });
    }
// documentsnapshot object comes from the documentReference object
// it allows us to check if a document exists at this query with .exists (boolean)
// we can also get properties of the data with .data() method
    componentWillUnmount(){
      this.unsubscribeFromAuth();
    }
  

  render() {  
    return (
    <div>
      <Router>
    <Header/>
        <Routes>        
        <Route path='/hats' element={<ShopPage/>}/>
        {/* <Route path='/jackets' element={
          <div>
          <h1>jackets PAGE</h1>
          <Link to='/'>go to hats</Link> */}
          {/* </div> }/> */}

        <Route  path='/' element={<HomePage/>} />

        <Route  path='/signin' element={<SignInSignOut/> }/>
        </Routes>
     </Router>
    </div>
  );}

}
// dispatch receives the action object 

const mapStateToProps = ({user}) => ({
    currentUser : user.currentUser
})


const  mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(
  null,
  mapDispatchToProps
)(App);


// <switch> is now <Routes> 
// no component = {} does not exitis
// element = {} which takes jsx
// element ={jsx}  elemtnts in <Route element={<About/>} which is acomponent
// no exect or render anymore
//element can be anything what we want to render
// redirect is now Navigate
//  /topics/:topicid to give parameter

