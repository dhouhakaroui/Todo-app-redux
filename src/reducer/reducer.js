import {v4 as uuidv4} from 'uuid';
import {ADD_TODO,DELETE,DONE,EDIT} from '../action/actiontype'
const initState =  [
        {
            id:uuidv4(),
            description:'learn react and redux',
            isDone:true,
        },
        {
            id:uuidv4(),
            description:'learn angular',
            isDone:false,
        },
        {
            id:uuidv4(),
            description:'learn node js',
            isDone:true,
        },
        {
            id:uuidv4(),
            description:'create a MERN project',
            isDone:false,
        },
        {
            id:uuidv4(),
            description:'working',
            isDone:false,
        }
    ]
const reducer=(state=initState,action)=>{
    switch(action.type){        
        case ADD_TODO:
            return [...state,action.payload]
        case DELETE:
            return state.filter(el => el.id !== action.payload)
        case DONE:
            return state.map(el => el.id === action.payload ? {...el, isDone: !el.isDone} : el)  
        case EDIT:
            return state.map(el => el.id === action.payload.id ? action.payload : el )      
        default:
            return state;
        }
}
export default reducer;