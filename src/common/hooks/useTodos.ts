import { useEffect, useState } from "react";
import { Todo, deleteTodo, getTodos, postTodo, putTodo } from "../api/todo";
import { getCurrentUser } from "../api/auth";

const useTodos = () => {
  const token = getCurrentUser();
  const [todos, setTodos] = useState<Todo[] | null>(null);

  const addTodo = async (newTodo: string) => {
    try {
      const postResult = await postTodo({ todo: newTodo, token: token });
      if (postResult) {
        fetchTodos();
      }
    } catch (error) {
      throw error;
    }
  };

  const fetchTodos = async () => {
    try {
      const todosResult = await getTodos({ token });
      if (todosResult) {
        setTodos(todosResult);
      }
    } catch (error) {
      throw error;
    }
  };

  const updateTodo = async (todo: Todo) => {
    try {
      const updateResult = await putTodo({
        token,
        id: todo.id,
        todo: todo.todo,
        isCompleted: todo.isCompleted,
      });

      if (updateResult) {
        fetchTodos();
      }
    } catch (error) {
      throw error;
    }
  };

  const removeTodo = async (id: number) => {
    try {
      const removeResult = await deleteTodo({ token, id });

      fetchTodos();
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return {
    todos,
    addTodo,
    fetchTodos,
    updateTodo,
    removeTodo,
  };
};

export default useTodos;
