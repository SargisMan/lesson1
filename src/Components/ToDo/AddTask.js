import React from 'react';

class AddTask React.Component{
    state={
        inputValue:''
    }
    handleChange=(event)=>{
        const {value} = event.target;
        this.setState({
            inputValue: value
        }, ()=>{
            console.log('UpdateState', this.state.inputValue)
        })
    }

   render{
    //    console.log('render', this.state.inputValue)
       const {inputValue}=this.state;
    return(
        <div>
                <input type="text" 
                placeholder="Add task" 
                onChange={this.handleChange}
                value={inputValue}
                ></input>
                <button>Add</button>
                </div>
        )
    }
}
export default AddTask;
