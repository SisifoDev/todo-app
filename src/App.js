import { TodoCounter } from "./TodoCounter";
import "./App.css";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoItem } from "./TodoItem";

const todos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Tomar curso de Intro a React", completed: false },
  { text: "Tomar curso de css", completed: false },
];

function App() {
  return (
    <div className="App">
      <TodoCounter />
      <TodoSearch />
      <input type="text" placeholder="cebolla" />
      <TodoList todos={todos}>
        {todos.map((todo) => (
          <TodoItem text={todo.text} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </div>
  );
}

export default App;
