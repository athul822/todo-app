import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
        <div className="container">
            <div className="header">
                <h1 className="title">To-Do-App</h1>
                <h3 className="sub-title">To Do List</h3>
            </div>
            
            <div className="input">
                
                <input className="todo-input" type="text" placeholder="🖊️ Add item..." />
                <i className="fas fa-plus add-btn"></i>
            </div>
        </div>
    );
}
export default App;
