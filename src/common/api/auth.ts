import axios, { type AxiosResponse } from "axios";
import { todoAPI } from "./config";

export interface AuthInResponse {
  status: number;
  access_token: string;
}

export const signUp = async (data: {
  email: string;
  password: string;
}): Promise<AxiosResponse<AuthInResponse>> => {
  try {
    const response = await todoAPI.post("auth/signup", {
      email: data.email,
      password: data.password,
    });
    return response;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      throw e;
    }
    throw e;
  }
};

export const signIn = async (data: {
  email: string;
  password: string;
}): Promise<AxiosResponse<AuthInResponse>> => {
  try {
    const response = await todoAPI.post("auth/signin", {
      email: data.email,
      password: data.password,
    });
    return response;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      const { response } = e;
      throw response?.data?.statusCode;
    }
    throw e;
  }
};

export const getCurrentUser = () => {
  return localStorage.getItem("access-token");
};
