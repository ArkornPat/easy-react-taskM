import Header from "./components/Header";
import Addform from "./components/Addform";
import Items from "./components/Items";
import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem("tasks")) || []);
  const [title, setTitle] = useState("");
  const [editId, setEditId] = useState(null);
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "light";
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("theme", theme); 
  }, [tasks, theme]);

  function saveTask(e) {
    e.preventDefault();
    if (!title) {
      alert("กรุณาป้อนข้อมูล");
    } else if (editId) {
      setTasks(
        tasks.map((item) => {
          if (item.id === editId) {
            return { ...item, title: title };
          }
          return item;
        })
      );
      setEditId(null);
      setTitle("");
    } else {
      const newTask = {
        id: Math.floor(Math.random() * 1000),
        title: title,
      };
      setTasks([...tasks, newTask]);
      setTitle("");
    }
  }

  function deleteTask(id) {
    const result = tasks.filter((item) => item.id !== id);
    setTasks(result);
  }

  function editTask(id) {
    setEditId(id);
    const edit = tasks.find((item) => item.id === id);
    setTitle(edit.title);
  }

  return (
    <div className={"App " + theme}>
      <Header theme={theme} setTheme={setTheme} />
      <div className="form">
        <Addform title={title} setTitle={setTitle} saveTask={saveTask} editId={editId} />
        <section>
          {tasks.map((data) => (
            <Items key={data.id} data={data} deleteTask={deleteTask} editTask={editTask} />
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;

