import styled from "styled-components";

export const TodoListWriteWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  width: 100%;
  > input {
    padding: 5px;
    height: 40px;
    width: 100%;
  }
  > button {
    width: 50px;
    height: 40px;
    cursor: pointer;
    margin-left: 5px;
  }
`;
