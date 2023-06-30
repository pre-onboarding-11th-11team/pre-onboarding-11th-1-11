import axios from "axios";
import { todoAPI } from "./config";

export interface Todo {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

interface CreateTodoParams {
  token: string;
  todo: string;
}

interface GetTodosParams {
  token: string;
}

interface UpdateTodoParams {
  token: string;
  id: number;
  todo: string;
  isCompleted: boolean;
}

interface DeleteTodoParams {
  token: string;
  id: number;
}

export const createTodo = async (params: CreateTodoParams): Promise<Todo> => {
  try {
    const response = await todoAPI.post(
      "todos",
      { todo: params.todo },
      {
        headers: { Authorization: `Bearer ${params.token}` },
      }
    );

    return response.data;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      const { response } = e;
      throw response?.data.message;
    }
    console.log(e);
    throw e;
  }
};

export const getTodos = async (params: GetTodosParams): Promise<Todo[]> => {
  try {
    const response = await todoAPI.get("todos", {
      headers: { Authorization: `Bearer ${params.token}` },
    });

    return response.data;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      const { response } = e;
      throw response?.data.message;
    }
    console.log(e);
    throw e;
  }
};

export const updateTodo = async (params: UpdateTodoParams): Promise<Todo> => {
  try {
    const response = await todoAPI.put(
      `todos/${params.id}`,
      { todo: params.todo, isCompleted: params.isCompleted },
      { headers: { Authorization: `Bearer ${params.token}` } }
    );

    return response.data;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      const { response } = e;
      throw response?.data.message;
    }
    console.log(e);
    throw e;
  }
};

export const deleteTodo = async (params: DeleteTodoParams): Promise<void> => {
  try {
    await todoAPI.delete(`todos/${params.id}`, {
      headers: { Authorization: `Bearer ${params.token}` },
    });
  } catch (e) {
    if (axios.isAxiosError(e)) {
      const { response } = e;
      throw response?.data.message;
    }
    console.log(e);
    throw e;
  }
};
