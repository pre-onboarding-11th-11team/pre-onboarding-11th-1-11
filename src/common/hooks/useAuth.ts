import { useNavigate } from "react-router-dom";
import { signIn } from "../api/auth";

const useAuth = () => {
  const navigate = useNavigate();

  const register = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      const res = await signIn({ email, password });

      if (res && res.status === 201) {
        alert("회원가입이 되었습니다!");
        navigate("/signin");
      }
    } catch (error) {
      if (error === 401) {
        alert("비밀번호가 틀립니다 확인해주세요.");
        return;
      }
      throw error;
    }
  };

  const login = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      const res = await signIn({ email, password });

      if (res && res.status === 200) {
        localStorage.setItem("access-token", res.data.access_token);
        alert("로그인 성공!");
        navigate("/todo");
      }
    } catch (error) {
      if (error === 404) {
        alert("없는 계정입니다 확인해주세요.");
        return;
      }
      throw error;
    }
  };

  return { login, register };
};

export default useAuth;
