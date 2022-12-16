import Todo from './Todo';
import styled from 'styled-components';
import { useSelector,useDispatch } from 'react-redux';

export default function TodoList({ isActive }) {
  const todos = useSelector((state) => state.todos);
  console.log("todos:",todos)
  return (
    <>
      <h1>{isActive ? '✏️ Working' : '🎉 Done'}</h1>
      <SectionBox>
        {todos
          .filter((item) => item.isDone !== isActive)
          .map((item) => {
            return <Todo item={item} isActive={isActive} key={item.id} />;
          })}
      </SectionBox>
    </>
  );
}

const SectionBox = styled.section`
  display: flex;
  flex-wrap: wrap;
`
