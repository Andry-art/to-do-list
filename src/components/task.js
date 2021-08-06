import './task.css'
import React from 'react'


const Task = ({task, ...props}) => {

const Actionbtn = () =>{
   return <div>{task.done ? <div className="total-done"><div className="done" onClick={props.undoTask}>
    <div class="cl-btn-2">
        <div>
       <div class="leftright"></div>
       <div class="rightleft"></div>
       </div>
    </div>
</div> <button className="delete" onClick={props.deleteTask}>Delete</button></div>: <div className="undo" onClick={props.doneTask}>
<div class="cl-btn-1">
    <div>
       <div class="leftright1"></div>
       <div class="rightleft1"></div>
       </div>
    </div>
</div>}</div>
}

const className = task.done ? 'item-done' : 'item'

    return <>
    <div className = 'task'>
         <p className={className}>{task.title}</p>
         <Actionbtn></Actionbtn>
    </div>
    </>
}

export default Task;