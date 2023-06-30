import styled from "styled-components";

export const FormWrap = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  border-radius: 20px;
  width: 400px;
  height: 400px;
  padding: 10px;
`;
export const FormBtn = styled.button`
  position: absolute;
  bottom: 20px;
  width: 90%;
  height: 50px;
  font-size: 20px;
  background-color: ${({ disabled }) => (disabled ? "#fff" : "#ffd400")};
  border: 1px solid black;
  border-radius: 10px;
`;
