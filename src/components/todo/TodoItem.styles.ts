import styled from "styled-components";

export const TodoItemWrapper = styled.div`
  padding: 10px;
  display: flex;
  > label {
    display: flex;
    align-items: center;
    > input[type="checkbox"] {
      margin-right: 5px;
      width: 20px;
      height: 20px;
    }
    > input[type="text"] {
      width: 300px;
      font-size: 14px;
    }
    > span {
      display: inline-block;
      width: 300px;
      font-size: 14px;
    }
  }
  button {
    margin: 0px 5px;
    width: 50px;
    cursor: pointer;
  }
`;
