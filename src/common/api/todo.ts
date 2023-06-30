import axios from "axios";
import { todoAPI } from "./config";

export interface Todo {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

interface PostTodoParams {
  token: string | null;
  todo: string;
}

interface GetTodosParams {
  token: string | null;
}

interface PutTodoParams {
  token: string | null;
  id: number;
  todo: string;
  isCompleted: boolean;
}

interface DeleteTodoParams {
  token: string | null;
  id: number;
}

export const postTodo = async (params: PostTodoParams): Promise<Todo> => {
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

export const putTodo = async (params: PutTodoParams): Promise<Todo> => {
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
