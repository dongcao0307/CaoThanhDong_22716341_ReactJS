import { useReducer } from "react"
import {useSelector, useDispatch} from "react-redux"
import { increment, decrement } from "../store/counterSlice"
// Reducer function
// function countReducer(state, action) {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + 1 }
//     case "decrement":
//       return { count: state.count - 1 }
//     default:
//       return state
//   }
// }

function Calculator() {
  // Initialize useReducer with our reducer function and initial state
  // const [state, dispatch] = useReducer(countReducer, { count: 0 })
  // Get the count from Redux store
  const count = useSelector((state) => state.counter.count)
  // Get the dispatch function
  const dispatch = useDispatch()
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Counter App</h2>

      <div className="flex justify-center space-x-4 mb-6">
        <button
          // onClick={() => dispatch({ type: "decrement" })}
          onClick={() => dispatch(decrement())}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg text-xl transition-colors"
        >
          -
        </button>
        <button
          // onClick={() => dispatch({ type: "increment" })}
          onClick={() => dispatch(increment())}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg text-xl transition-colors"
        >
          +
        </button>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg">
        <div className="flex items-center">
          <span className="text-xl font-medium text-gray-700">Result: </span>
          <span className="text-2xl font-bold ml-2 text-gray-900">{count}</span>
        </div>
      </div>
    </div>
  )
}

export default Calculator
