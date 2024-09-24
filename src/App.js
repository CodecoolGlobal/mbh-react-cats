import { useState } from "react";

import './App.css';
import Greeting from './Greeting';
import Counter from './Counter';

function Cat({ catData }) {
  return (
    <div className="Cat">
      <h1>Name: {catData.name}</h1>
      <img style={{ width: '300px' }} src={catData.img} alt={catData.name} />
    </div>
  );
}

function CatCounter() {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount( oldValue => oldValue + 1 );
    setClickCount( oldValue => oldValue + 1 );
    setClickCount( oldValue => oldValue + 1 );
  }

  return (
    <div className="CatCounter">
      <p>Clicks: {clickCount}</p>
      <button onClick={handleClick}>Add cat</button>
    </div>
  )

}

function App() {
  const [cats, setCats] = useState([{
    name: 'Cirmi',
    img: 'https://cdn2.thecatapi.com/images/wEg45kYmd.jpg'
  }, {
    name: 'Hópihe',
    img: 'https://cdn2.thecatapi.com/images/MTkzMzUzNg.jpg'
  }, {
    name: 'Tira',
    img: 'https://cdn2.thecatapi.com/images/dk6.jpg'
  }])

  const newCat = () => {
    const cirmi = cats[0];
    setCats(oldList => [...oldList, cirmi]);

  }

  return (
    <div className="App">
      <CatCounter />
      {cats.map(cat => <Cat key={cat.img} catData={cat} />)}

      <button onClick={newCat}>New cat</button>
    </div>
  );
}

export default App;
