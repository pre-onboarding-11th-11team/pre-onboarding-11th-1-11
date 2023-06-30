export const getCurrentUser = () => {
  return localStorage.getItem("access-token");
};
