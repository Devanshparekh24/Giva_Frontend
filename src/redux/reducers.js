import { combineReducers } from 'redux';
import navbarReducer from './navbarReducer';

const initialState = {
  // Define your initial state here
  example: 'Hello Redux',
};

function exampleReducer(state = initialState, action) {
  switch (action.type) {
    // Handle actions here
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  example: exampleReducer,
  navbar: navbarReducer,
  // Add other reducers here
});

export default rootReducer;
