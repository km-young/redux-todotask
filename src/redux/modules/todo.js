import {v4 as uuidv4} from 'uuid';

const initialState = {
  todos: [
    {
      id: uuidv4(),
      title: '리덕스1',
      contents: '리덕스1공부',
      isDone: false,
    },
    {
      id: uuidv4(),
      title: '리덕스2',
      contents: '리덕스2공부',
      isDone: false,
    },
    {
      id: uuidv4(),
      title: '리덕스3',
      contents: '리덕스3공부',
      isDone: true,
    },
  ],
};

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const SWITCH_TODO = 'SWITCH_TODO';

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const switchTodo = (payload) => {
  return {
    type: SWITCH_TODO,
    payload,
  };
};

// state 변경 자체를 reduxstore에 요청하는 경우라 store에서밖에 못함.
// 어떻게 해줄까요? 라고 하는게 액션임.
// 실제로 state 변경은 리듀서에서 일어남.
// setState = 리듀서
// 리듀서

const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case 'DELETE_TODO':
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case 'SWITCH_TODO':
      return {
        todos: state.todos.map((t) => {
          if (t.id === action.payload) {
            return {...t, isDone: !t.isDone}
          } else {
            return t;
          }
        })
      }
    default:
      return state;
  }
};

export default todos;
