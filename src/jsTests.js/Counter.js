import React, {Component} from 'react';
import Country from './Country';
import Result from './Result';
import Action from './Action'

class Counter extends Component {

    // constructor(props){
    //     super();
    //     this.state={
    //         counter:props.counter,
    //         componentName: 'Counter'
    //     }
    // }
    state = {
        count : 0 ,
        componentName: 'Counter',
        isArmenia: true
    }
    handlePlusCount=(SEvent)=>{
        // this.state.counter=this.state.counter+1;     սխալ
        // console.log('State', this.state)
        this.setState({
            count:this.state.count+1
        })
    }

    handleMinusCount=(SEvent)=>{
        // this.state.counter=this.state.counter+1;     սխալ
        // console.log('State', this.state)
        this.setState({
            count:this.state.count-1
        })
    }

    togglechangeCounty=()=>{
        this.setState({
            isArmenia:!this.state.isArmenia,
        })
    }

    render(){
        // console.log("state ", this.state)
        const {count} =this.state;
        return(
            <div>
                <Result count={count}/> 
               <Country isArmenia={this.state.isArmenia}  togglechangeCounty={this.togglechangeCounty}/>   
               <Action handlePlusCount={this.handlePlusCount} handleMinusCount={this.handleMinusCount}  />        
            </div>
        )
    }
}

export default Counter;