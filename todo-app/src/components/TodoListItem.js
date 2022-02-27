import React from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';

const TodoListItem = ({todo, onRemove, onToggle}) => {
    const {id, text, checked} = todo; // const [todo, setTodo] = React.useState([{초기배열}]);

    return(
        <div className = "TodoListItem">
            <div className = {cn('checkbox', {checked})} onClick = {()=> onToggle(id)}>
                {checked? <MdCheckBox /> : <MdCheckBoxOutlineBlank/>}
                <div className = "text" > {text} </div>
            </div>
            <div className = "remove" onClick={()=> onRemove(id)}>
                <MdRemoveCircleOutline />
            </div>
        </div>
    );
};

export default TodoListItem;