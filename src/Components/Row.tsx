import React from "react"

type TodoProps = {
  todo: Todo
  handleDeleteTodo: (id: string) => void
  handleCheckTodo: (id: string) => void
}

export const Row = ({
  todo: { task, description, isCompleted, id },
  handleDeleteTodo,
  handleCheckTodo,
}: TodoProps) => {
  return (
    <div
      className={`flex gap-3 w-full p-4 mb-2 justify-between items-center ${
        isCompleted ? "bg-gray-400" : "bg-green-300"
      }`}
    >
      <p
        className={`text-sm sm:text-lg font-sans font-medium ${
          isCompleted ? "text-white line-through" : "text-gray-700"
        }`}
      >
        {task}
      </p>
      <p
        className={`text-sm w-1/2 sm:text-lg font-sans font-medium ${
          isCompleted ? "text-white line-through" : "text-gray-700"
        }`}
      >
        {description}
      </p>
      <div className="flex justify-around items-center gap-2">
        <button
          aria-label="Delete a ToDo"
          className="h-7 w-7 flex justify-center items-center bg-red-400 hover:bg-red-500 text-white font-bold rounded"
          onClick={() => handleDeleteTodo(id)}
        >
          X
        </button>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => handleCheckTodo(id)}
          className="form-checkbox h-7 w-8"
        />
      </div>
    </div>
  )
}
