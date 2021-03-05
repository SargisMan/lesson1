// import { Button } from 'bootstrap';
import React from 'react';
// import styles from '../ToDo/addTask.module.css'
import {Form, Button} from 'react-bootstrap';
import PropTypes from 'prop-types'

class AddTask extends React.Component{
    constructor(props){
        super(props);
        this.inputRef=React.createRef()
        this.state={
        inputValue:''
    }
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
        // console.log('input', this.inputRef.current.value)
        const {inputValue}=this.state;
        const {handleSubmit}=this.props;

           handleSubmit(inputValue);
           this.setState({
               inputValue:''
           })
       }

       componentDidMount(){
           this.inputRef.current.focus();
       }

   render(){
    //    console.log('render', this.state.inputValue)
       const {inputValue}=this.state;
       const {disabled}=this.props;
       
       
    return(
        <div className="d-flex justify-content-center mt-4s">
                <Form.Control 
                type="text" 
                placeholder="Add task" 
                onChange={this.handleChange}
                onKeyPress={this.handleS}
                value={inputValue} 
                style={{width: "70%"}}
                disabled={disabled}
                ref={this.inputRef}
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

AddTask.propTypes={
    handleSubmit:PropTypes.func.isRequired,
    disabled:PropTypes.bool.isRequired
}
export default AddTask;
