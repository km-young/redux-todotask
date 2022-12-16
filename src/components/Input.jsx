import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addTodo} from '../redux/modules/todo';
import {v4 as uuidv4} from 'uuid';
import styled from 'styled-components';
import Buttons from './Buttons';
export default function Input({setTodos}) {
  // state는 modules에서 관리한다는데..?
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const {todos} = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeContents = (e) => {
    setContents(e.target.value);
  };

  const handleSubmitButtonClick = (e) => {
    e.preventDefault();
    if (title === '' && contents === '') {
      alert('제목과 내용을 입력해주세요.');
      return;
    } else if (title === '') {
      alert('제목을 입력해주세요.');
      setTitle('');
      setContents('');
      return;
    } else if (contents === '') {
      alert('내용을 입력해주세요.');
      setTitle('');
      setContents('');
      return;
    }

    dispatch(
      addTodo({
        id: uuidv4(),
        title,
        contents,
        isDone: false,
      })
    );
    setTitle('');
    setContents('');
  };

  return (
    <InputContainer>
      <form onSubmit={handleSubmitButtonClick}>
        <InputBox
          value={title}
          onChange={handleChangeTitle}
          placeholder={'제목을 입력해주세요.'}
        />
        <InputBox
          value={contents}
          onChange={handleChangeContents}
          placeholder={'내용을 입력해주세요.'}
        />
        <Buttons btBgColor='#e0cbff' width='150px' fontSize='25px' paddingTop='9px'>
          등록
        </Buttons>
      </form>
    </InputContainer>
  );
}

const InputContainer = styled.section`
  text-align: center;
`;

const InputBox = styled.input`
  font-size: 20px;
  width: 300px;
  height: 40px;
  border: none;
  margin: 20px;
  border-bottom: 3px double grey;
  padding: 0 15px;
  &:focus {
    outline: none;
    border-radius: 10px;
    border: none;
    box-shadow: inset 2px 2px 10px 2px #ddd;
  }
`;
