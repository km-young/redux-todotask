import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';
import {useDeferredValue} from 'react';
import { deleteTodo, switchTodo } from '../redux/modules/todo';
import Buttons from './Buttons';

export default function Todo({item, isActive}) {
  const {todos} = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleDeletButtonClick = () => {
    console.log(todos);
    dispatch(
      deleteTodo(
        item.id // payload에 item.id가 담김.
      )
    );
  };
  const handleSwitchButtonClick = () => {
    console.log(todos);
    dispatch(switchTodo(item.id));
  };
  return (
    <ItemBox bgColor={isActive ? '#e9fff0' : '#eee'}>
      <h4>{item.title}</h4>
      <p>{item.contents}</p>
      <Buttons
        onClick={handleSwitchButtonClick}
        btBgColor={isActive?'#e2e2ff':''}
        width='50px'
        fontSize='20px'
        paddingTop='5px'
      >
        {isActive ? '완료' : '취소'}
      </Buttons>
      <Buttons
        onClick={handleDeletButtonClick}
        btBgColor='pink'
        width='50px'
        fontSize='20px'
        paddingTop='5px'
      >
        삭제
      </Buttons>
    </ItemBox>
  );
}

const ItemBox = styled.div`
  width: 28%;
  min-width: 335px;
  margin: 10px;
  padding: 0 20px 15px 20px;
  border-radius: 30px;
  box-shadow: inset 1px 1px 5px 1px;
  &:hover {
    background-color: ${(props) => props.bgColor};
  }
`;
