import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';
// react-virtualized 사용한 렌더링 최적화
import {List} from 'react-virtualized';

const TodoList = ({todos, onRemove, onToggle}) =>{

    const rowRenderer = React.useCallback(({index, key, style}) => {
        const todo = todos[index];

        return(
            <TodoListItem   
                todo={todo}
                key={key}
                onRemove={onRemove}
                onToggle={onToggle}
                style={style} />
        );
    }, [onRemove, onToggle, todos],
    );

    return(
        // <div className="TodoList">
        //     {todos.map(todo => (
        //         <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}/>
        //     ))}
        // </div>
        <List   
            className="TodoList"
            width={512}
            height={513}
            rowCount={todos.length} //항목개수
            rowHeight={57} //항목 높이
            rowRenderer={rowRenderer}
            list={todos}
            style={{outline : 'none'}} // List에 기본 적용되는 outline 스타일 제거 
            />
    );
};

// export default TodoList;
export default React.memo(TodoList);
