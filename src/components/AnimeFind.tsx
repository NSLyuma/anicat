import { nanoid } from 'nanoid';
import { useState } from 'react';

function AnimeFind() {
  const [url, setUrl] = useState('');
  const [data, setData] = useState([]);

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
  return (
    <div>
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

export default AnimeFind;
