// just an function with two properties
// it gets a tsate which reperesents the initial StaticRange, just an obejct
// and an action
// the action based on the type
// payload can be anything, maybe:this is what we use to update or make some transformations etc.

// {
//     type:
//     payload: 
// }
// this is just an object which represents the basic state
const INITIAL_STATE = {
    currentUser: null
}

//if the value is not set then this is what it takes in 
//depending on the action the switch statement does the thing
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'SET_CURRENT_USER':
        return {
          ...state,
          currentUser: action.payload
        };
      default:
        console.log(state)
        return state;
    }
  };

export default userReducer