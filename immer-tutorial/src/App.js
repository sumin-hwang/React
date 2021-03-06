import logo from './logo.svg';
import './App.css';
import React, { useRef, useCallback, useState } from 'react';
import produce from 'immer';

const App = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name : '', username : ''});
  const [data, setData] = useState({
    array : [],
    uselessValue : null
  });

//input 수정을 위한 함수

  const onChange = useCallback(
     e => {
       const {name, value} = e.target;
       setForm(
        //  ...form,
        //  [name] : [value]
        produce(form, draft => {
          draft[name] = value;
        })
       );
       console.log(form);
     }, [form]
  );

  const onSubmit = useCallback(
     e=> {
       e.preventDefault();
       const info = {
         id : nextId.current,
         name : form.name,
         username : form.username
       };
       console.log(info);
       setData(
      //   {
      //   ...data,
      //   array : data.array.concat(info)
      // }
        produce(data, draft => {
          draft.array.push(info);
        })
      );
      console.log(data);

      // form initialize
      setForm({
        name : '',
        username : ''
      });
      nextId.current +=1;
     },
     [data, form.name, form.username]
  );

  const onRemove = useCallback(
    id => {
      setData(
      //   {
      //   ...data, 
      //   array : data.array.filter(info => info.id !== id)
      // }
        produce(data, draft => {
          draft.array.splice(draft.array.findIndex(info => info.id === id), 1);
        })
      );
    }, [data]
  );


  return(
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="username"
          placeholder="id"
          value={form.username}
          onChange={onChange} />
        <input
          name="name"
          placeholder="이름"
          value={form.name}
          onChange={onChange} />
        
        <button type="submit">등록</button>
      </form>

      <div>
        <ul>
          {data.array.map(info => (
            <li key={info.id} onClick={()=> onRemove(info.id)}>
              {info.username} ({info.name})
            </li>
          
          ))}
        </ul>
      </div>


    </div>
  );

};

export default App;