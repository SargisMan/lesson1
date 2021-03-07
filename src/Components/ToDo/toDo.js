import React from 'react';
import Task from './Task';
import AddTask from './AddTask';
// import styles from './toDo.module.css';
import Confirm from '../Confirm/Confirm';
import EditTestModal from '../../Components/EditTaskModal/EditTaskModal'
import idGenerator from "../../helpers/idGenerator";
import {Container, Row, Col, Button} from 'react-bootstrap'
import EditTaskModal from '../../Components/EditTaskModal/EditTaskModal';
// import { Button } from 'bootstrap';


class ToDo extends React.Component {
    state={
        tasks:[
        {
            _id: idGenerator(),
            title: "AngularJS",
            description:`JavaScript-фреймворк с открытым исходным кодом.
                 Предназначен для разработки одностраничных приложений. 
                Его цель — расширение браузерных приложений на основе MVC-шаблона,
                 а также упрощение тестирования и разработки
                 `
        },
         {
            _id: idGenerator(),
            title: "React Js",
            description:`JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. 
                React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций.
                 React может использоваться для разработки одностраничных и мобильных приложений
                 `
        },
         {
            _id: idGenerator(),
            title: "Vue.js",
            description:`JavaScript-фреймворк с открытым исходным кодом для создания пользовательских интерфейсов.
                 Легко интегрируется в проекты с использованием других JavaScript-библиотек. 
                Может функционировать как веб-фреймворк для разработки одностраничных приложений в реактивном стиле
                `
        },
    ],
    // removeTasks:[]
    removeTasks: new Set(),
    isAllChecked: false,
    isConfirmModal: false,
    editableTask:null

}
handleSubmit=(formData)=>{
if(!formData.title || !formData.description) return;
const tasks=[...this.state.tasks];
tasks.push({
    _id: idGenerator(),
    title:formData.title,
    description:formData.description
});
this.setState({
    tasks
});
}

   handleDeleteOneTask = (id) => {
        let tasks = [...this.state.tasks];
        tasks = tasks.filter(item => item._id !== id);
        this.setState({
            tasks
        });
    }
    toggleSetRemoveTaskIds = (_id) => {
        let removeTasks = new Set(this.state.removeTasks);
        if (removeTasks.has(_id)) {
            removeTasks.delete(_id);
        } else {
            removeTasks.add(_id);
        }

        this.setState({
            removeTasks
        });
    }
    removeSelectedTasks = () => {
        let tasks = [...this.state.tasks];
        const { removeTasks } = this.state;
        tasks = tasks.filter(item => !removeTasks.has(item._id));
        this.setState({
            tasks,
            removeTasks: new Set(),
            isAllChecked: false
        });

    }

    handleToggleCheckAll=()=>{
        const {tasks, isAllChecked}=this.state;
        let removeTasks=new Set()
        if(!isAllChecked){
        removeTasks=new Set(this.state.removeTasks);
        tasks.forEach(task=>{
            removeTasks.add(task._id)
        })
        }
      
        this.setState({
            removeTasks,
            isAllChecked:!isAllChecked
        })
    }

    handleToggleOpenModal=()=>{
        this.setState({
            isConfirmModal: !this.state.isConfirmModal
        });
    }

    handleSetEditTask=(task)=>{
        this.setState({
            editableTask: task
        });
    }

    setEditableTaskNull=()=>{
         this.setState({
            editableTask: null
        });
    }

    handleEditTask=(editTask)=>{
        const tasks=[...this.state.tasks];
        const idx=tasks.findIndex(task=>task._id===editTask._id);
        tasks[idx]=editTask;
        this.setState({
            tasks
        });
    }

render(){
    // console.log('props ToDo',this.props)
    const {
        tasks, 
        removeTasks, 
        isAllChecked, 
        isConfirmModal, 
        editableTask}=this.state;
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
                // task={{_id:5,text:15}}
                handleDeleteOneTask={this.handleDeleteOneTask}
                toggleSetRemoveTaskIds={this.toggleSetRemoveTaskIds}
                disabled={!!removeTasks.size}
                checked={removeTasks.has(task._id)}
                handleSetEditTask={this.handleSetEditTask}
                />
            </Col>
        )
    })
    console.log('test',this.props.test)
    return(
        <div>
            <Container>
                <Row className="mt-4">
                    <Col>
                        <h1>To do component</h1>
                        <AddTask 
                            handleSubmit={this.handleSubmit} 
                            disabled={!!removeTasks.size}
                        />
                    </Col>                    
                </Row>
                <Row className="mt-4">
                    {!tasks.length && <div>Task is empty</div>}
                    {Tasks}
                </Row>
                <Row className="mt-5">
                    <Col>
                    <Button variant="danger"
                    // onClick={this.removeSelectedTasks}
                    onClick={this.handleToggleOpenModal}
                    disabled={!!!removeTasks.size}
                    >Remove Selected</Button>

                    <Button variant="primary"
                    className="ml-5"
                    onClick={this.handleToggleCheckAll}
                    disabled={!!!tasks.length}
                    >
                        {isAllChecked ? 'Remove All Selected': 'Select All'}
                    </Button>
                    </Col>
                </Row>

            </Container>
            {isConfirmModal && <Confirm 
            onHide={this.handleToggleOpenModal}
            onSubmit={this.removeSelectedTasks}
            // count={removeTasks.size}
            massage={`Do you want to delete ${removeTasks.size} Task ?`}
            />}
            {
                editableTask && <EditTaskModal 
                editableTask={editableTask}
                onHide={this.setEditableTaskNull}
                onSubmit={this.handleEditTask}
                />
            }
        </div>
    )
}
}


export default ToDo;


