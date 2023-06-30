import React, { useEffect } from "react";
import useTodo from "../../common/hooks/useTodo";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos, fetchTodos } = useTodo();

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      {todos && todos.map((todo, idx) => <TodoItem key={idx} todo={todo} />)}
    </div>
  );
};

export default TodoList;
