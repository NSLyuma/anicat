import { useEffect, useState } from 'react';
import CatLoader from './CatLoader';

const getRandom = () => {
  return Math.floor(Math.random() * (16 - 1) + 1);
};

function CatGif() {
  const [gif, setGif] = useState<Blob>();
  const [randomGif, setRandomGif] = useState('img/cats/cat1.gif');
  const [isLoading, setIsLoading] = useState(true);

  const catImg = document.querySelector<HTMLImageElement>('.file_gif');

  // useEffect(() => {
  //   setIsLoading(false);
  // }, []);

  const getCatGif = async () => {
    setIsLoading(true);
    // setGif(undefined);

    if (catImg) {
      catImg.style.opacity = '0';
    }

    // const url = 'https://cataas.com/cat/gif';
    // const response = await fetch(url);
    // const newGif: Blob = await response.blob();
    // setGif(newGif);
    setRandomGif(`img/cats/cat${getRandom()}.gif`);
    console.log(randomGif);
  };

  const handleImageLoading = () => {
    setIsLoading(false);

    if (catImg) {
      catImg.style.opacity = '1';
    }
  };

  return (
    <div className="file">
      <div className="file_item">
        {isLoading && <CatLoader />}
        {/* {gif && (
          <img
            className="file_img"
            onLoad={handleImageLoading}
            src={URL.createObjectURL(gif)}
            alt="cat-gif"
          />
        )} */}
        {randomGif && (
          <img
            className="file_gif"
            onLoad={handleImageLoading}
            src={randomGif}
            alt="cat-gif"
          />
        )}
      </div>

      <button className="file_btn" onClick={getCatGif}>
        Хочу гифку с котом!
      </button>
    </div>
  );
}

export default CatGif;
