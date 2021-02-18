import React from 'react';

class D extends React.Component {
    // constructor(props){
    //     this.props=props;
    // }
    render(){
        console.log("this.props " , this.props);
        const {nameD, usernameD}=this.props;
        return (<div>
            <h1>I am D Class Component</h1>
            <p>Name = {nameD}</p>
            <p>Username = {usernameD}</p>
        </div>
        )
    }
}

export default D;