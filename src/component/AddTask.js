import { useState } from 'react';
import { connect } from 'react-redux';
import { add } from '../action/action';
import {v4 as uuidv4} from 'uuid';
const AddTask=(props)=>{
    const [state,setState]=useState({
        id:uuidv4(),
        description:"",
        isDone:false
    });
    const handle=(e)=>{setState({...state,description : e.target.value})}
    const add=()=>{
        props.addNewTodo({...state, id: uuidv4()} )
        setState({description: ''})
    }
    return ( 
        <div  style={{display:"flex",padding:"0px 20px 0px 20px",width:"50%"}}>               
            <input type="text" className="form-control" placeholder="Add a new todo"  onChange={handle} value={state.description} style={{height:37}} />               
            <button onClick={add} > <i className="fa fa-plus-square fa-2x" aria-hidden="true"  ></i></button>                    
        </div>   
    )
}
const mapDispatchToProps = dispatch => {
    return{
        addNewTodo: x => dispatch(add(x))
    }
}
export default connect(null, mapDispatchToProps)(AddTask);