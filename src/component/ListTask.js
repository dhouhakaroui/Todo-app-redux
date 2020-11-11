import { connect } from 'react-redux';
import Task from './Task';
const ListTask =(props)=> {
    return (
        <div>
        { props.filterT ==="all" ?
            <div>{props.initstate.map(el => <Task key={el.id} todo={el}/>)}</div>:props.filterT ==="true"?
            <div>{props.initstate.filter(el=>el.isDone===true).map(el => <Task key={el.id} todo={el}/>)}</div>:
            <div>{props.initstate.filter(el=>el.isDone===false).map(el => <Task key={el.id} todo={el}/>)}</div>
            }
        </div>
    )
}        
const mapStateToProps = state => {
    return {
        initstate:state.Reducer,
        filterT:state.filterReducer
    };
};
export default connect(mapStateToProps)(ListTask);