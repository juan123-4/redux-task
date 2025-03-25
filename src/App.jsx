import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask } from './redux/todosSlice';
import "./App.css"

function App() {
  const tasks = useSelector((state) => state.todos.tasks); 
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState('');


   //para Agregar tareas
  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      dispatch(addTask({ id: Date.now(), name: newTask })); 
      setNewTask('');
    }
  };


  //para Eliminar tareas
  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId)); 
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Añadir nueva tarea"
      />
      <button onClick={handleAddTask}>Agregar</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.name}
            <button onClick={() => handleDeleteTask(task.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
