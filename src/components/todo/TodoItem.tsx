import { ChangeEvent, useEffect, useState } from "react";
import { Todo } from "../../common/api/todo";
import useTodo from "../../common/hooks/useTodo";

interface Props {
  todo: Todo;
}
const TodoItem = ({ todo }: Props) => {
  const { removeTodo, updateTodo } = useTodo();
  const [todoItem, setTodoItem] = useState<Todo>(todo);
  const [update, setUpdate] = useState<boolean>(false);

  const handleCompleteChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;

    setTodoItem({ ...todoItem, isCompleted: checked });
  };

  const handleModifyChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setTodoItem({ ...todoItem, todo: value });
  };

  const handleDeleteItem = () => {
    removeTodo(todoItem.id);
  };

  const handleUpdateButton = () => {
    setUpdate(true);
  };

  const handleSubmit = () => {
    updateTodo(todoItem);
    setUpdate(false);
  };

  const handleCancelButton = () => {
    setUpdate(false);
    setTodoItem(todo);
  };

  useEffect(() => {
    setUpdate(false);
    setTodoItem(todo);
  }, [todo]);

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={todoItem.isCompleted}
          onChange={handleCompleteChange}
        />
        {!update ? (
          <span>{todo.todo}</span>
        ) : (
          <input
            data-testid="modify-input"
            type="text"
            value={todoItem.todo}
            onChange={handleModifyChange}
          />
        )}
      </label>
      <div>
        {!update ? (
          <button
            data-testid="modify-button"
            type="button"
            onClick={handleUpdateButton}
          >
            수정
          </button>
        ) : (
          <>
            <button
              data-testid="submit-button"
              type="button"
              onClick={handleSubmit}
            >
              제출
            </button>
            <button
              data-testid="cancel-button"
              type="button"
              onClick={handleCancelButton}
            >
              취소
            </button>
          </>
        )}
        <button
          data-testid="delete-button"
          type="button"
          onClick={handleDeleteItem}
        >
          삭제
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
