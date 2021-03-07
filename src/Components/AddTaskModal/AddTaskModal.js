// import { Button } from 'bootstrap';
import React from 'react';
// import styles from '../ToDo/addTask.module.css'
import {Form, Button, Modal} from 'react-bootstrap';
import PropTypes from 'prop-types'

class AddTask extends React.Component{
    constructor(props){
        super(props);
        this.inputRef=React.createRef()
        this.state={
        title:'',
        description:''
    }
    }
    
    handleChange=(event)=>{
        // console.log('target Name', event.target.name)
        const {name,value} = event.target;
        this.setState({
            [name]:value
        })
        // const {value} = event.target;
        // this.setState({
        //     inputValue: value
        // }
        // )
        // , ()=>{
        //     console.log('UpdateState', this.state.inputValue)
        // }
        
    };

    handleS=({key,type})=>{
        const {title,description}=this.state;
        const {handleSubmit, onHide}=this.props;
        if(
            (type==='keypress' && key!=='Enter') || 
            (!title || !description)
            ) return;
        // console.log('input', this.inputRef.current.value)
        const formData={
            title,
            description
        };
           handleSubmit(formData);
           onHide(); //Component-ը փակվում է
       }

       componentDidMount(){
           this.inputRef.current.focus();
       }

   render(){
    //    console.log('render', this.state.inputValue)
       const {title, description}=this.state;
       const {onHide}=this.props;
    //    const {disabled}=this.props;
       
       
    return(
              <Modal
    //   {...props}
    show={true}
    onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Task Modal
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex flex-column align-items-center">
          <Form.Control 
                name="title"
                type="text" 
                placeholder="Title" 
                onChange={this.handleChange}
                onKeyPress={this.handleS}
                value={title} 
                style={{width: "70%"}}
                // disabled={disabled}
                ref={this.inputRef}
                />
                <Form.Control 
                name="description"
                placeholder="Description"
                onChange={this.handleChange}
                className="my-3"
                as="textarea" 
                rows={3} 
                 style={{width: "70%", resize:"none"}}
                 value={description}
                 />
      </Modal.Body>
      <Modal.Footer>
          
        <Button onClick={onHide} variant="secondary">Close</Button>
        <Button 
        onClick={this.handleS} 
        variant="primary"
        disabled={!!!title || !!!description}
        >Add</Button>
      </Modal.Footer>
    </Modal>  
       
        )
    }
}

AddTask.propTypes={
    handleSubmit:PropTypes.func.isRequired,
    onHide:PropTypes.func.isRequired
    // disabled:PropTypes.bool.isRequired
}
export default AddTask;
