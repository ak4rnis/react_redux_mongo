const todoReducer = (state = [], action) => {
    switch(action.type){
        case "ADD_TODO":
            return [action.data.todo, ...state];
        case "GET_TODOS":
            return action.todos.data
        default:
            return state;
    }
}

export default todoReducer