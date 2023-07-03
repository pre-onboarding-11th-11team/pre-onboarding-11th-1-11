import React, { useEffect } from "react";
import useTodos from "../../common/hooks/useTodos";
import TodoItem from "./TodoItem";
import NewTodo from "./NewTodo";
import {
  HeaderWrapper,
  Title,
  TodoListWrapper,
  Wrapper,
} from "./TodoList.styles";

const TodoList = () => {
  const { todos, addTodo, updateTodo, removeTodo } = useTodos();

  return (
    <Wrapper>
      <HeaderWrapper>
        <Title>투두리스트</Title>
      </HeaderWrapper>
      <TodoListWrapper>
        <div>
          {todos &&
            todos.map((todo, idx) => (
              <TodoItem
                key={idx}
                todo={todo}
                updateTodo={updateTodo}
                removeTodo={removeTodo}
              />
            ))}
        </div>
      </TodoListWrapper>
      <NewTodo addTodo={addTodo} />
    </Wrapper>
  );
};

export default TodoList;
