import { useState } from 'react'
import './App.css'
import TaskList from './components/TaskList'
import TaskCreate from './components/TaskCreate.jsx'



function App() {
  const [tasks, setTasks] = useState([]);

  const deletByID=(id)=>
  {
    const taskafterdelete = tasks.filter((task)=>
    { 
      return(task.id !==id);
    })
    setTasks(taskafterdelete);
  };
  const createTask=(input,description)=>
{
  const createdTasks=[...tasks,{
    id:Math.round(Math.random()*10000),
    title:input,
    descr:description,
  }]
  setTasks(createdTasks);
}
const edittaskbyId=(id,newtitle,newdescription)=>
{
  const updatedtask = tasks.map((task)=>
  {
    if (task.id ==id) 
    {
      return {id:id,title:newtitle,descr:newdescription}
    }
    return task;
  })
  setTasks(updatedtask);
}



  return (
    <div className="App">
       <div className="task">
       <TaskCreate propses={createTask} />
        <h1>Görevler</h1>
        <div className="tasklistdivmain">
        <TaskList tasks={tasks} onDelete={deletByID} Updatedinfos={edittaskbyId} />
        </div>
        </div>      
    </div>
  )
}

export default App
