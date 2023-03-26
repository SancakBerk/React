import EachTask from './EachTask'

function TaskList({tasks,onDelete,Updatedinfos}) {
    console.log(tasks)
    return ( <div className='tasklistdiv'>
        {
            tasks.map((task,index)=>
            {
                return(
                    <EachTask task ={task} key={index} onDelete={onDelete} Updatedinfos={Updatedinfos}/>

                )
            })
        }
    
    </div> );
}

export default TaskList;