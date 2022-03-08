import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import React from "react";

function App() {
    const [toDos, setTodos] = useState([]);
    const [toDo, setTodo] = useState("");
    return (
        <div className="container">
            <div className="header">
                <h1 className="title">To-Do-App</h1>
                <h3 className="sub-title">To Do List</h3>
            </div>
            <div className="input">
                <input
                    value={toDo}
                    className="todo-input"
                    onChange={(e) => setTodo(e.target.value)}
                    type="text"
                    placeholder="🖊️ Add item..."
                />
                <i onClick={() => setTodos([...toDos, toDo])} className="fas fa-plus add-btn"></i>
            </div>

            {toDos.map((value) => {
                return (
                    <div className="todos">
                        <div className="todo">
                            <div className="left">
                                <input type="checkbox" name="" id="" />
                                <p>{value}</p>
                            </div>
                            <div className="right">
                                <i className="fas fa-times"></i>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
export default App;
