import React from 'react';
import B from './B';
import C from './C'

class A extends React.Component{
    state={
        inputValue:'',
        test: false
    }

    handleCatchValue=(inputValue)=>{
        // this.setState({
        //     // inputValue:inputValue
        //     inputValue,
        //     test:true
        // })
        //    this.setState((prevState)=>{
        //        return {
        //            inputValue: prevState.inputValue
        //        }
        //    })
             this.setState((prevState)=>{
               return {
                   inputValue: prevState.inputValue+inputValue
               }
           })
    }

    render(){
        console.log("render");
        console.log('input',this.state.inputValue);
        const {inputValue}=this.state;
return( <div>
            <h1>A Component</h1>
            <div>
                <B onSubmit={this.handleCatchValue}/>
            </div>
            <div>
                <C inputValue={inputValue}/> 
            </div>
        </div>
       
        )
    }
}

export default A;
