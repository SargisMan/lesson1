import './App.css';
import Name from './Components/name';
import SurName from './Components/surename';
import Age1 from './Components/age';
import City from './Components/city';
import Street from './Components/street';
import TownA from './Components/town';


function App() {
  return (
    <div className="App">
      <Name />
      <SurName />
      <Age1 />
      <City />
      <Street />
      <TownA />
      {/* <Test />
      <Info /> */}
          </div>
  );

// function Test () {
//   return <p>Hello world</p>
// }
// function Info () {
//   return <div className='info'>
//     <span>Name:</span>
//     <span>LastName:</span>
//     <span>Age:</span>
//   </div>
// }

}

export default App;
