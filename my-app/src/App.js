import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  // Загрузка данных с API
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/items").then((response) => {
      setItems(response.data);
    });
  }, []);

  // Добавление нового элемента
  const addItem = () => {
    const item = { id: items.length + 1, name: newItem };
    axios.post("http://127.0.0.1:8000/items", item).then((response) => {
      setItems((prevItems) => [...prevItems, response.data.item]);
      setNewItem(""); // Сброс поля ввода
    });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React + FastAPI</h1>
      <div>
        <input
          type="text"
          placeholder="Введите элемент"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={addItem}>Добавить</button>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
