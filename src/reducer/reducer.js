import {v4 as uuidv4} from 'uuid';
import {ADD_TODO,DELETE,DONE,EDIT,FILTER} from '../action/actiontype'
const initState =  [
        {
            id:uuidv4(),
            description:'learn react and redux',
            isDone:true,
            complete:"true"
        },
        {
            id:uuidv4(),
            description:'learn node js',
            isDone:false,
            complete:"false"
        },
        {
            id:uuidv4(),
            description:'create a project',
            isDone:false,
            complete:"false"
        },
        {
            id:uuidv4(),
            description:'working',
            isDone:true,
            complete:"true"
        }
    ]
const reducer=(state=initState,action)=>{
    switch(action.type){        
        case ADD_TODO:
            return [...state,action.payload]
        case DELETE:
            return state.filter(el => el.id !== action.payload)
        case DONE:
            return state.map(el => el.id === action.payload ? {...el, isDone: !el.isDone,complete:!el.isDone.toString()} : el)  
        case EDIT:
            return state.map(el => el.id === action.payload.id ? action.payload : el ) 
        case FILTER:
            return state.filter(el=>el.complete===(action.payload))
        default:
            return state;
        }
}
export default reducer;