import './App.css';
import Default, {obj, obj2} from './test.js/test';
import Name from './Components/name';
import SurName from './Components/surename';
import Age1 from './Components/age';
import City from './Components/city';
import Street from './Components/street'


function App() {
  console.log(obj);
  console.log(obj2);
  console.log('Default',Default);
  return (
    <div className="App">
      <Name />
      <SurName />
      <Age1 />
      <City />
      <Street />
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
