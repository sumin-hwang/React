import React, { useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({onInsert}) => {

    const [value, setValue] = React.useState('');
    const onChange = useCallback( e => {
        setValue(e.target.value);
    },[]);

    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue('');
            //submit이벤트는 브라우저에서 새로고침 발생시킴. 방지 위해서 
            e.preventDefault();
        },
        [onInsert, value],
    );

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input 
                placeholder= "할 일을 입력하세요."
                vlaue = {value}
                onChange = {onChange} />
            <button type = "submit">
                <MdAdd />
            </button>
        </form>   
    );
};

export default TodoInsert;