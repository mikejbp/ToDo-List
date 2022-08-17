import { ChangeEvent, FormEvent, useState } from "react"
import { v4 as uuidv4 } from "uuid"

import { Row } from "./Row"
import { data } from "../todos"
import { AddTodo } from "./AddTodo."

export const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>(data)
  const [task, setTask] = useState("")
  const [description, setDescription] = useState("")
  const todosLen = todos.length
  const hasTodos = todos.length > 0
  const remainingTodos = todos.filter((todo) => !todo.isCompleted).length

  const handleAddTodo = (todo: Todo) => {
    const updatedTodos = [...todos, todo]
    setTodos(updatedTodos)
    setTask("")
    setDescription("")
  }

  const handleChange = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement
    setTask(value)
  }

  const handleChangeT = (e: ChangeEvent) => {
    const { value } = e.target as HTMLTextAreaElement
    setDescription(value)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const todo = {
      id: uuidv4(),
      task: task,
      description: description,
      isCompleted: false,
    }
    task && handleAddTodo(todo)
  }

  const handleDeleteTodo = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id)
    setTodos(updatedTodos)
  }

  const handleCheckTodo = (id: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        }
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  return (
    <section className="w-10/12 lg:w-1/2 max-w-2xl flex flex-col items-center">
      <AddTodo
        task={task}
        description={description}
        handleChange={handleChange}
        handleChangeT={handleChangeT}
        handleSubmit={handleSubmit}
      />
      <div className="h-10" />
      {todos.map((todo) => (
        <Row
          key={todo.id}
          todo={todo}
          handleDeleteTodo={handleDeleteTodo}
          handleCheckTodo={handleCheckTodo}
        />
      ))}
      {!hasTodos && (
        <p className="mb-5 text-xl text-red-500 uppercase">
          Please add a ToDo!
        </p>
      )}
      {hasTodos && (
        <p>{`[${remainingTodos} of ${todosLen}] ToDos remaining.`}</p>
      )}
    </section>
  )
}
