import {useState} from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import Input from './components/Input';
import TodoList from './components/TodoList';
function App() {
  

  
  return (
    <Container>
      <MainBox>
        <Input />
        <TodoList isActive={true} />
        <TodoList isActive={false} />
      </MainBox>
    </Container>
  );
}

export default App;

const MainBox = styled.main`
  
`

const Container = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: auto;
`;
