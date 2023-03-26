import "./Eachtask.css";
import { useState } from 'react'
import TaskCreate from './TaskCreate.jsx'


function EachTask({ task, onDelete,Updatedinfos }) {
    const [showedit, setshowEdit] = useState(false);
    const onDeleteClick = () => {
        onDelete(task.id);
    }
    const handleEditClick = () => {
        setshowEdit(true)
    }
    const handelSubmit = (id,updatedTitle,updateddescription) => {
        setshowEdit(false)
        Updatedinfos(id,updatedTitle,updateddescription);
    }
    return (
        <div className="container">
            {showedit 
            ? 
            <div>
                <TaskCreate task ={task} showedit={true} UpdatedTask={handelSubmit} />
                
            </div>
                : <div className="showeditfalsecontainer">
                    <h2>Göreviniz</h2>
                    <p> {task.title} </p>
                    <h2>Yapılacaklar</h2>
                    <p> {task.descr} </p>
                    <div className="buttons">
                        <button className="Delete" onClick={onDeleteClick}>Sil</button>
                        <button className="Update" onClick={handleEditClick}>Güncelle</button>
                    </div>
                </div>}

        </div>);
}

export default EachTask;