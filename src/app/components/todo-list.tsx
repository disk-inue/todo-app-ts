import { ChangeEvent } from "react";

type Todo = {
  id: number;
  title: string;
  isDone: boolean;
};

type Props = {
  todoList: Todo[];
  handleCheckedChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function TodoList(props: Props) {
  const viewTodo = (todo: Todo) => {
    return (
      <li key={todo.id} className="border-solid border-nord4 border-b-2 mb-3">
        <div className="flex">
          <input
            type="checkbox"
            className="mr-3 checked:text-nord3"
            id={`${todo.id}`}
            checked={todo.isDone}
            onChange={props.handleCheckedChange}
          />
          <label htmlFor={`${todo.id}`} className={`${todo.isDone && "text-nord3"}`}>
            {todo.title}
          </label>
        </div>
      </li>
    );
  };

  return <ul className="w-56 mx-auto my-3">{props.todoList.map(viewTodo)}</ul>;
}
