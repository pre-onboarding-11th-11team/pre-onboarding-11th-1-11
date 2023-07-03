import { ChangeEvent, useState } from "react";

import { TodoListWriteWrapper } from "./NewTodo.styles";

interface Props {
  addTodo: (newTodo: string) => void;
}

const NewTodo = ({ addTodo }: Props) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleNewTodoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNewTodo(value);
  };

  const handleAddTodoClick = () => {
    addTodo(newTodo);
  };

  return (
    <TodoListWriteWrapper>
      <input data-testid="new-todo-input" onChange={handleNewTodoChange} />
      <button data-testid="new-todo-add-button" onClick={handleAddTodoClick}>
        추가
      </button>
    </TodoListWriteWrapper>
  );
};

export default NewTodo;
