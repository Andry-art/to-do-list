import './TaskInput.css'
import React from 'react';

class TaskInput extends React.Component {
    constructor(props){
    super(props)
    
    this.state = {
        input: ''
    }
}

addTask = () => {
    const {input} = this.state;
    if(input){
        this.props.addTask(input)
        this.setState({input: ''})
    }
}

changeInput = (event) => {
    this.setState({input: event.target.value})
}

handleEnter = (event) =>{
    if(event.key === 'Enter') this.addTask();
}

render(){
    const {input} = this.state;

    return <>
    <div className="input">
        <input type='text' value = {input} onChange={this.changeInput} onKeyPress = {this.handleEnter}></input>
        <button onClick = {this.addTask}>ADD</button>
    </div>
    </>
}

}

export default TaskInput;