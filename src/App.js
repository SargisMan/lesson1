import React, {Component} from 'react';
import './App.css';
import ToDo from './Components/ToDo/toDo';



class App extends Component {
  
  render(){

    return ( 
    <div className="App">
      <ToDo test="true" />
    </div>
    )
  }
}

export default App;
