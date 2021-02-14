import React from 'react';
import Task from './Task';
import AddTask from './AddTask'

class ToDo extends React.Component {
    state={
        tasks:['Task1','Task2','Task3'],
        inputValue:''
    }
    handleChange=(e)=>{
        // console.log(e.target.value)
        this.setState({
            inputValue: e.target.value
        })
    }
    handleReset=()=>{
        this.setState({
            inputValue:''
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
            <AddTask />
                {/* <div>
                <input type="text" 
                placeholder="Add task" 
                onChange={this.handleChange}
                value={inputValue}
                ></input>
                <button>Add</button>
                <button onClick={this.handleReset}>
                    Reset</button>
                </div> */}

                {/* <div>
                    {inputValue}
                </div> */}
                
                <div className="task_wrapper">
                    {!tasks.length && <div>Task is empty</div>}
                    {Tasks}
                </div>
        </div>
    )
}
}

export default ToDo;
