import './App.css';
import TopNav from './components/nav/TopNav';
import TodoList from './components/todo/TodoList';
import AddTodo from './components/todo/AddTodo'

function App() {
  return (
    <div className="App" style={{marginTop:'5px'}}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-7 m-auto'>
            <TopNav />
            <AddTodo />
            <TodoList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
