"use client"

import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../store/todoSlice"

function AddTodoForm() {
  const [text, setText] = useState("")
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim()) {
      dispatch(addTodo(text))
      setText("")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex items-center">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task..."
          className="flex-grow p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-r-lg transition-colors"
        >
          Add
        </button>
      </div>
    </form>
  )
}

export default AddTodoForm
