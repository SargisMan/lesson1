import React from 'react';
import Task from './Task';
import AddNewTask from './AddNewTask'

class ToDo extends React.Component {
    state={
        tasks:['Task1','Task2','Task3'],
        inputValue:''
    }
    
    handleCatchValue=(inputValue)=>{
        this.setState({
            // inputValue:inputValue
            inputValue
        })
    }
render(){
    const {tasks, inputValue}=this.state;
    const Tasks=this.state.tasks.map((task,index)=>{
        return(
            <Task task={task} key={index}/>
        )
    })
    return(
        <div>
            <h1>To do component</h1>
                
                <div>
                    {inputValue}
                </div>
                <div className="task_wrapper">
                    {!tasks.length && <div>Task is empty</div>}
                    {Tasks}
                </div>
                <div>
                    <AddNewTask onSubmit={this.handleCatchValue}/>
                </div>
        </div>
        
    )
}
}

export default ToDo;
