import React, { useEffect } from "react";
import useTodo from "../../common/hooks/useTodo";
import TodoItem from "./TodoItem";
import NewTodo from "./NewTodo";
import {
  HeaderWrapper,
  Title,
  TodoListWrapper,
  Wrapper,
} from "./TodoList.styles";

const TodoList = () => {
  const { todos, fetchTodos } = useTodo();

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <Wrapper>
      <HeaderWrapper>
        <Title>투두리스트</Title>
      </HeaderWrapper>
      <TodoListWrapper>
        <div>
          {todos &&
            todos.map((todo, idx) => <TodoItem key={idx} todo={todo} />)}
        </div>
      </TodoListWrapper>
      <NewTodo />
    </Wrapper>
  );
};

export default TodoList;
