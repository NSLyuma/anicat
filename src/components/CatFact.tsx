import { useState } from 'react';

function CatFact() {
  const [fact, setFact] = useState('');

  const getCatFact = async () => {
    const url = 'https://meowfacts.herokuapp.com/?lang=rus&count=1';
    const response = await fetch(url);
    const { data } = await response.json();
    const newFact: string = data[0];
    setFact(newFact);
  };

  return (
    <div className="file file_last">
      <button className="file_btn" onClick={getCatFact}>
        Хочу факт про кошек!
      </button>
      {fact && <div className="file_fact">{fact}</div>}
    </div>
  );
}

export default CatFact;
