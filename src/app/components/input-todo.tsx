import { ChangeEvent, MouseEvent, useState } from "react";

type Props = {
  handleSubmit: (inputTodo: string) => void;
};

export default function InputTodo(props: Props) {
  const [inputTodo, setInputTodo] = useState<string>("");

  const handleChangeInputTodo = (event: ChangeEvent<HTMLInputElement>) => {
    setInputTodo(event.target.value);
  };

  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    props.handleSubmit(inputTodo);
  };

  return (
    <div className="flex justify-center items-center my-3">
      <label htmlFor="todo" className="mr-3">
        Todo :
      </label>
      <input
        id="todo"
        type="text"
        value={inputTodo}
        className="h-8 border-2 border-nord0 rounded-md p-4 mr-3 text-nord0"
        placeholder="eat apple"
        onChange={handleChangeInputTodo}
      />
      <button
        type="button"
        className="w-8 h-8 border-2 border-nord14 rounded-md p-2 bg-nord14 flex justify-center items-center"
        onClick={handleSubmit}
      >
        +
      </button>
    </div>
  );
}
