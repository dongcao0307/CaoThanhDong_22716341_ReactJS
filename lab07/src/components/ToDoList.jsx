import { useSelector } from "react-redux"
import TodoItem from "././ToDoItem"
import AddTodoForm from "./AddToDoForm"

function TodoList() {
  const todos = useSelector((state) => state.todos.todos)

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Todo List</h1>

      <AddTodoForm />

      {todos.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          <p>No tasks yet. Add a new task to get started!</p>
        </div>
      ) : (
        <ul>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      )}

      {todos.length > 0 && (
        <div className="mt-4 text-sm text-gray-600">
          <p>
            {todos.filter((todo) => todo.completed).length} of {todos.length} tasks completed
          </p>
        </div>
      )}
    </div>
  )
}

export default TodoList
