import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  dataTestId?: string;
  error?: string;
  label?: string;
  value: string;
}

const Input = ({ dataTestId, error, label, value, ...rest }: Props) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <div>
        <input data-testid={dataTestId} {...rest} />
        {!!value && error && <div>{error}</div>}
      </div>
    </div>
  );
};

export default Input;
