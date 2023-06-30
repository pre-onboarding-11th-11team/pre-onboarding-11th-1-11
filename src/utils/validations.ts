interface Validation {
  required?: {
    value: boolean;
    message: string;
  };
  pattern?: {
    value: string;
    message: string;
  };
}

export const validationSchema: { [key: string]: Validation } = {
  email: {
    pattern: {
      value: "^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+$",
      message: "이메일 형식이 올바르지 않습니다.",
    },
  },
  password: {
    pattern: {
      value: "^.{8,}$",
      message: "비밀번호 형식이 올바르지 않습니다.",
    },
  },
};
