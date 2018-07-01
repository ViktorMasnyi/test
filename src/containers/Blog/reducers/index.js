//import { combineReducers } from 'redux';

const initialState = {test: 'test', posts: [], error: false,};

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TEST':
      return {...state, test: 'TTTT'}
    case 'FETCH_DATA':
      return {...state, posts: action.payload, error: action.error}
    default:
      return state;
  }
}

// const rootReducer = combineReducers({
//   testReducer
// });

export default testReducer;