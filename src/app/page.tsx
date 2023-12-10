"use client";

import { ChangeEvent, useState } from "react";

import InputTodo from "./components/input-todo";
import TodoList from "./components/todo-list";

type Todo = {
  id: number;
  title: string;
  isDone: boolean;
};

export default function Home() {
  const [todoList, setTodoList] = useState<Todo[]>([
    { id: 1, title: "eat apple", isDone: true },
    { id: 2, title: "buy bannana", isDone: false },
    { id: 3, title: "run", isDone: false },
    { id: 4, title: "wake up early", isDone: false },
    { id: 5, title: "cook dinner", isDone: false },
  ]);

  const handleCheckedChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const updateList = todoList.map((todo) => {
      if (Number(target.id) === todo.id) {
        return {
          ...todo,
          isDone: target.checked,
        };
      }
      return todo;
    });
    setTodoList(updateList);
  };

  const handleSubmit = (inputTodo: string) => {
    setTodoList((preTodoList) => {
      return [
        ...preTodoList,
        {
          id: preTodoList.length + 1,
          title: inputTodo,
          isDone: false,
        },
      ];
    });
  };

  return (
    <div className="md:w-3/5 w-full mx-auto p-4 bg-nord1 h-full text-center">
      <h1 className="font-bold text-lg">Hello Todo App!!</h1>
      <InputTodo handleSubmit={handleSubmit} />
      <h2 className="font-bold text-lg">Todo List</h2>
      <TodoList todoList={todoList} handleCheckedChange={handleCheckedChange} />
    </div>
  );
}
