import React from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  
  const [todos, setTodos] = React.useState([
    {
      id : 1,
      text : '리액트의 기초 알아보기',
      checked : true,
    }, 
    {
      id : 2,
      text : '컴포넌트 스타일링 하기',
      checked : true,
    },
    {
      id : 3,
      text : '일정 관리 앱 만들어보기',
      checked : false,
    }
  ]);

  const nextId = React.useRef(4); //고윳값으로 사용될 id, ref사용해서 변수 담음 

  const onInsert = React.useCallback(
    text => {
      const todo = {
        id : nextId.current,
        text,
        checked : false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },[todos],
  );

  const onRemove = React.useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
    },[todos],
  );

  const onToggle = React.useCallback(
    id => {
     setTodos(
       todos.map(todo =>
        todo.id === id ? {...todos, checked : !todo.checked} : todo,),
     );
    }, [todos],
  );
  
  return(
    <div>
      <TodoTemplate> 
        <TodoInsert onInsert={onInsert}/>
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
      </TodoTemplate>
    </div>
  )
}

export default App;