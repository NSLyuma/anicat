import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Anime() {
  const [url, setUrl] = useState('');
  const [data, setData] = useState([]);
  const [waifu, setWaifu] = useState('');

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event?.target.value);
  };

  const findAnime = async () => {
    const response = await fetch(
      `https://api.trace.moe/search?cutBorders&url=${encodeURIComponent(url)}`,
    );

    const dataArr = await response.json();

    setData(dataArr.result);
    setUrl('');
  };

  const findWaifu = async () => {
    const url = 'https://api.waifu.im/search';
    const response = await fetch(url);
    const data = await response.json();
    const [img] = data.images;

    setWaifu(img.url);
  };

  return (
    <div>
      <Link to="/">Main page</Link>
      <Link to="/cats">КотоГенератор</Link>

      <button onClick={findWaifu}>Найти вайфу</button>
      {waifu && <img width={'200px'} src={waifu} alt="waifu" />}

      <input
        name="url"
        type="text"
        placeholder="Ссылка на скриншот"
        value={url}
        onChange={handleOnChange}
      />
      <button onClick={findAnime}>Откуда это?</button>
      <ul>
        {data.map((item: any) => (
          <li key={nanoid()}>
            <img src={item.image} />
            <p>From {item.filename}</p>
            <p>Episode: {item.episode}</p>
            <video controls>
              <source src={item.video} />
            </video>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Anime;
