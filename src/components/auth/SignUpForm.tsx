import { ChangeEvent, FormEvent, useState } from "react";
import { FormWrap, FormBtn } from "./SignUpForm.styles";
import Input from "../Input";

import { validationSchema } from "../../utils/validations";
import useAuth from "../../common/hooks/useAuth";

interface SignUpValues {
  email: string;
  password: string;
}

const initSignUpValues: SignUpValues = {
  email: "",
  password: "",
};

const SignUpForm = () => {
  const { register } = useAuth();
  const [values, setValues] = useState<SignUpValues>(initSignUpValues);
  const [errors, setErrors] = useState<SignUpValues>(initSignUpValues);

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

    register(values);
  };

  return (
    <FormWrap onSubmit={handleSubmit}>
      <Input
        data-testid='email-input'
        type='text'
        label='email'
        name='email'
        value={values.email}
        error={errors?.email}
        onChange={handleValuesChange}
      />
      <Input
        data-testid='password-input'
        type='password'
        label='password'
        name='password'
        value={values.password}
        error={errors?.password}
        onChange={handleValuesChange}
      />
      <FormBtn
        data-testid='signup-button'
        type='submit'
        disabled={!!!values.email || !!!values.password || !!errors.email || !!errors.password}
      >
        회원가입
      </FormBtn>
    </FormWrap>
  );
};

export default SignUpForm;
