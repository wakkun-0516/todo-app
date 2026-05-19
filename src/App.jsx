import {useState,useEffect} from "react";

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });
  const [text,setText] = useState("");

  const addTodo = () => {
    if (!text) return;

    const newTodo = {
      id:Date.now(),
      text:text,
      done:false
    };

    setTodos([...todos,newTodo]);
    setText("");
  }

  const deleteTodo = (id) => {
    setTodos(
      todos.filter((todo) => todo.id !== id)
    );
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
            todo.id === id
              ? {...todo,done: !todo.done}
              : todo
          )
    );
  };

  useEffect(() => {
    localStorage.setItem(
      "todos",
      JSON.stringify(todos)
    );
  }, [todos]);

  return (
    <div>
      <h1>Todoアプリ</h1>
      <input
        value={text}
        onChange={(e)=>setText(e.target.value)}
        placeholder="やること"
      />
      <button onClick={addTodo}>追加</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              onClick={() => toggleTodo(todo.id)}
              style={{
                textDecoration:
                  todo.done
                    ? "line-through"
                    : "none",
                cursor: "pointer"
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App;