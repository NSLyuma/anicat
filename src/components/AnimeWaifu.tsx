import { useState } from 'react';

function AnimeWaifu() {
  const [waifu, setWaifu] = useState('');

  const findWaifu = async () => {
    const url = 'https://api.waifu.im/search';
    const response = await fetch(url);
    const data = await response.json();
    const [img] = data.images;

    setWaifu(img.url);
  };

  return (
    <div>
      <button onClick={findWaifu}>Найти вайфу</button>
      {waifu && <img width={'200px'} src={waifu} alt="waifu" />}
    </div>
  );
}

export default AnimeWaifu;
