import React, {Component} from 'react';
import './App.css';
import ToDo from './Components/ToDo/toDo';
// import A from './jsTests.js/A';
// import image from '../src/assets/images/person.jpg';
// import styles from '../src/assets/image.module.css'
// import Grid from './test.js/Grid/Grid'
// import Lifecycle from './Components/Demo/Lifecycle'
import Demo from '../src/Components/Demo/Demo'



class App extends Component {
  state={
    isLifeCycle: true
  }
  
  render(){

    return ( 
    <div className="App">
      <Demo />
      <ToDo test="true" />
      {/* <Lifecycle /> */}
      {/* {this.state.isLifeCycle && <Lifecycle />}   */}
    </div>
    )
  }
}

export default App;
