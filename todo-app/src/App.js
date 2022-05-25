import React from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function createBulkTodos() {
  const array = [];
  for(let i = 1; i <= 2500; i++){
    array.push({
      id : i,
      text : `할 일 ${i}`,
      checked : false,
    });
  }
  return array;
}

//useReducer로 최적화
function todoReducer(todos, action){
  switch(action.type){
    case 'INSERT' :
      return todos.concat(action.todo);
    case 'REMOVE' : 
      return todos.filter(todo => todo.id !== action.id);
    case 'TOGGLE' :
      return todos.map(todo =>
          todos.id === action.id ? {...todo, checked : !todo.checked} : todo,);
    default :
        return todos;
  }
}


const App = () => {
  
  // const [todos, setTodos] = React.useState(createBulkTodos);

  const [todos, dispatch] = React.useReducer(todoReducer, undefined, createBulkTodos);
  //   {
  //     id : 1,
  //     text : '리액트의 기초 알아보기',
  //     checked : true,
  //   }, 
  //   {
  //     id : 2,
  //     text : '컴포넌트 스타일링 하기',
  //     checked : true,
  //   },
  //   {
  //     id : 3,
  //     text : '일정 관리 앱 만들어보기',
  //     checked : false,
  //   }
  // ]);

  const nextId = React.useRef(4); //고윳값으로 사용될 id, ref사용해서 변수 담음 

  // const onInsert = React.useCallback(
  //   text => {
  //     const todo = {
  //       id : nextId.current,
  //       text,
  //       checked : false,
  //     };
  //     setTodos(todos.concat(todo));
  //     nextId.current += 1;
  //   },[todos],
  // );

  /**useState의 함수형 update를 사용한 코드 최적화 
   * 기존 구현한 부분에서 todos => 만 추가하면 됨, -> 두 번째 파라미터로 넣는 배열에 todos를 안넣어도 됨. 
  */
  const onInsert = React.useCallback(text =>{
    const todo = {
      id : nextId.current,
      text,
      checked : false,
    };
    // setTodos(todos => todos.concat(todo));
    dispatch({ type : 'INSERT', todo});
    nextId.current +=1;
  }, [])

  const onRemove = React.useCallback(
    id => {
      // setTodos(todos.filter(todo => todo.id !== id));
      // setTodos(todos => todos.filter(todo => todo.id !== id));
      dispatch({type : 'REMOVE', id});
    },[]
  );

  const onToggle = React.useCallback(
    id => {
    //  setTodos(
    //    todos.map(todo =>
    //     todo.id === id ? {...todo, checked : !todo.checked} : todo,),
    //  );
      dispatch({type : 'TOGGLE', id});
    }, []
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