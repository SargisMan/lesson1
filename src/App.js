import React, {Component} from 'react';
import './App.css';
import ToDo from './Components/ToDo/toDo';
// import A from './jsTests.js/A';
// import image from '../src/assets/images/person.jpg';
// import styles from '../src/assets/image.module.css'
// import Grid from './test.js/Grid/Grid'
// import Lifecycle from './Components/Demo/Lifecycle'



class App extends Component {
  state={
    isLifeCycle: true
  }
  
  render(){

    return ( 
    <div className="App">
      <ToDo test="true" />
      {/* {this.state.isLifeCycle && <Lifecycle />}   */}
    </div>
    )
  }
}

export default App;
