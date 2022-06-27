import produce from 'immer';

const originalState = [
    {
        id : 1,
        todo : ' immutability',
        checked : true,
    },
    {
        id : 2,
        todo : 'use immer',
        checked : false,
    }
];

const nextState = produce(originalState, draft => {
    const todo = draft.find( t=> t.id === 2);
    todo.checked = true; // t.id ===2 인 항목을 찾아서 checked의 값을 true로 변경

    draft.push({ // 추가
        id : 3,
        todo : 'apply immer',
        checked : false,
    });

    draft.splice(draft.findIndex(t=> t.id === 1), 1); //id가 1인 항목을 제거 
})