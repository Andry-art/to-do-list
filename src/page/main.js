import './main.css'
import React from 'react'
import Task from '../components/task'
import TaskInput from '../components/TaskInput'


class Main extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
           tasks: [{id:0, title: 'Create to do list', done: false },
                   {id:1, title: 'Buy something', done: true},
                   {id:2, title: 'Read book', done: false },
                  ]        
      };
    }

    doneTask = id => {
        const index = this.state.tasks.map(task => task.id).indexOf(id)
        this.setState( state =>{
        let {tasks} = state ;
        return tasks[index].done = true;
        
    })
    }

    deleteTask = id => {
        const index = this.state.tasks.map(task => task.id).indexOf(id)
        console.log(index)
        this.setState( state => {
            let {tasks} = state;
            return {tasks : tasks.filter((task,i,ar) => task !== ar[index])}  
            
        })
    }

    undoTask = id => {
        const index = this.state.tasks.map(task => task.id).indexOf(id)
        this.setState( state =>{let {tasks} = state ;
        tasks[index].done = false;
        return tasks})
    }

    addTask = (task) =>{
      this.setState(state => {
           let {tasks} = state;
        
       return{ tasks:[ ...tasks, {
            id: tasks.length !== 0 ? tasks.length : 0,
            title: task,
            done: false,
        }]
    }
        })
    }

    render(){
       const {tasks} = this.state;
       const active = tasks.filter(task => !task.done);
       const done = tasks.filter(task => task.done)

        return <>
        <div className = "form">
            <div className = "back">
             <h1 className = "title">Active tasks: {active.length}</h1>
             </div>
             {[...active, ...done].map(task => (<Task 
             doneTask={()=> this.doneTask(task.id)}
             deleteTask={()=> this.deleteTask(task.id)}
             undoTask={()=> this.undoTask(task.id)}
              task={task} key={task.id}></Task>))}
              
               <TaskInput addTask={this.addTask}/>
        </div>
        </>
    }
}

export default Main ;