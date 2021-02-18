import React from 'react';
import Task from './Task';
import AddTask from './AddTask';
// import styles from './toDo.module.css';
import idGenerator from "../../helpers/idGenerator";
import {Container, Row, Col} from 'react-bootstrap'

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
            <Col 
            key={idGenerator()}
            className="d-flex justify-content-center mt-3"
            xs={12}
            md={6}
            xl={4}
            >
                <Task 
                task={task} />
            </Col>
            // <Task 
            // task={task} 
            // key={idGenerator()}
            // active={index===1}
            // active2={index===2}
            // />
        )
    })
    return(

        <div>
            <Container>
                <Row className="mt-4">
                    <Col>
                        <h1>To do component</h1>
                        <AddTask 
                            handleSubmit={this.handleSubmit} 
                        />
                    </Col>                    
                </Row>
                <Row className="mt-4">
                    {!tasks.length && <div>Task is empty</div>}
                    {Tasks}
                </Row>

            </Container>
        </div>
  
        // <div>
        //     <h1 className={styles.txt}>To do component</h1>
        //     <AddTask handleSubmit={this.handleSubmit} />
        //     <div className={styles.task_wrapper}>
        //          {!tasks.length && <div>Task is empty</div>}
        //         {Tasks}
        //     </div>
        //     {/* <div className={styles.task}></div> */}
        //     <div>
        //         <Button variant="danger">DELETE</Button>
        //     </div>
        // </div>
    )
}
}

export default ToDo;
