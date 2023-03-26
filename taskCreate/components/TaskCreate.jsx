import "./taskcreate.css";
import { useState } from 'react'

function TaskCreate({propses,task,showedit,UpdatedTask}) {
    const [input, setInput] = useState(task ? task.title : "");
    const [description, setDescription] = useState(task ? task.descr :"")
    const handletitle = (veri) => {
        setInput(veri.target.value)
    }

    const handledescription = (veri) => {
        setDescription(veri.target.value)
    }
    const handlesubmit = (event) => {
        event.preventDefault();
        if (showedit) {
            UpdatedTask(task.id,input,description);
        }
        else
        {
            propses(input,description);
            setInput("");
            setDescription("");
        }
    }
    return (
        <div>
            {
                showedit ?
                <div className="taskcreatediv">
                <h3>Lütfen Taskı Düzenleyiniz</h3>
                <form className="formdiv">
                    <label>Başlığı Düzenleyeniz</label>
                    <input className="taskcreateinput" value={input} onChange={handletitle} />
                    <label>Taskı Düzenleyiniz</label>
                    <textarea className="tasktextarea" value={description} onChange={handledescription}></textarea>
                    <button className="updatedbutton" onClick={handlesubmit}>Düzenle</button>
                </form>
            </div>
            :
            <div className="taskcreatediv">
            <h3>Lütfen Task Ekleyiniz</h3>
            <form className="formdiv">
                <label>Başlık</label>
                <input className="taskcreateinput" value={input} onChange={handletitle} />
                <label>Task</label>
                <textarea className="tasktextarea" value={description} onChange={handledescription}></textarea>
                <button className="Taskcreatebutton" onClick={handlesubmit}>Oluştur</button>
            </form>
        </div>
            
            }
        </div>
        );
}

export default TaskCreate;