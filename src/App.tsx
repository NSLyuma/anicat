import React, { useState } from 'react';
import './App.css';

function App() {
  const [gif, setGif] = useState<Blob>();
  const [img, setImg] = useState<Blob>();
  const [fact, setFact] = useState('');

  const getCatGif = async () => {
    const url = 'https://cataas.com/cat/gif';
    const response = await fetch(url);
    const newGif: Blob = await response.blob();
    setGif(newGif);
  };

  const getCatImg = async () => {
    const url = 'https://cataas.com/cat';
    const response = await fetch(url);
    const newImg: Blob = await response.blob();
    setImg(newImg);
  };

  const getCatFact = async () => {
    const url = 'https://meowfacts.herokuapp.com/?lang=rus&count=1';
    const response = await fetch(url);
    const { data } = await response.json();
    const newFact: string = data[0];
    setFact(newFact);
  };

  return (
    <div>
      <div>{gif && <img src={URL.createObjectURL(gif)} alt="cat-gif" />}</div>
      <button onClick={getCatGif}>CatGif</button>

      <div>{img && <img src={URL.createObjectURL(img)} alt="cat-img" />}</div>
      <button onClick={getCatImg}>CatImg</button>

      <div>{fact}</div>
      <button onClick={getCatFact}>CatFact</button>
    </div>
  );
}

export default App;
