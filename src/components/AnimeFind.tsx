import { useState } from 'react';

type Data = {
  image: string;
  filename: string;
  episode: string;
  video: string;
};

function AnimeFind() {
  const [url, setUrl] = useState('');
  const [data, setData] = useState<Data>();
  const [err, setErr] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isImgLoaded, setIsImgLoaded] = useState(false);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event?.target.value);
  };

  const findAnime = async () => {
    setIsLoading(true);
    setIsImgLoaded(false);
    setData(undefined);
    setErr('');

    try {
      const response = await fetch(
        `https://api.trace.moe/search?cutBorders&url=${encodeURIComponent(
          url,
        )}`,
      );
      const dataArr = await response.json();

      setData(dataArr.result[0]);
      setUrl('');
    } catch (error) {
      let errorMessage = 'Не могу ничего найти :(';
      if (error instanceof Error) {
        setErr(errorMessage);
      }
      console.log(errorMessage);
      setUrl('');
      setData(undefined);
    }
  };

  const handleContentLoading = () => {
    setIsLoading(false);
    setIsImgLoaded(true);
  };

  return (
    <div className="find">
      <div className="find_form">
        <input
          className="find_input"
          name="url"
          type="text"
          placeholder="Ссылка на скриншот"
          value={url}
          onChange={handleOnChange}
        />
        <button className="find_btn" onClick={findAnime}>
          Откуда это?
        </button>
      </div>

      <div className="find_content">
        {err && (
          <div className="error">
            {err}
            <img className="error_img" src="img/error.gif" alt="error" />
          </div>
        )}
        {isLoading && !err && (
          <div className="find_loading">
            <p className="find_loading-text">Поиск...</p>
            <img
              className="find_loading-img"
              src="img/anime-find.gif"
              alt="loading"
            />
          </div>
        )}
        {data && (
          <div>
            <div className="find_files">
              {isImgLoaded && (
                <video controls>
                  <source src={data.video} />
                </video>
              )}
              <img
                onLoad={handleContentLoading}
                src={data.image}
                alt="screenshot"
              />
            </div>

            {isImgLoaded && (
              <div>
                <p className="find_text">
                  <b>Возможно это </b> {data.filename.split('.mp4')[0]}
                </p>
                <p className="find_text">
                  <b>Эпизод</b> {data.episode}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default AnimeFind;
