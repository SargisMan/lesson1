import React from 'react';
import Task from './Task'

class ToDo extends React.Component {
    state={
        tasks:['Task1','Task2','Task3']
    }
render(){
    const {tasks}=this.state;
    const Tasks=this.state.tasks.map((task,index)=>{
        return(
            <Task task={task} key={index}/>
        )
    })
    return(
        <div>
            <h1>To do component</h1>
                <div>
                <input type="text" placeholder="Add task"></input>
                <button>Add</button>
                </div>
        
                <div className="task_wrapper">
                    {/* {!tasks.length && <div>Task is empty</div>} */}
                    {Tasks}
                </div>
        </div>
    )
}
}

export default ToDo;
