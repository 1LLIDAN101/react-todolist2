import { useState } from "react";

function App() {
  const [todos, setTodos] = useState(['']);
    const [inputValue2, setInputValue2] = useState('MAGA');

  const [inputValue, setInputValue] = useState("BMW");
  const [cars , setCars] = useState([])


  function addTodo() {
    setTodos([...todos, inputValue2]);
  }
//////////////////////////////////////////////////////////////
function addCar(){
  setCars([...cars , inputValue])
}

  return (
    <div className="App">
      <input
        value={inputValue2}
        onChange={(event) => setInputValue2(event.target.value)}
      />
      <button onClick={() => addTodo()}>Добавить</button>
      <h3>Список задач</h3>
      <br></br>

      {todos.map((element)=>{
        return <div style={{background: "gray", color: "blue"}}>{element}</div>
      })}
      <br></br>
      <hr></hr>
            <input
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button onClick={() => addCar()}>Добавить</button>
      <h3>Список задач</h3>
      <br></br>

      {cars.map((element)=>{
        return <div style={{background: "gray", color: "blue"}}>{element}</div>
      })}
    </div>
  );
}

export default App;
