import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos: [{id:1, text:"Hello World"}]
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload);
            //here we take all todos that has todo id not equal to id given in action (action.payload) 
            // hence filter return true for all those values and
            // then the data which has not satisfied is not stored in final state.todo 
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer