import { ChangeEvent, FormEvent, useState } from "react";

import Input from "../Input";

import { validationSchema } from "../../utils/validations";
import useAuth from "../../common/hooks/useAuth";

interface SignInValues {
  email: string;
  password: string;
}

const initSignInValues: SignInValues = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const { login } = useAuth();
  const [values, setValues] = useState<SignInValues>(initSignInValues);
  const [errors, setErrors] = useState<SignInValues>(initSignInValues);

  const validate = (key: string, value: string) => {
    const validation = validationSchema[key];

    if (validation) {
      const { pattern } = validation;

      if (pattern && pattern.value) {
        if (!RegExp(pattern.value).test(value)) {
          setErrors({ ...errors, [key]: pattern.message });
        } else {
          setErrors({ ...errors, [key]: "" });
        }
      }
    }
  };

  const handleValuesChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    validate(name, value);

    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    login(values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        data-testid="email-input"
        type="text"
        label="email"
        name="email"
        value={values.email}
        error={errors?.email}
        onChange={handleValuesChange}
      />
      <Input
        data-testid="password-input"
        type="password"
        label="password"
        name="password"
        value={values.password}
        error={errors?.password}
        onChange={handleValuesChange}
      />
      <button
        data-testid="signin-button"
        type="submit"
        disabled={
          !!!values.email ||
          !!!values.password ||
          !!errors.email ||
          !!errors.password
        }
      >
        로그인
      </button>
    </form>
  );
};

export default SignInForm;
