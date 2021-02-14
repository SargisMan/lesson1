import React from 'react';


class B extends React.Component{
    state={
        inputValue:''
    }
    handleChange=(e)=>{
        this.setState({
           inputValue: e.target.value 
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
            <h1>B Component: INPUT</h1>
            <input
            type="text"
            placeholder="input"
            onChange={this.handleChange}
            // value={this.state.inputValue}
            value={inputValue}
            ></input>
            <button onClick={this.handleSubmit}>Transfer</button>
        </div>
    )
    }   
}

export default B;