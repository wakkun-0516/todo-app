import {useState,useEffect} from "react";
import { supabase } from "./supabase";

function App() {
  const [todos,setTodos] = useState([])
  const [text,setText] = useState('')

  //追加処理
  const addTodo = () => {
    if (!text) return;

    const newTodo = {
      id:Date.now(),
      text:text,
      done:false
    }

    setTodos([...todos,newTodo])

    setText('')
  }

  //削除処理
  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id
    })

    setTodos(newTodos)
  }

  //toggle処理
  const toggleTodo = (id) => {
    const newTodos = todos.map((todo) => {
      return todo.id!==id ? todo : {...todo,done:!todo.done}
    })

    setTodos(newTodos)
  }

  const getTodos = async () => {
    const { data, error } =
      await supabase
        .from("todos")
        .select("*");

    if (error) {
      console.log(error);
      return;
    }
    console.log(data);
    setTodos(data);
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <h1>Todoアプリ</h1>
      <input
        type='text'
        placeholder='やること'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addTodo}>追加</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              onClick={() =>toggleTodo(todo.id)}
              style={
                {textDecoration:todo.done ? 'line-through' : 'none',
                cursor:'pointer'}
              }
            >{todo.text}</span>
            <button onClick={() =>deleteTodo(todo.id)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App;