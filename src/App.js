import './App.css';
import AddTask from './component/AddTask';
import ListTask from './component/ListTask';
import FilterT from './component/FilterTask'
function App() {
  return (
    <div className="App">
      <div style={{display:"flex",margin:20}}>
      <AddTask />
      <FilterT />
      </div>
      <ListTask />      
    </div>
  );
}
export default App;
