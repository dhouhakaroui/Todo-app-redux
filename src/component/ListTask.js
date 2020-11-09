import { connect } from 'react-redux';
import Task from './Task';
const ListTask =(props)=> {
    return (
        <div >
            {props.initstate.map(el => <Task key={el.id} todo={el}/>)}                    
        </div>
    )
}        
const mapStateToProps = state => {
    return {
        initstate:state.Reducer
    };
};
export default connect(mapStateToProps)(ListTask);