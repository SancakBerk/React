import { useEffect, useState } from 'react'
import './App.css'
import TaskList from './components/TaskList'
import TaskCreate from './components/TaskCreate.jsx'
import axios from 'axios'

function App() {
  const [tasks, setTasks] = useState([]);

  const deletByID= async(id)=>
  {
    await axios.delete(`http://localhost:3000/tasks/${id}`)

    const taskafterdelete = tasks.filter((task)=>
    { 
      return(task.id !==id);
    })
    setTasks(taskafterdelete);
  };
  const createTask= async (input,description)=>
{

  const response =await axios.post("http://localhost:3000/tasks",
  {
    title:input,
    descr:description,
  })
  const createdTasks=[...tasks,
  response.data]
  setTasks(createdTasks);
}
const fetchtask= async()=>
{
  const response = await axios.get("http://localhost:3000/tasks",)
  console.log(response)
  setTasks(response.data)
}

useEffect(()=>
{
  fetchtask();
},[])



const edittaskbyId=async(id,newtitle,newdescription)=>
{
  await axios.put(`http://localhost:3000/tasks/${id}`,
  {
    title:newtitle,
    descr:newdescription,

  })
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
