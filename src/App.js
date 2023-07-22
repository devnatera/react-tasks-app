import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

function App() {
  return (
    <div className="App">
      <TodoCounter completed={3} total={5} />
      <TodoSearch />
      <TodoList>
        <TodoItem />
      </TodoList>
      <CreateTodoButton />
    </div>
  );
}

export default App;
