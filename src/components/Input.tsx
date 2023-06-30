import { InputHTMLAttributes } from "react";

import styled from "styled-components";

const InputWrap = styled.div`
  width: 100%;
  margin-top: 40px;
  > label {
    font-size: 20px;
    font-weight: 700;
  }
  > div {
    input {
      width: 100%;
      height: 30px;
      padding: 0px 5px;
    }
  }
`;
const WarnText = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;
interface Props extends InputHTMLAttributes<HTMLInputElement> {
  dataTestId?: string;
  error?: string;
  label?: string;
  value: string;
}

const Input = ({ dataTestId, error, label, value, ...rest }: Props) => {
  return (
    <InputWrap>
      {label && <label>{label}</label>}
      <div>
        <input data-testid={dataTestId} {...rest} />
        {!!value && error && <WarnText>{error}</WarnText>}
      </div>
    </InputWrap>
  );
};

export default Input;
