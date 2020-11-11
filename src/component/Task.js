import { remove,done,edit} from '../action/action';
import { connect } from 'react-redux';
import { useState } from 'react';
const Task =(props)=> {
    const [state, setState] = useState({
        id: props.todo.id,
        description:props.todo.description,
        isDone: props.todo.isDone
        
    })
    const [disabled , setDisabled] = useState (true)
    const handleChange = e => {setState({...state , description: e.target.value})}
    const fcEdit = () => { 
        setDisabled( !disabled)
    }
    const Edit = ( ) => {
        props.edit(state)
        setDisabled( !disabled)
    }
    return (
        <div key={props.todo.id} style={{display:"flex",width:"80%",marginLeft:50,padding:15,border:"2px solid" }}>
            <button onClick={()=>props.completed(state.id)}>{(props.todo.isDone)?
                <i className="fa fa-check-square-o fa-2x" aria-hidden="true"></i>:
                <i className="fa fa-square-o fa-2x" aria-hidden="true"></i>
            }</button>
            <input className="form-control" onChange={handleChange} type="text" value={disabled ? props.todo.description :state.description} disabled={disabled } />           
            <button onClick={ disabled ?  fcEdit : Edit}>
                <i className="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i>
            </button>
            <button onClick={()=>props.deleteTodo(props.todo.id)}>
                <i className="fa fa-trash-o fa-2x" aria-hidden="true"></i>
            </button>            
        </div>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        deleteTodo: id => dispatch(remove(id)),
        completed: x => dispatch(done(x)),
        edit: x => dispatch(edit(x))
    };
};
export default connect(null, mapDispatchToProps)(Task);