import axios from "axios";

export const todoAPI = axios.create({
  baseURL: "https://www.pre-onboarding-selection-task.shop",
});
