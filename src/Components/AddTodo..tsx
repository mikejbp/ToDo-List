import { ChangeEvent, FormEvent } from "react"
import { BsPlusCircle } from "react-icons/bs"

export type AddTodoProps = {
  task: string
  description: string
  handleSubmit: (e: FormEvent) => void
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
  handleChangeT: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

export const AddTodo = ({
  task,
  description,
  handleSubmit,
  handleChange,
  handleChangeT,
}: AddTodoProps) => (
  <form
    className="flex flex-col w-full gap-2 justify-center items-center"
    onSubmit={handleSubmit}
  >
    <div className="flex flex-col gap-4 w-full">
      <input
        type="text"
        name="task"
        value={task}
        className="flex-1 rounded shadow h-[5vh] p-2 text-grey-dark"
        onChange={handleChange}
      />
      <textarea
        name="description"
        value={description}
        className="flex-1 rounded shadow h-[5vh] p-2 text-grey-dark"
        onChange={handleChangeT}
      ></textarea>
    </div>
    <button
      className="bg-sky-500 hover:bg-emerald-500 text-2xl text-white font-bold w-full p-2 h-[5vh] flex justify-center items-center rounded"
      type="submit"
      aria-label="Add ToDo"
    >
      <BsPlusCircle />
    </button>
  </form>
)
