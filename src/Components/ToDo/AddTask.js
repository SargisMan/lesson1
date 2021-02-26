// import { Button } from 'bootstrap';
import React from 'react';
// import styles from '../ToDo/addTask.module.css'
import {Form, Button} from 'react-bootstrap'

class AddTask extends React.Component{
    state={
        inputValue:''
    }
    handleChange=(event)=>{
        const {value} = event.target;
        this.setState({
            inputValue: value
        }
        // , ()=>{
        //     console.log('UpdateState', this.state.inputValue)
        // }
        )
    };

    handleS=({key,type})=>{
        if(type==='keypress' && key!=='Enter') return;

        const {inputValue}=this.state;
        const {handleSubmit}=this.props;

           handleSubmit(inputValue);
           this.setState({
               inputValue:''
           })
       }

   render(){
    //    console.log('render', this.state.inputValue)
       const {inputValue}=this.state;
       
       
    return(
        <div className="d-flex justify-content-center mt-4s">
                <Form.Control 
                type="text" 
                placeholder="Add task" 
                onChange={this.handleChange}
                onKeyPress={this.handleS}
                value={inputValue} 
                style={{width: "70%"}}
                />
                <Button 
                variant="primary"
                onClick={this.handleS}
                disabled={!!!inputValue}
                >Add</Button>
                </div>
        )
    }
}
export default AddTask;
