import './App.css';
import Name from './Components/name';
import SurName from './Components/surename';
import Age1 from './Components/age';
import City from './Components/city';
import Street from './Components/street';
import TownA from './Components/town';
import Cards from './Components/Cards';
import { render } from '@testing-library/react';


function App() {

    const card1=
  {
    title: 'GifCard1',
    imgUrl: 'https://onex.am/img/svg/step1.svg',
    imgAlt: 'World countries',
    text: 'Card1 descripption'
  };

  const card2={
    title: 'GifCard2',
    imgUrl: 'https://onex.am/img/svg/step2.svg',
    imgAlt: 'Shoping pic',
    text: 'Card2 descripption'
  };

  const card3={
    title: 'GifCard3',
    imgUrl: 'https://onex.am/img/svg/step3.svg',
    imgAlt: 'Smart delivery',
    text: 'Card3 descripption'
  }


return (
  <div className="App">
    <div className="card_wrapper">
      <Cards  title={card1.title} img={card1.imgUrl} imgAlt={card1.imgAlt} text={card1.text} />
      <Cards  title={card2.title} img={card2.imgUrl} imgAlt={card2.imgAlt} text={card2.text} />
      <Cards  title={card3.title} img={card3.imgUrl} imgAlt={card3.imgAlt} text={card3.text} />
    </div>
  </div>
)

}

export default App;
