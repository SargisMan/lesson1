import React, {Component} from 'react';
import './App.css';
import ToDo from './Components/ToDo/toDo';
// import A from './jsTests.js/A';
// import image from '../src/assets/images/person.jpg';
// import styles from '../src/assets/image.module.css'
// import Grid from './test.js/Grid/Grid'





class App extends Component {
  state={
    login: false
  }

  toggleLogin=()=>{
    this.setState({
      login:!this.state.login
    });
  }
  render(){

    return ( 
    <div className="App">
      {/* <Grid /> */}
      
        {/* <img src={image} alt="Person" className={styles.img}></img> */}
      
       {/* <img src={'image /static/media/person.a1ab98cf.jpg'} alt="Person"></img> */}
      
      {/* <A /> */}
      <ToDo test="true" />
      {/* <div className="card_wrapper">
      {login && elements}
      </div> */}
      
      {/* {
        login && <Card 
      img={"https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"} 
      text="test" 
      imgAlt="pic" />
      } */}


      {/* <div>
        <button onClick={this.toggleLogin}>{login? 'Logout' : 'Login'}</button>
      </div> */}
      
    </div>
    )
  }
}

export default App;
