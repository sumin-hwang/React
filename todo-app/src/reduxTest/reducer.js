
// action creator
function addTodo(data) {
    return {
        type : 'ADD_TODO',
        data
    };
}

const changeInput = text => ({
    type : 'CHANGE_INPUT',
    text
});

const initialState = {
    counter : 1
};

function reducer(state = initialState, action){
    switch (action.type){
        case INCREMENT:
            return {
                counter : state.counter + 1
            };
        default:
            return state;
    }
}