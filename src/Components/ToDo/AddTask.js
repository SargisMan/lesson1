import React from 'react';
import styles from '../ToDo/addTask.module.css'

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
    }

   render(){
    //    console.log('render', this.state.inputValue)
       const {inputValue}=this.state;
       const {handleSubmit}=this.props;
       const handleS=()=>{
           handleSubmit(inputValue);
           this.setState({
               inputValue:''
           })
       }
    return(
        <div>
                <input type="text" 
                placeholder="Add task" 
                onChange={this.handleChange}
                value={inputValue}
                className={styles.addT}
                ></input>
                <button onClick={handleS}
                className={styles.but}
                // onClick={()=>{handleSubmit(inputValue)}}
                >Add</button>
                </div>
        )
    }
}
export default AddTask;
