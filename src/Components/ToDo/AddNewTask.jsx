import React from 'react';

class AddNewTask extends React.Component{
    state={
        inputValue:''
    }

    handleChange=(e)=>{
        // console.log(e.target.value)
        this.setState({
            inputValue: e.target.value
        })
    }

    handleReset=()=>{
        this.setState({
            inputValue:''
        })
    }

    handleSubmit=(e)=>{
        // console.log('onSubmit', this.props.onSubmit);
        const {onSubmit}=this.props;
        const {inputValue}=this.state;
        onSubmit(inputValue)
    }

    render(){
        const {inputValue}=this.state;
        return(
            <div>
                <h1>AddNewTask Component: INPUT</h1>
                <input type="text" 
                placeholder="Add task" 
                onChange={this.handleChange}
                value={inputValue}
                ></input>
                <button onClick={this.handleSubmit}>Add</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}

export default AddNewTask;