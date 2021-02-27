import React from 'react';
import Task from './Task';
import AddTask from './AddTask';
// import styles from './toDo.module.css';
import idGenerator from "../../helpers/idGenerator";
import {Container, Row, Col} from 'react-bootstrap'

class ToDo extends React.Component {
    state={
        tasks:[
        {
            _id: idGenerator(),
            title: "Task1",
            text: `AngularJS     — JavaScript-фреймворк с открытым исходным кодом.
                 Предназначен для разработки одностраничных приложений. 
                Его цель — расширение браузерных приложений на основе MVC-шаблона,
                 а также упрощение тестирования и разработки
                 `
        },
         {
            _id: idGenerator(),
            title: "Task2",
            text: `React Js       — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. 
                React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций.
                 React может использоваться для разработки одностраничных и мобильных приложений
                 `
        },
         {
            _id: idGenerator(),
            title: "Task3",
            text: `Vue.js      — JavaScript-фреймворк с открытым исходным кодом для создания пользовательских интерфейсов.
                 Легко интегрируется в проекты с использованием других JavaScript-библиотек. 
                Может функционировать как веб-фреймворк для разработки одностраничных приложений в реактивном стиле
                `
        },
    ],
}
handleSubmit=(value)=>{
if(!value) return;
const tasks=[...this.state.tasks];
tasks.push({
    _id: idGenerator(),
    text: value,
});
this.setState({
    tasks
});
}

handleDeleteOneTask=(id)=>{
    // console.log('id',id)
let tasks=[...this.state.tasks];
tasks=tasks.filter(item=>item._id !==id)

// const idx=tasks.findIndex(item=>item._id===id);
// tasks.splice(idx,1);

this.setState({
    tasks
});
}

render(){
    const {tasks}=this.state;
    const Tasks=this.state.tasks.map(task=>{
        return(
            <Col 
            key={task._id}
            className="d-flex justify-content-center mt-3"
            xs={12}
            md={6}
            xl={4}
            >
                <Task 
                task={task} 
                handleDeleteOneTask={this.handleDeleteOneTask}
                />
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
