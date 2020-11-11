import { filterTask} from '../action/action';
import { connect } from 'react-redux';
const FilterT=(props) =>{
    return (
        <div>
            <select name="todos" style={{height:37}} onChange={e =>{ console.log(e.target.value) 
                props.filterTodo(e.target.value)}} >
                <option value="all">all</option>
                <option value={true}>done</option>
                <option value={false}>not done</option>
            </select>
        </div>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        filterTodo: isDone => dispatch(filterTask(isDone))
    };
};
export default connect(null, mapDispatchToProps)(FilterT)