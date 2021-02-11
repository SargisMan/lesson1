import React, {Component} from 'react';
import './App.css';
// import Name from './Components/name';
// import SurName from './Components/surename';
// import Age1 from './Components/age';
// import City from './Components/city';
// import Street from './Components/street';
// import TownA from './Components/town';
// import User from './Components/User';
// import Card from './Components/Card';
// import './jsTests.js/classJS';
// import A from './jsTests.js/A';
// import B from './jsTests.js/B';
// import D from './jsTests.js/D';
import Counter from './jsTests.js/Counter';
import ToDo from './Components/ToDo/toDo'



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
//     const cards=[
//   {
//     title: 'GifCard1',
//     imgUrl: 'https://onex.am/img/svg/step1.svg',
//     imgAlt: 'World countries',
//     text: 'Card1 descripption'
//   },

//   {
//     title: 'GifCard2',
//     imgUrl: 'https://onex.am/img/svg/step2.svg',
//     imgAlt: 'Shoping pic',
//     text: 'Card2 descripption'
//   },

//   {
//     title: 'GifCard3',
//     imgUrl: 'https://onex.am/img/svg/step3.svg',
//     imgAlt: 'Smart delivery',
//     text: 'Card3 descripption'
//   }
// ]
//     const {login}=this.state;
    
//     const elements=cards.map((card)=>{
    //   return(
    //     <Card 
    //   key={}
    //   img={card.imgUrl} 
    //   text={card.text} 
    //   imgAlt={card.imgAlt} />
    //   )
    // })

    
    // [
    // <p>Element A</p>,
    // <p>Element B</p>,
    // <p>Element C</p>
    // <Card 
    //   img={"https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"} 
    //   text="test" 
    //   imgAlt="pic" />,
    //   <Card 
    //   img={"https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"} 
    //   text="test" 
    //   imgAlt="pic" />,
    //   <Card 
    //   img={"https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"} 
    //   text="test" 
    //   imgAlt="pic" />
    // ];
    return <div className="App">
      <ToDo />
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
  }
}

export default App;
