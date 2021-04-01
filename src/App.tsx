import React from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";

function App() {
    let tasks1: Array<TaskType> = [
        { id: 1, title: "CSS", isDone: true},
        { id: 1, title: "TS", isDone: true},
        { id: 1, title: "React", isDone: false}
    ]
    let tasks2: Array<TaskType> = [
        { id: 1, title: "TOR", isDone: true},
        { id: 1, title: "Titanic", isDone: true},
        { id: 1, title: "Help", isDone: false}
    ]
    return (
        <div className="App">
            <Todolist title="What to Learn" tasks={tasks1}/>
            <Todolist title="Movies" tasks={tasks2}/>
        </div>
    );
}

export default App;
