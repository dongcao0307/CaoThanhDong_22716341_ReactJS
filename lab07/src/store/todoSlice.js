// Action Types
const ADD_TODO = "todo/addTodo"
const TOGGLE_TODO = "todo/toggleTodo"
const REMOVE_TODO = "todo/removeTodo"

// Action Creators
export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: {
    id: Date.now(),
    text,
    completed: false,
  },
})

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
})

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: { id },
})

// Initial State
const initialState = {
  todos: [],
}

// Reducer
export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      }

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo,
        ),
      }

    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      }

    default:
      return state
  }
}
