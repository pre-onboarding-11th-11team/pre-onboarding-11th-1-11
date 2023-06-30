import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 500px;
  height: 600px;
  border: 1px solid black;
  border-radius: 20px;
  padding: 30px;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;
export const Title = styled.h2``;

export const TodoListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 420px;
  border: 1px solid black;
  overflow-y: auto;
`;
