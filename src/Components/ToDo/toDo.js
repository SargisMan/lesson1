import React from 'react';
import Task from './Task';
import AddTask from './AddTask';
import styles from './toDo.module.css'

class ToDo extends React.Component {
    state={
        tasks:['Task1','Task2','Task3'],
    }
handleSubmit=(value)=>{
// console.log('velue', value);
if(!value) return;
const tasks=[...this.state.tasks];
tasks.push(value);
this.setState({
    // tasks: tasks
    tasks
});
}

render(){
    const {tasks}=this.state;
    const Tasks=this.state.tasks.map((task,index)=>{
        return(
            <Task 
            task={task} 
            key={index}
            active={index===1}
            active2={index===2}
            />
        )
    })
    return(
        <div>
            <h1 className={styles.txt}>To do component</h1>
            <AddTask handleSubmit={this.handleSubmit} />
            <div className={styles.task_wrapper}>
                 {!tasks.length && <div>Task is empty</div>}
                {Tasks}
            </div>
            {/* <div className={styles.task}></div> */}
        </div>
    )
}
}

export default ToDo;
