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
    <div className="waifu">
      <button className="anime_btn" onClick={findWaifu}>
        Найти вайфу
      </button>
      <div className="waifu_item">
        {waifu && <img className="waifu_img" src={waifu} alt="waifu" />}
      </div>
    </div>
  );
}

export default AnimeWaifu;
