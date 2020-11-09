import {ADD_TODO,DELETE,DONE,EDIT,FILTER} from './actiontype'
export const add = (newtodo) => {
    return{
        type: ADD_TODO,
        payload: newtodo,
    }
}
export const remove = (id) => {
    return{
        type: DELETE,
        payload: id,
    }
}
export const done = (todo) => {
    return{
        type: DONE,
        payload: todo, 
    }
}
export const edit = (todo) => {
    return{
        type:EDIT,
        payload: todo, 
    }
}
export const filterTask = (isDone) => {
    return{
        type:FILTER,
        payload: isDone, 
    }
}