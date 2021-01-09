import './App.css';
import AddTask from './component/AddTask';
import ListTask from './component/ListTask';
import FilterT from './component/FilterTask'
function App() {
  let today = new Date()
  let date =today.toUTCString();
  return (
    <div className="App">
      <h1>ToDo List for today:</h1>
      <h4>{date}</h4>
      <div style={{marginLeft:250}}>
      <div style={{display:"flex",margin:20}}>
      <AddTask />
      <FilterT />
      </div>
      <ListTask />      
    </div></div>
  );
}
export default App;
