import { useState } from 'react';

function AnimeWaifu() {
  const [waifu, setWaifu] = useState('img/gag.jpg');
  const [isLoading, setIsLoading] = useState(true);

  const waifuImg = document.querySelector<HTMLImageElement>('.waifu_img');

  const findWaifu = async () => {
    setIsLoading(true);

    if (waifuImg) {
      waifuImg.style.opacity = '0';
    }

    const url = 'https://api.waifu.im/search';
    const response = await fetch(url);
    const data = await response.json();
    const [img] = data.images;

    setWaifu(img.url);
  };

  const handleImageLoading = () => {
    //срабатывает, когда картинка полностью загружена
    setIsLoading(false);

    if (waifuImg) {
      waifuImg.style.opacity = '1';
    }
  };

  return (
    <div className="waifu">
      <button className="anime_btn" onClick={findWaifu}>
        Найти вайфу
      </button>

      <div className="waifu_item">
        {isLoading && (
          <div className="loading">
            <div className="loading_text">Подождите...</div>
            <img
              className="loading_img"
              src="img/anime-load.gif"
              alt="loading"
            />
          </div>
        )}
        {waifu && (
          <img
            className="waifu_img"
            onLoad={handleImageLoading}
            src={waifu}
            alt="waifu"
          />
        )}
      </div>
    </div>
  );
}

export default AnimeWaifu;
