import {createStore, combineReducers} from "redux"
import counterReducer from "./counterSlice"
import todoReducer from "./todoSlice"
const rootReducer = combineReducers({
    counter: counterReducer, 
})

const store = createStore(
    // rootReducer,
    // // Enable Redux DevTools Extension if available
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),

    rootReducer,
  // Enable Redux DevTools Extension if available
  typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),

  )
  
  export default store